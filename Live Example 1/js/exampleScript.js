

const buttonElement = document.getElementById("testButton")
const inputElement = document.getElementById("nameInput")

// Arrow function
const arrowFunction = name => {
  const inputName = inputElement.value
  alert("Hello, " + inputName)
}



buttonElement.addEventListener("click", arrowFunction("Joseph"))

// Register on change listener
inputElement.onchange = () => {
  const dynamicContentContainer = document.getElementById("dynamicContent")

  const inputText = inputElement.value

  dynamicContentContainer.innerText = "You typed in: " + inputText
}


// Named function
function namedFunction(name) {
  alert(name)
}

// Function expression
const functionExpression = function(name) {
  alert(name)
}

// Function currying