document.getElementById('submit-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userInput })
    });
    const jsonResponse = await response.json();
    document.getElementById('chatbot-response').textContent = jsonResponse.response;
});