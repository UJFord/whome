import { focusInput, createInput } from "./input.js";
import { validateCmd } from "./output.js";

// submit input
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // prevent newline by default
        event.preventDefault()

        let input = createInput()
        validateCmd(input)
    }
})

// focus input on load
window.addEventListener("load", function() {
    createInput()
})

// focus input on click
let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", focusInput())

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", focusInput())

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", focusInput())
