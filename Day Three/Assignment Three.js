function convertTemperature(celsiusParameter) {
    let celsius = Number(celsiusParameter);
    if (typeof celsius === "number") {
        let fahrenheit = (celsius * 9 / 5) + 32;
        return fahrenheit + " F";
    } else {
        return "Not a valid input, please type temperature"
    }
}

convertTemperature(27);