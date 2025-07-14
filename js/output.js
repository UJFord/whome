export function ValidateCmd(args) {
    args = args.split(/\s+/)

    switch (args[1]) {
        case "draw":
            console.log("drawing...")
            DrawOutput(args)
    }
}

export function DrawOutput(args) {
    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active")

    newOutput.textContent(args[2])

    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}
