function replaceText(inputText) {
    let resultText = inputText.replace(/Javascript/gi, `ES6`);
    console.log(resultText);
}

replaceText("This is Javascript test code");