//Task 1: Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) //declared a function that will calculate the final invoice amount
    {
        let total = (subtotal + (subtotal * taxRate)) - discount;
        return `Total Invoice: $${total.toFixed(2)}`;  //to.Fixed will format the number value to decimal places
    };
    console.log(calculateInvoice(100, 0.08, 5)); // Test Data: "Total Invoice: $103.00"
    console.log(calculateInvoice(500, 0.1, 20)); // Test Data: "Total Invoice: $530.00"

//Task 2: Employee Hourly Wage Calculation 
let calculateHourlyWage = function(salary, hoursPerWeek)//declaring a function that will calcualte the hourly wage 

    {
        let hourlyWage = salary / (hoursPerWeek * 52);
        return `Hourly Wage: $${hourlyWage.toFixed(2)}`; //to.Fixed will format the number value to decimal places
    };
    console.log(calculateHourlyWage(52000, 40)); // Test data: "Hourly Wage: $25.00"
    console.log(calculateHourlyWage(75000, 35)); // Test data: "Hourly Wage: $41.21"

//Task 3: Customer Loyalty Points 
const calculateLoyaltyDiscount = (amount, years) => 
    {
        let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05; //arrow function that determines your discount based on loyalty years
        let discountedPrice = amount * (1 - discount); //function that will apply the discount 
        return `Discounted Price: $${discountedPrice.toFixed(2)}`; //to.Fixed will format the number value to decimal places
    }
    console.log(calculateLoyaltyDiscount(100, 6)); // test data: "Discounted Price: $85.00"
    console.log(calculateLoyaltyDiscount(200, 2)); // test data: "Discounted Price: $190.00"

//Task 4: Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) //function that will help calcualte shipping fees
    {
        let base = 0;
        if (location == "USA") base = (weight * 0.5) + 5;
        else if (location == "Canada") base = (weight * 0.7) + 10;
        if (expedited == true) base += 10;
        console.log(`Shipping Cost: $${base.toFixed(2)}`); 
     }
calculateShippingCost(10, "USA", true); // test data: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // test data: "Shipping Cost: $13.50"
    
//Task 5: Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years)
     {
        let interest = principal * rate * years; // formula that will calcualte total loan interest
        return `Total Interest: $${interest.toFixed(2)}`; //to.Fixed will format the number value to decimal places
     }
console.log(calculateLoanInterest(1000, 0.05, 3)); // test data "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // test data: "Total Interest: $1750.00"

//Task 6: Higher Order Functions 
let transactions = [500, 1200, 3000, 800, 2200]; //declaring an array with 5 different amouunts 
let filterLargeTransactions = transactions.filter(transactions => transactions > 1000); // function that will filter transactions that are larger than $1000
console.log(filterLargeTransactions); // test data: [1200, 3000, 2200]

//Task 7: Budget Tracker 
function createBudgetTracker() //function that will return another function
    { 
        let totalBudget = 0; //initializing the beginning budget
        return function(budgetExpense) 
        {//will add budgetExpenses to the account everytime to revise account balance
            totalBudget -= budgetExpense; 
            console.log(`Current Balance: $${totalBudget}`); 
        }
    };
let budget = createBudgetTracker(); 
budget(300); // test data: "Current Balance: -$300"
budget(200); // test data: "Current Balance: -$500"

//Task 8: Business Growth Projection
function calculateGrowth(year, revenue)
{
    if (year >= 10) //growth for 10 years
    {  
        return revenue; 
    }  
return calculateGrowth(year + 1, revenue * 1.05); //will annually calculate 5% until year 10 is reached
}

console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`); // test data: "Projected Revenue: $1102.50"
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`); // test data: "Projected Revenue: $5525.63"