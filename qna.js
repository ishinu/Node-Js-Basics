const req= require('readline');

const rl= req.createInterface({input : process.stdin, output : process.stdout});

let num1= Math.floor((Math.random()*10)+1);
let num2 = Math.floor((Math.random()*10)+1);
let answer=num1 + num2 ;

rl.question(`Q1. What is ${num1} + ${num2}? \n`,
(userInput) =>{
    if(userInput.trim()==answer){
        rl.close();
    }
    else{
        rl.setPrompt(`Your answer "${userInput}" is Incorrect response, please correct answer \n`);
        rl.prompt();
        rl.on('line',(userInput)=>{
            if(userInput.trim()==answer)
                rl.close();
            else{
                rl.setPrompt(`Again "${userInput}" is wrong! Kindly add properly \n`);
                rl.prompt();
            }
        });
    }
});

rl.on('close',()=>{
    console.log('Correct answer!!');
});