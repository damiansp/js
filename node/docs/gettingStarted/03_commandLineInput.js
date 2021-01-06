const readline = require('readline');


const read = readline.createInterface({input: process.stdin,
                                       output: process.stdout});

read.question('What is your name? ', name => {
    console.log(`Hi, ${name}!`);
    read.close();
});


// Using inquirer
const inquirer = require('inquirer');


let questions = [{type: 'input', name: 'name', message: 'What is your name? '}];
inquirer.prompt(questions).then(answers => {
    console.log(`Hi, ${answers['name']}!`);
});
