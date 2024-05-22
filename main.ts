#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 1234;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your 4-digit pin",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
  console.log("Correct pin code!!!");

  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select option",
      type: "list",
      choices: ["withdraw", "check balance", "Fast Cash"],
    },
  ]);

  console.log(operationAns);

  if (operationAns.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        message: "enter your amount",
        type: "number",
      },
    ]);

    if (myBalance >= amountAns.amount) {
        console.log(myBalance -= amountAns.amount)
        console.log(`your remaining balance is: ${myBalance}`);
    } else {
        console.log(`Sorry! you do not have enough amount`);
        // tempelate literal
    }
  } else if (operationAns.operation === "check balance") {
    console.log("your balance is: " + myBalance);
    // new operator
  } else if (operationAns.operation === "Fast Cash") {
    let optionAns = await inquirer.prompt([
        {
            name: "option",
            message: "select your amount",
            type: "list",
            choices: ["5000", "10000", "20000", "50000", "100000"]
        }
    ]);
    
    if (myBalance >= optionAns.option) {
        console.log(myBalance -= optionAns.option)
        console.log(`your remaining balance is: ${myBalance}`);
    } else {
        console.log(`Sorry! you do not have enough amount`);
        // tempelate literal
    }




  } 
} else {
  console.log("Incorrect pin number");
}
