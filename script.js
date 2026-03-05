function sayWelcome() {
    const audio = new Audio("assets/Welcome.m4a");
    audio.play();
}
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target.toLocaleString() + '+';
    }
  };

  updateCount();
});

async function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;

    if (!message) return;

    const chatBox = document.getElementById("chat-box");

chatBox.innerHTML = "<p><b>You:</b> " + message + "</p>";

const response = await fetch("https://mva-chat-api.onrender.com/chat", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: message
    })
});

const data = await response.json();

chatBox.innerHTML += "<p><b>Assistant:</b> " + data.answer + "</p>";
    
    input.value = "";
}
