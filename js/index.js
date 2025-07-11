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

function newInput(templateInput) {
    let active = this.document.querySelector(".input-active")
    active.classList.remove("input-active", "active-border")
    active.removeAttribute("contenteditable")
    active.removeAttribute("spellcheck")

    currentInput = active.textContent.toString()
    console.log(currentInput.split(/\s+/))

    // validateCmd(currentInput)

    let newCmd = this.document.createElement("div")
    newCmd.classList.add("input-cmd",)
    newCmd.setAttribute("spellcheck", "false")

    let caret = this.document.createElement("span")
    caret.classList.add("caret")
    caret.textContent = `>`
    newCmd.appendChild(caret)

    let inputTxt = this.document.createElement("div")
    inputTxt.classList.add("active-border", "input-active")
    inputTxt.setAttribute("contenteditable", "true")
    inputTxt.textContent = templateInput
    newCmd.appendChild(inputTxt)

    let terminal = this.document.querySelector(".terminal")
    terminal.appendChild(newCmd)

    focusInput(inputTxt)
}

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

function validateCmd(input) {
    let args = input.split(/\s/)
    console.log(args)
}