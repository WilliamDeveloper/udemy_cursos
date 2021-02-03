console.log(`Nome do arquivo: `,__filename);
console.log(`Diretorio do arquivo: `, __dirname);
console.log(`parametros de excecucao: `,process.argv);
console.log(`ambiente do sevidor: `,process.platform);

let argumento_2 = process.argv[2];
switch (argumento_2) {
    case '-a':
        console.log('faz isso');
        break;
    case '-i':
        console.log('faz isso2');
        break;
    case '-q':
        console.log('saindo');
        break;
    default:
        console.log('parametro invalido');
        break;
}

// node process.js 1 2 3 4