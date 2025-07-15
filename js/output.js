import { CreateInput } from "./input.js";

export function ValidateCmd(input) {
    let args = input.split(/\s+/)

    switch (args[0]) {
        case "":
            CreateInput()
            break;
        case "echo":
            echo(input)
            CreateInput()
            break;
        default:
            commandNotRecognized(args)
            CreateInput()
    }
}

function echo(input) {
    let oldOutput = document.querySelector(".output-active")
    if (oldOutput) {
        oldOutput.classList.remove("output-active")
    }

    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active", "output")

    let args = input.match(/\S+|\s+/g)
    args.shift()
    newOutput.textContent = args.join("")

    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}

function commandNotRecognized(args) {
    let oldOutput = document.querySelector(".output-active")
    if (oldOutput) {
        oldOutput.classList.remove("output-active")
    }

    let newOutput = document.createElement("div")
    newOutput.classList.add("output-active", "output")

    newOutput.textContent = `'${args.shift()}' not recognized as a command`

    let terminal = document.querySelector(".terminal")
    terminal.appendChild(newOutput)
}