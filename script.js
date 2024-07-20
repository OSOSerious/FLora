document.addEventListener('DOMContentLoaded', function() {
    const chatButton = document.getElementById('chat-button');
    const chatbot = document.getElementById('chatbot');
    const closeChat = document.getElementById('close-chat');
    const sendMessage = document.getElementById('send-message');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.getElementById('chat-messages');

    chatButton.addEventListener('click', function() {
        chatbot.classList.remove('hidden');
    });

    closeChat.addEventListener('click', function() {
        chatbot.classList.add('hidden');
    });

    sendMessage.addEventListener('click', sendUserMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendUserMessage();
        }
    });

    function sendUserMessage() {
        const message = userInput.value.trim();
        if (message) {
            addMessage('user', message);
            userInput.value = '';
            // Simulate AI response
            setTimeout(() => {
                const aiResponse = "Thank you for your message. How can I assist you with your tech issue today?";
                addMessage('ai', aiResponse);
            }, 1000);
        }
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});

console.log("TechGenius is ready to assist you!");
