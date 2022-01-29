const initPrompt = require('./utils/prompts');

initPrompt()
.then(promptChoice => {
    console.log(promptChoice)
});