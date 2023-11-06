#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
figlet.textSync("Number Guessing Game");
console.log(figlet.textSync("Number Guess Game from 1-10"));


while(true){
  while(true){
    function randomnum(){
      let i=Math.random()*10;
        return i
      }
    let number=(randomnum().toFixed(0));
      // console.log(chalk.yellow(`Number : ${number}`));
  
    let guessing_game=await inquirer.prompt([{
      name:"guess",
      type:"number",
      message:chalk.cyan("Guess the Number... ")
      }])
    if(number==guessing_game.guess){
      console.log(chalk.green.bold.underline("You Win"));
      break
    }
    else
      console.log(chalk.red.bold.strikethrough("You Loss")); 
    continue
  }
   
  let decide=await inquirer.prompt([{
    name:"Decision",
    type:"list",
    message:chalk.cyan("Do You To Play Again"),
    choices:["Yes","No"]
    }])
  if(decide.Decision=="Yes")
      continue
  else
      break
} 
console.log(chalk.greenBright.bold.italic("Thanks For Playing!"));
  