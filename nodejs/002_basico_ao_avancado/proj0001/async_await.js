function  sum (x) {
    return new Promise((resolve, reject)=>{
        setTimeout( ()=>{
            resolve(x+5000);
        }, 3000)
    })
}

async function main() {

    try {
        const resultado = await sum(230);
        console.log(`Resultado com async/await: ${resultado}`);
    }catch (e) {
        console.log(`temos problemas: ${e}`);
    }
}

main();