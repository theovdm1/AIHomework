document.addEventListener('DOMContentLoaded', () => {
    const messages = document.getElementById('messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const historyList = document.getElementById('history-list');

    let chatHistory = [];

    const sendMessage = () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage('user', userMessage);
            userInput.value = '';
            // Simulate AI response for now
            setTimeout(() => addMessage('ai', 'This is a simulated AI response.'), 1000);
        }
    };

    const startNewChat = () => {
        const currentChat = messages.innerHTML;
        if (currentChat.trim()) {
            const chatName = `Chat ${chatHistory.length + 1}`;
            const historyItem = document.createElement('li');
            historyItem.textContent = chatName;
            historyItem.addEventListener('click', () => {
                messages.innerHTML = currentChat;
            });
            historyList.appendChild(historyItem);
            chatHistory.push({ name: chatName, content: currentChat });
        }
        messages.innerHTML = '';
    };

    sendButton.addEventListener('click', sendMessage);

    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    const newChatButton = document.createElement('button');
    newChatButton.textContent = 'New Chat';
    newChatButton.id = 'new-chat-button';
    newChatButton.addEventListener('click', startNewChat);
    document.getElementById('input-container').appendChild(newChatButton);

    function addMessage(sender, text) {
        const message = document.createElement('div');
        message.classList.add('message', sender);
        message.textContent = text;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
    }
});