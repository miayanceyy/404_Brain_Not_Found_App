// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
    
    // Riddles for each location
    const riddles = [
        "I stand tall with a clock on my face, Clemson's most iconic place. What am I?",
        "Tigers roar within my walls, 80,000 strong for football calls. What am I?",
        "Books and knowledge fill my floors, students study behind my doors. What am I?",
        "A peaceful garden where plants grow, botanical knowledge on display and show. What am I?",
        "A center for students to gather and meet, with food and activities that can't be beat. What am I?"
    ];
    
    let currentRiddle = 0;
    
    // Send first riddle after a delay
    setTimeout(function() {
        addBotMessage(riddles[currentRiddle]);
    }, 1000);
    
    // Function to add bot message
    function addBotMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'bot-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to add user message
    function addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to handle user input
    function handleUserInput() {
        const message = userInput.value.trim();
        if (message) {
            addUserMessage(message);
            userInput.value = '';
            
            // Simple response logic (can be expanded)
            setTimeout(function() {
                if (currentRiddle < riddles.length - 1) {
                    addBotMessage("Good effort! Here's your next clue:");
                    currentRiddle++;
                    addBotMessage(riddles[currentRiddle]);
                } else {
                    addBotMessage("Congratulations! You've solved all the riddles. Now explore the campus to find all the locations!");
                }
            }, 1000);
        }
    }
    
    // Event listeners
    sendButton.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});