import inquirer from "inquirer";
let UsdRate = 277.90;
let GbpRate = 351.01;
let EuroRate = 301.12;
// let confirmExit;
// do{
//     confirmExit = await inquirer.prompt({
//         type: "confirm",
//         name: "exit",
//         message: "Do you want to convert PKR amount ?"
//     });
//     if (!confirmExit.exit){
//         break;
//     }
let CurrencyAmount = await inquirer.prompt([
    {
        name: "currency",
        type: "list",
        choices: [`US Dollar`, `Pound`, `Euro`],
        message: "Please select any currency: "
    },
    {
        name: "amount",
        type: "number",
        message: "please enter PKR amount to convert:"
    }
]);
if (CurrencyAmount.currency == "US Dollar") {
    console.log(`Here is your converted US Dollars : $${CurrencyAmount.amount / UsdRate}`);
}
else if (CurrencyAmount.currency == "Pound") {
    console.log(`Here is your converted Britian Pound : £${CurrencyAmount.amount / GbpRate}`);
}
else {
    console.log(`Here is your converted Euro Pound : €${CurrencyAmount.amount / EuroRate}`);
}
// }while(confirmExit.exit);
