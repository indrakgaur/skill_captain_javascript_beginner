export function calculateFactorial(number) {
    if (!isNaN(number)) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result = result * i;
        }
        console.log(result);
        return result;
    } else {
        return "Invalid Input"
    }

}
