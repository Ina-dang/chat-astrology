let userMessages = [];
let assistantMessages = [];
let myBirthTime = '';

function handleStart() {
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;
  if (!date) {
    alert('생년월일을 입력해주세요');
    return;
  }
  myBirthTime = date + ' ' + time;
  console.log('myBirthTime', myBirthTime);
  document.querySelector('.intro-container').style.display = 'none';
  document.querySelector('.chat-container').style.display = 'block';
}

console.log('userMessages', userMessages);
console.log('assistantMessages', assistantMessages);

const chatMessages = document.getElementById('chatMessages');

const appendMessage = (message, sender) => {
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = message;
  if (sender === 'assistant') {
    messageDiv.classList.add('assistant');
    message !== '운세를 확인하는 중입니다...' &&
      assistantMessages.push(message);
  } else {
    userMessages.push(message);
  }
  chatMessages.appendChild(messageDiv);
  // Scroll to the bottom of chat messages
  chatMessages.scrollTop = chatMessages.scrollHeight;
};

const sendGreeting = () => {
  const greeting = '안녕하세요~ 오늘의 운세를 확인하시겠어요?';
  appendMessage(greeting, 'assistant');
};

const sendMessage = () => {
  openLoading();
  const message = document.getElementById('messageInput').value.trim();
  if (message === '') {
    alert('메시지를 입력해주세요.');
    return;
  }

  appendMessage(message, 'user');
  document.getElementById('messageInput').value = ''; // Clear input field
  postFortune({ userMessages, assistantMessages, myBirthTime }); // Fetch fortune after sending message
};

const postFortune = async (data) => {
  try {
    if (data.userMessages[0].includes('운세')) {
      appendMessage('운세를 확인하는 중입니다...', 'assistant');

      const response = await fetch(
        'https://bd5mezmwiokhbo2tq35mlvf4lm0fmtpq.lambda-url.ap-northeast-2.on.aws/askQuestion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      appendMessage(result.assistant, 'assistant');
    } else {
      // 운세가 아닌 일반 메시지인 경우
      // fetch 요청을 보낼 필요 없으므로 별도의 로딩 처리 없이 바로 메시지를 표시할 수 있습니다.
      const response = await fetch(
        'https://bd5mezmwiokhbo2tq35mlvf4lm0fmtpq.lambda-url.ap-northeast-2.on.aws/askQuestion',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      appendMessage(result.assistant, 'assistant');
    }
    closeLoading();
  } catch (error) {
    console.error(error);
    appendMessage('운세를 불러오는 중에 오류가 발생했습니다.', 'assistant');
    closeLoading();
  }
};

const displayFortune = (fortune) => {
  const messages = fortune.split('\n\n');
  messages.forEach((message, index) => {
    setTimeout(() => appendMessage(message.trim(), 'assistant'), index * 1000);
  });
};

function openLoading() {
  const loadingDiv = document.querySelector('.loading');
  loadingDiv.style.display = 'flex'; // 로딩 창 표시
}
function closeLoading() {
  const loadingDiv = document.querySelector('.loading');
  loadingDiv.style.display = 'none'; // 로딩 창 제거
}

// Call the greeting function when the page loads
sendGreeting();
