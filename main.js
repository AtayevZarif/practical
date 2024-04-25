let body = document.querySelector("body")
let element = document.createElement("h1")
body.appendChild(element)

let text = document.createTextNode(prompt("Enter your text"))
element.appendChild(text)
let textColor = prompt("Enter text color")
let fontSize = prompt("Enter text size")
let border = prompt("Enter text border")
let borderRadius = prompt("Enter border radius")
let textDecoration = prompt("Enter text decoration")
let backgroundColor = prompt("Enter background color")

element.style.color = textColor;
element.style.fontSize = fontSize
element.style.textDecoration = textDecoration
element.style.border = border
element.style.borderRadius = borderRadius

body.style.background = backgroundColor;
body.style.height = "100vh"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"