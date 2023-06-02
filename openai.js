const openai = require('openai');
const apiKey = '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';

openai.apiKey = apiKey;

async function generateGpt3Response(prompt, model = 'text-davinci-002', maxTokens = 100) {
    try {
        const response = await openai.Completion.create({
            engine: model,
            prompt,
            max_tokens: maxTokens,
            n: 1,
            stop: null,
            temperature: 0.8,
        });

        return response.choices[0].text.trim();
    } catch (error) {
        console.error(error);
        return '';
    }
}

module.exports = {
    generateGpt3Response,
};