function  sum (x) {
    return new Promise((resolve, reject)=>{
        if(Number(x) == NaN || Number(x) == undefined || typeof x != 'number'){
            reject('ta de brincadeira isso nao eh numero ');
        }

        setTimeout( ()=>{
            resolve(x+5000);
        }, 3000)
    })
}

async function main() {

    try {
        const resultado = await sum('230g');
        console.log(`Resultado com async/await: ${resultado}`);
    }catch (e) {
        console.log(`temos problemas: ${e}`);
    }
}

main();