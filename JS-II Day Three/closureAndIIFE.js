// IIFE function 

(function sumOfTwoNumbers(numberOne, numberTwo) {
    if ((!isNaN(numberOne) && !isNaN(numberTwo))) {
        let total = numberOne + numberTwo;
        console.log("Sum of Two Numbers: " + total);
        return total;
    } else {
        console.log("Enter valid numbers")
        return "Enter valid numbers"
    }
}(1, 2));


// Closure function to calculate tax 

function calculateTax(taxRate) {
    let taxpercentage = taxRate;
    let baseSalary = 1050;
    function taxAmount() {
        return baseSalary * (taxRate / 100);
    }

    return taxAmount;
}

let getTax = calculateTax(15);
console.log("Tax to be paid: " + getTax());