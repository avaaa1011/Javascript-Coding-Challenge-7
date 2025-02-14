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