const {spawn} = require('child_process')

const ls = spawn('ls', ['-lh', '/usr'])

//stdio (tudo q fala com s.o.
// stdout  quando o s.o. devolver faça isso
ls.stdout.on('data',(data)=>{
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data',(data)=>{
    console.log(`stderr: ${data}`);
});

ls.on('close', (code)=>{
    console.log(`processo em segundo plano finalizado com sucesso! code: ${code}`)
})