console.log(`Nome do arquivo: `,__filename);
console.log(`Diretorio do arquivo: `, __dirname);
console.log(`Diretorio do arquivo em que foi invocado: `, process.cwd());
console.log(`parametros de excecucao: `,process.argv);
console.log(`ambiente do sevidor: `,process.platform);
console.log(`variaveis de ambiente: `,process.env);


console.log(`variaveis de ambiente os : `,process.env.OS);
console.log(`variaveis de ambiente USERNAME: `,process.env.USERNAME);
console.log(`variaveis de ambiente LANG: `,process.env.LANG);
console.log(`variaveis de ambiente LANG2: `,process.env.LANG2);
console.log(`variaveis de ambiente COMPUTERNAME: `,process.env.COMPUTERNAME);

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