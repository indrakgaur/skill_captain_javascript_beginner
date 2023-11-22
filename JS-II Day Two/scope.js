let globalVariable = "This is global variable value";

function localScopeDemo() {
    let localVariable = "This is local variable value";
    console.log("Inside local scope function: " + localVariable);

    function innerFunction() {
        console.log("Inside inner scope function: " + globalVariable);
    };

    innerFunction();
}

localScopeDemo();