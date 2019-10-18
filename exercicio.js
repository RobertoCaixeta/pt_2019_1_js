let Table = document.getElementById("minha-linda-tabela")
for (let i = 1; i < 8; i++) {
    if (Table.rows[i].cells[3].innerText > 0) {
        Table.rows[i].classList.add("table-success")
    }

    else {
        Table.rows[i].classList.add("table-danger")
    }
}
let total = 0
let c = 0
for(let i = 1; i < 8; i++){
    c = parseFloat(Table.rows[i].cells[3].innerText)
    total += c
}
let amem = total.toFixed(2)
Table.rows[8].cells[1].innerText = "R$" + amem