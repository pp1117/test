document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("chatbot-text").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById("chatbot-text").value;
    if (userInput.trim() === "") {
        return;
    }

    addMessage(userInput, "user");
    document.getElementById("chatbot-text").value = "";

    setTimeout(function() {
        var botResponse = getBotResponse(userInput);
        addMessage(botResponse, "bot");
    }, 500);
}

function addMessage(message, type) {
    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message", type);
    messageContainer.textContent = message;

    var chatbotMessages = document.getElementById("chatbot-messages");
    chatbotMessages.appendChild(messageContainer);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotResponse(userInput) {
    const responses = {
        "hello": "Hi there! Welcome to Mahesh.app. How can I assist you today?",
        "what is mahesh.app": "Mahesh.app is a leading AI voice robot company, specializing in advanced voice solutions to enhance communication and efficiency for businesses.",
        "services": "We offer AI voice solutions, tailored voice solutions, and more to help streamline operations and improve customer interactions.",
        "contact": "You can reach us at +91 8828624374 or email us at [email protected].",
        "founders": "Our founders are Mahesh Nellore, CEO & Founder, and Maha Prasad Kadam, Co-Founder. They lead the strategic direction of Mahesh.app."
    };

    return responses[userInput.toLowerCase()] || "Sorry, I didn't understand that. Please ask about our services, founders, or contact information.";
}
