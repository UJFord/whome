
export function validateCmd(args) {
    args = args.split(/\s+/)

    switch (args[1]) {
        case "draw":
            console.log("drawing...")
            drawOutput(args)
    }
}

export function drawOutput(args) {
    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active")

    newOutput.textContent(args[2])

    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}