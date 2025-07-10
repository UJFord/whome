// focus into input-able element on startup
window.addEventListener("load", function () {
    let repeatCount = 1000
    for (let i = 0; i < repeatCount; i++) {
        setTimeout(()=>{
            newInput("testing")
        }, (100 * (i + 1))
        )
    }
})

function newInput(templateInput) {
    let active = this.document.querySelector(".input-active")
    active.classList.remove("input-active", "active-border")
    active.removeAttribute("contenteditable")
    active.removeAttribute("spellcheck")

    console.log(active.textContent.toString())

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
    inputTxt.textContent = "testing"
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

window.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        // prevent new line by default
        event.preventDefault()
        newInput("")
    }
})

// focus into input onclick anywhere on the page
window.addEventListener("click", function () {
    let inputActive = document.querySelector(".input-active")
    focusInput(inputActive)
})