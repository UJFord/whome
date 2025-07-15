import { FocusInput, GetInput } from "./input.js";
import { ValidateCmd } from "./output.js";

// focus input on load
window.addEventListener("load", function () {
    FocusInput()
})

// submit input
window.addEventListener("keydown", function (event) {

    // prevent newline by default

    switch (event.key) {
        case "Enter":
            event.preventDefault()
            let input = GetInput()
            ValidateCmd(input)
            break;
        default:
        //     let activeInput = document.querySelector(".input-active")
        //     let isFocused = document.activeElement === activeInput
        //     if (!isFocused) {
        //         FocusInput(event.key)
        //     }
    }
})

// can't import from a FocusInput
// I dont know why it won't work
window.addEventListener("click", () => {
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)

    let terminal = document.querySelector(".terminal")
    terminal.scrollTop = terminal.scrollHeight
})

let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", () => {
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)

    let terminal = document.querySelector(".terminal")
    terminal.scrollTop = terminal.scrollHeight
})

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", () => {
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)

    let terminal = document.querySelector(".terminal")
    terminal.scrollTop = terminal.scrollHeight
})

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", () => {
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)

    let terminal = document.querySelector(".terminal")
    terminal.scrollTop = terminal.scrollHeight
})
