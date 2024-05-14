import inquirer  from "inquirer";

// Initialize user balance and pin code 
let myBalance = 10000
let myPin = 2005;

// print welcome message
console.log("welcome -ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
         name:"pin",
         type:"number",
         message:"Enter your pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is correct,login Sucessfully!");
    console.log(`Current Account Balance is ${myBalance}`)
  
  let operationAns =await inquirer.prompt([
    {
          name:"operation",
          type:"list",
         message:"Select an operation:",
         Choices: {"Withdraw Amount":"Check Balance"}}
])

if(operationAns.operation === "Withdraw Amount"){
    let AmountAns = await inquirer.prompt([
    {
        name:"amount",
       type:"number",
       message: "Enter the amount to withdraw:"
    }
   ])
if(AmountAns.amount > myBalance){
    console.log("Insufficient Balance");
}
else{
    myBalance -= AmountAns.amount;
    console.log(`${AmountAns.amount} Withdraw Sucessfully`);
    console.log(`Your Remaining Balance is: ${myBalance}`)
}

}
else if (operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`);

}
}
else{
    console.log("Pin is incorrect, Try again!");
}