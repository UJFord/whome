export function newInput(templateInput) {
    let active = this.document.querySelector(".input-active")
    active.classList.remove("input-active", "active-border")
    active.removeAttribute("contenteditable")
    active.removeAttribute("spellcheck")

    currentInput = active.textContent.toString()

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
    validateCmd(currentInput.split(/\s+/))
}