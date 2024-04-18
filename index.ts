import inquirer from "inquirer";

let UsdRate : number = 277.90;
let GbpRate : number = 351.01;
let EuroRate : number = 301.12;

   
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

if(CurrencyAmount.currency == "US Dollar")
{
    console.log(`Here is your converted US Dollars : $${CurrencyAmount.amount / UsdRate}`)
}
else if (CurrencyAmount.currency == "Pound")
{
    console.log(`Here is your converted Britian Pound : £${CurrencyAmount.amount / GbpRate}`)
}
else {
    console.log(`Here is your converted Euro Pound : €${CurrencyAmount.amount / EuroRate}`);
}

// }while(confirmExit.exit);

