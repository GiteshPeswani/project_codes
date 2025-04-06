const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const chatBox = document.getElementById("chat-box");

// Handle Send Button Click
sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (!message) return;

  // Show user message
  chatBox.innerHTML += `<p class="user-msg">👤: ${message}</p>`;
  userInput.value = "";

  // Show bot is thinking...
  chatBox.innerHTML += `<p class="bot-msg" id="loading-msg">🤖: Thinking...</p>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  // Simulate AI response
  setTimeout(() => {
    document.getElementById("loading-msg").remove();
    const reply = getMockReply(message);
    chatBox.innerHTML += `<p class="bot-msg">🤖: ${reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
});

function getMockReply(message) {
  message = message.toLowerCase();

  if (message.includes("fever") || message.includes("cold")) {
    return "You may be experiencing flu-like symptoms. Please stay hydrated and consult a doctor if it persists.";
  } else if (message.includes("headache")) {
    return "Try to rest in a quiet dark room. Drink water. If pain continues, consider taking a paracetamol.";
  } else if (message.includes("not feeling well")) {
    return "I'm here for you! Can you tell me more about your symptoms?";
  } else if (message.includes("medicine") || message.includes("tablet")) {
    return "Please consult a certified doctor before taking any medication. I can help guide you to one!";
  } else {
    return "I'm still learning! Could you rephrase or provide more details about your symptoms?";
  }
}
const micBtn = document.getElementById("mic-btn");

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';

  micBtn.addEventListener("click", () => {
    recognition.start();
    micBtn.innerText = "🎙️"; // Change icon while listening
  });

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    userInput.value = transcript;
    micBtn.innerText = "🎤";
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    micBtn.innerText = "🎤";
  };

  recognition.onend = () => {
    micBtn.innerText = "🎤";
  };
} else {
  micBtn.disabled = true;
  micBtn.title = "Speech Recognition not supported";
}