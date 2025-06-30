// focus into input-able element on startup
window.addEventListener("load", function () {
    let firstCommand = document.querySelector('.input-active')
    focusInput(firstCommand)
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

window.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault()

        let active = this.document.querySelector(".input-active")
        active.classList.remove("input-active", "active-border")
        active.removeAttribute("contenteditable")
        active.removeAttribute("spellcheck")

        console.log(active.textContent.toString())

        let newCmd = this.document.createElement("div")
        newCmd.classList.add("input-cmd", "input-active", "active-border")
        newCmd.setAttribute("contenteditable", "true")
        newCmd.setAttribute("spellcheck", "false")
        
        let caret = this.document.createElement("span")
        caret.classList.add("caret")
        caret.textContent = ">"

        newCmd.appendChild(caret)
        let textNode = this.document.createTextNode("")
        newCmd.appendChild(textNode)

        let terminal = this.document.querySelector(".terminal")
        terminal.appendChild(newCmd)

        focusInput(newCmd)

    }
})

// add input after submit
// window.addEventListener("", function (event) {

//     let marker = "<span class='input-caret'>></span>"
//     let newCmd = "<span class='input-txt'></span>"

//     if (event.key === "Enter") {

//         event.preventDefault()

//         let inputElement = document.querySelector(".input-cmd.input-active")
//         let inputCmd = inputElement.textContent.toString()
//         inputElement.classList.remove("input-active")
//         inputElement.removeAttribute("contenteditable")

//         let index = inputCmd.indexOf(marker)
//         if (index !== -1) {
//             inputCmd = inputCmd.substring(index + marker.length)
//         }

//         let newElement = document.createElement("div")
//         newElement.classList.add("input-cmd", "input-active", "active-border")
//         newElement.setAttribute("contenteditable", "true")
//         newElement.setAttribute("spellcheck", "false")
//         newElement.innerHTML = marker

//         let termContainer = document.querySelector(".term-container")
//         termContainer.appendChild(newElement)


//         console.log(inputCmd)
//         focusInput(newCmd)
//         console.log(newElement)
//     }
// })