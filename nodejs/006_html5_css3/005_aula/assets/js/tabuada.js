let tabuadaEl = document.querySelector("#tabuada tbody")
let valorA = 5

tabuadaEl.innerHTML = ''
for(let valorB=0;valorB <= 10;valorB++){
    let template = `       
        <td>${valorA}</td>
        <td>X</td>
        <td>${valorB}</td>
        <td>=</td>
        <td>${valorA * valorB}</td>        
    `
    let tr = document.createElement('tr')
    tr.innerHTML = template

    tabuadaEl.append(tr)

}