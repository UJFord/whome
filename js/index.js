import { FocusInput, CreateInput, GetInput } from "./input.js";
import { ValidateCmd } from "./output.js";

// focus input on load
window.addEventListener("load", function() {
    FocusInput()
})

// submit input
window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        // prevent newline by default
        event.preventDefault()

        let input = GetInput()
        ValidateCmd(input)
        CreateInput()
    }
})

// focus input on click
let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", FocusInput())

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", FocusInput())

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", FocusInput())
