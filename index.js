const db = require('./db/connection');
const initPrompt = require('./utils/prompts');

db.connect(err => {
    if(err) throw err;
    console.log('Database connected')
    initPrompt()
    .then(promptChoice => {
    console.log(promptChoice)
    });
})

