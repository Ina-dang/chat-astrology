const OpenAI = require('openai');
require('dotenv').config();
const serverless = require('serverless-http');
const openai = new OpenAI({ apiKey: process.env['OPENAI_API_KEY'] });
const express = require('express');
const app = express();
const cors = require('cors');

let corsOptions = {
  origin: 'https://chat-astrology-cjp.pages.dev',
  credentials: true,
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

//aws Lambda에서 서버리스로 사용하도록
module.exports.handler = serverless(app);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
