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
            const aiResponse = getAIResponse(message);
            setTimeout(() => {
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

    function getAIResponse(message) {
        message = message.toLowerCase();
        
        if (message.includes('hello') || message.includes('hi')) {
            return "Hello! How can I assist you with your tech questions today?";
        } else if (message.includes('slow computer') || message.includes('speed up')) {
            return "To speed up your computer, try these steps: 1) Uninstall unused programs, 2) Limit startup programs, 3) Add more RAM, 4) Check for viruses and malware, 5) Consider upgrading to an SSD if you're using an HDD.";
        } else if (message.includes('wifi') || message.includes('internet')) {
            return "For WiFi issues, try: 1) Restarting your router, 2) Checking for interference from other devices, 3) Updating router firmware, 4) Considering a WiFi extender for better coverage.";
        } else if (message.includes('battery') || message.includes('charge')) {
            return "To improve battery life: 1) Reduce screen brightness, 2) Turn off WiFi and Bluetooth when not in use, 3) Close background apps, 4) Enable power-saving mode, 5) Avoid extreme temperatures.";
        } else if (message.includes('virus') || message.includes('malware')) {
            return "If you suspect a virus: 1) Run a full scan with your antivirus software, 2) Update your OS and all software, 3) Avoid clicking suspicious links or downloading unknown files, 4) Consider using a reputable malware removal tool.";
        } else {
            return "I'm sorry, I don't have specific information about that. Could you try rephrasing your question or asking about a different tech issue?";
        }
    }
});

console.log("TechGenius is ready to assist you!");
