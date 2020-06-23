
const nameInputElement = document.getElementById("nameInput")

// Register on change listener
nameInputElement.onchange = () => {
  document.getElementById("dynamicContent").innerText = nameInputElement.value
}



// Arrow function
const exampleFunction = name => {
  const inputName = nameInputElement.value
  alert("Hello, " + inputName)
}

// Named function
function exampleNamedFunction(name) {
  alert(name)
}

// Function expression
const exampleFunctionExpression = function(name) {
  alert(name)
}

document.getElementById("testButton").addEventListener("click", () => exampleFunction("test"))

// Function currying, creating a function that returns a function. This is used when we want to "pass" a function with a specific parameter set, but don't want to execute it.

// Non-curried example
// document.getElementById("testButton").addEventListener("click", exampleFunction("test"))

// Curried example