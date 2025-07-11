import { newInput } from "./newInput";
let currentInput = "";

// focus into input-able element on startup
window.addEventListener("load", function () {
    // let repeatCount = 50
    // for (let i = 0; i < repeatCount; i++) {
    //     setTimeout(() => {
    //         newInput("testing")
    //     }, (100 * (i + 1))
    //     )
    // }
    newInput()
})

function focusInput(el) {
    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
}

let terminalContainer = document.querySelector(".terminal-container")
terminalContainer.addEventListener("click", function () {
    let inputActive = document.querySelector(".input-active")
    focusInput(inputActive)
})

let terminal = document.querySelector(".terminal")
terminal.addEventListener("click", function () {
    let inputActive = document.querySelector(".input-active")
    focusInput(inputActive)
})

let inputCmd = document.querySelector(".input-cmd")
inputCmd.addEventListener("click", function () {
    let inputActive = document.querySelector(".input-active")
    focusInput(inputActive)
})

window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        // prevent new line by default
        event.preventDefault()
        newInput()
    }
})

function validateCmd(args) {
    // drawOutput(args)
    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active")

    let terminal = this.document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}

// function drawOutput(output){
//     console.log(output)

// }