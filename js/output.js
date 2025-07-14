export function ValidateCmd(args) {
    args = args.split(/\s+/)

    switch (args[0]) {
        case "draw":
            console.log("drawing...")
            DrawOutput(args)
        default:
            DrawOutput(args)
    }
}

export function DrawOutput(args) {
    let oldOutput = document.querySelector(".output-active")
    if (oldOutput) {
        oldOutput.classList.remove("output-active")
    }

    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active")

    // args.shift()
    newOutput.textContent = args.join(" ")

    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}
