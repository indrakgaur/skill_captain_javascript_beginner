let arrayOfNumbers = [5, 12, 15, 20, 25, 30, 35, 40, 45, 50];
let doubledNumbers = arrayOfNumbers.map((number) => {
    return number * 2;
});
doubledNumbers.push(3);
doubledNumbers.push(7);
let evenNumbers = doubledNumbers.filter((number) => {
    return number % 2 === 0;
});


evenNumbers.forEach((number) => {
    console.log(number);
});
