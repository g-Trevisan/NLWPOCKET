// hello world - comentario com barra barra
// console.log("hello world")

const { checkboxClasses } = require("@mui/material")

let meta = {
    value: 'ler um livro por mês',
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

let metas = [
    meta,
    {
        value: "caminhar 20 minutos todos os dias",
        checked: false
    }
]

console.log(meta.value)
console.log(metas[1].value)