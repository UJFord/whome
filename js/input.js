export function CreateInput(templateInput) {
    let active = document.querySelector(".input-active")
    active.classList.remove("input-active", "active-border")
    active.removeAttribute("contenteditable")
    active.removeAttribute("spellcheck")

    let currentInput = active.textContent.toString()

    let newCmd = document.createElement("div")
    newCmd.classList.add("input-cmd",)
    newCmd.setAttribute("spellcheck", "false")

    let caret = document.createElement("span")
    caret.classList.add("caret")
    caret.textContent = `>`
    newCmd.appendChild(caret)

    let inputTxt = document.createElement("div")
    inputTxt.classList.add("active-border", "input-active")
    inputTxt.setAttribute("contenteditable", "true")
    inputTxt.textContent = templateInput
    newCmd.appendChild(inputTxt)


    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newCmd)

    FocusInput(inputTxt)
    return currentInput
}


export function FocusInput() {
    let el = document.querySelector(".input-active")

    el.focus()
    let range = document.createRange()
    range.selectNodeContents(el)
    range.collapse(false)

    let sel = window.getSelection()
    sel.removeAllRanges()
    sel.addRange(range)
}
