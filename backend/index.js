import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';
import {
  handleFortuneRequest,
  handleGetFortuneRequest,
  handleSajuRequest,
  handleTarotRequest,
} from './tools.js';

dotenv.config();
const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });
const app = express();

let corsOptions = {
  // origin: 'https://chat-astrology-cjp.pages.dev',
  // credentials: true,
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/askQuestion', async function (req, res) {
  const { myBirthTime, userMessages, assistantMessages } = req.body;
  let today = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });
  console.log(userMessages);
  console.log(assistantMessages);
  let messages = [
    {
      role: 'system',
      content:
        "당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 '점성술사 유리'입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다. 또한 운세가 아닌 각종 질문에도 모든 답변을 운세로 해석하여 답할 수 있을정도로 천재입니다.",
    },
    {
      role: 'user',
      content:
        '당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부며 운세 뿐아닌 그 외의 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.',
    },
    {
      role: 'assistant',
      content:
        '안녕하세요. 점성술사 유리입니다! 어떤 질문에 대해 도와드릴까요?',
    },
    {
      role: 'user',
      content: `저의 생년월일과 태어난 시간은 ${myBirthTime}입니다. 오늘은 ${today}입니다.`,
    },
    {
      role: 'assistant',
      content: `당신의 생년월일과 태어난 시간은 ${myBirthTime}인 것과 오늘은 ${today}인 것을 확인하였습니다. 어떤 것이든 물어보세요!`,
    },
  ];
  console.log('messages::', messages);
  while (userMessages.length != 0 || assistantMessages.length != 0) {
    if (userMessages.length != 0) {
      messages.push(
        JSON.parse(
          `{"role": "user", "content": "${String(userMessages.shift())
            .replace(/"/g, "'")
            .replace(/\n/g, '')}"}`
        )
      );
    }
    if (assistantMessages.length != 0) {
      messages.push(
        JSON.parse(
          `{"role": "user", "content": "${String(assistantMessages.shift())
            .replace(/"/g, "'")
            .replace(/\n/g, '')}"}`
        )
      );
    }
  }

  try {
    const completion = await openai.chat.completions.create({
      messages,
      model: 'gpt-3.5-turbo',
    });
    let fortune = completion.choices[0].message['content'];
    res.json({ assistant: fortune });
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while processing your request.');
  }
});

// app.post('/saju', async (req, res) => {
//   const { name, birth, birthTime } = req.body;

//   const messages = [
//     {
//       role: 'system',
//       content:
//         '당신은 세계 최고의 역술가입니다. 사람의 이름과 생년월일로 그 사람의 음양오행을 분석할 수 있습니다.',
//     },
//     {
//       role: 'user',
//       content: `저의 이름과 생년월일시를 분석해서 제 음양오행과 사주결과를 알려주세요: 이름은 ${name}이고, 태어난 생년월일은 ${birth}, 태어난 시간은 ${birthTime} 입니다.`,
//     },
//   ];

//   try {
//     const completion = await openai.chat.completions.create({
//       messages,
//       model: 'gpt-3.5-turbo',
//     });

//     let sajuResult = completion.choices[0].message['content'];
//     res.json({
//       code: 'OK',
//       message: '사주 해석에 성공하였습니다.',
//       result: sajuResult,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(200).send({
//       code: 'ERROR',
//       message: error?.message || String(error),
//     });
//   }
// });
app.post('/api/saju/result', async (req, res) => {
  try {
    await handleSajuRequest(req, res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
});

app.post('/api/tarot/result', async (req, res) => {
  try {
    await handleTarotRequest(req, res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
});

app.get('/api/fortune/result', async (req, res) => {
  try {
    await handleFortuneRequest(res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
});

app.get('/api/fortune/result/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await handleGetFortuneRequest(id, res);
  } catch (error) {
    console.error(error);
    res.status(200).send({
      code: 'ERROR',
      message: '서버에서 오류가 발생했습니다.',
    });
  }
});
//aws Lambda에서 서버리스로 사용하도록
// module.exports.handler = serverless(app);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
