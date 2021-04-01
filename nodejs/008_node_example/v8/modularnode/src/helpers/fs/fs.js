const util = require('util');

const fs ={

    async dirAtual(){
        return await process.cwd()
    },
    async getPathVariable(variable){
        let replaced = variable.replace(/%([^%]+)%/g, (original, matched) => {
            const r = process.env[matched]
            return r ? r : ''
        })
        return await replaced
    },



    async ls() {
        const exec = util.promisify(require('child_process').exec);
        const { stdout, stderr } = await exec('ls');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        return { stdout, stderr }
    },

    async cmd(command, dir) {
        const exec = util.promisify(require('child_process').exec);
        const { stdout, stderr } = await exec('command');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        return { stdout, stderr }
    },

    async cmdWithDir(command, dir) {
        const exec = util.promisify(require('child_process').exec);
        const { stdout, stderr } = await exec(command, {cwd: dir});
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        return { stdout, stderr }
    },

}

module.exports= fs