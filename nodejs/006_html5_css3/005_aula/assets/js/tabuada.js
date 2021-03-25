function calculaTabuada(){
    let tabuadaEl = document.querySelector("#tabuada tbody")
    let valorAEl = document.querySelector("#valorA")
    let valorA = parseInt(valorAEl.value)

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
}

calculaTabuada()


document.querySelector("#valorA").addEventListener('change', e=>{
    console.log('aa')
    calculaTabuada()
})