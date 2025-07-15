import { FocusInput, GetInput } from "./input.js";
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
    }

    if(event.key === 'Tab'){
        event.preventDefault()
    }
})

// can't import from a FocusInput
// I dont know why it won't work
window.addEventListener("click", ()=>{
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
})

document.addEventListener("click", FocusInput())

let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", ()=>{
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
})

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", ()=>{
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
})

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", ()=>{
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
})
