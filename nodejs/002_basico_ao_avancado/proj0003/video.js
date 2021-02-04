const {spawn} = require('child_process')

function  resize(video, quality) {
    const p = new Promise((resolve, reject)=>{
        const binarioFfmpeg = "D:/_dev_/bin/ffmpeg/v4.3.1/bin/ffmpeg"

        const ffmpeg = spawn(binarioFfmpeg, [
            '-i',
            `${parent}/${video}.mp4`,
            '-codec:v',
            'libx264',
            '-profile:v',
            'main',
            '-preset',
            'slow',
            '-b:v',
            '400k',
            '-maxrate',
            '400k',
            '-bufsize',
            '800k',
            '-vf',
            `scale=-2:${quality}`,
            '-threads',
            '0',
            '-b:a',
            '128k',
            `${parent}/resultado/${video}-${quality}.mp4`
        ])

        ffmpeg.stderr.on('data',(data)=>{
            console.log(`erro: ${data}`)
        })

        ffmpeg.on('close',(code)=>{
            console.log(`finalizdo ${code}`)
            resolve(code);
        })
    })
    return p;
}