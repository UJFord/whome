import { FocusInput, CreateInput } from "./input.js";
import { ValidateCmd } from "./output.js";

// submit input
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // prevent newline by default
        event.preventDefault()

        let input = CreateInput()
        ValidateCmd(input)
    }
})

// focus input on load
window.addEventListener("load", function() {
    CreateInput()
})

// focus input on click
let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", FocusInput())

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", FocusInput())

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", FocusInput())
