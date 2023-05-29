document.addEventListener("DOMContentLoaded", function() {
  var chatbotContainer = document.getElementById("chatbot-container");
  var chatbotHeader = document.getElementById("chatbot-header");
  var chatbotMinimize = document.getElementById("chatbot-minimize");
  var chatbotMessages = document.getElementById("chatbot-messages");
  var chatbotInput = document.getElementById("chatbot-input");
  var isMinimized = false;

  chatbotMinimize.addEventListener("click", function() {
    if (isMinimized) {
      chatbotContainer.style.height = "400px";
      chatbotMessages.style.display = "block";
      chatbotInput.style.display = "flex";
      chatbotMinimize.textContent = "-";
      isMinimized = false;
    } else {
      chatbotContainer.style.height = "auto";
      chatbotMessages.style.display = "none";
      chatbotInput.style.display = "none";
      chatbotMinimize.textContent = "+";
      isMinimized = true;
    }
  });

  chatbotHeader.addEventListener("click", function() {
    if (isMinimized) {
      chatbotContainer.style.height = "400px";
      chatbotMessages.style.display = "block";
      chatbotInput.style.display = "flex";
      chatbotMinimize.textContent = "-";
      isMinimized = false;
    } else {
      chatbotContainer.style.height = "auto";
      chatbotMessages.style.display = "none";
      chatbotInput.style.display = "none";
      chatbotMinimize.textContent = "+";
      isMinimized = true;
    }
  });
});


  