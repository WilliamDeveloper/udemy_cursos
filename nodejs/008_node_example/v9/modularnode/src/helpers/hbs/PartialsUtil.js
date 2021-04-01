const fs = require('fs');
const hbs = require('hbs');
const path = require('path')

const PartialsUtil = {
    importAllHBSFromDirWithPrefix({prefixoRegister=undefined, partialsDir}){

        var filenames = fs.readdirSync(partialsDir);

        filenames.forEach(function (filename) {
            var matches = /^([^.]+).hbs$/.exec(filename);
            if (!matches) {
                return;
            }
            var name = matches[1];
            var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
            var name_register=`${prefixoRegister?prefixoRegister:''}${name}`

            // console.log('##',name_register,template)
            hbs.registerPartial(name_register, template);
        });

    },


    importAllHBSPartialsRecursiveFromFolder({ partialsDir}){

        hbs.registerPartials(partialsDir)

        var dir = partialsDir;

        const walkSync = (dir, filelist = []) => {
            fs.readdirSync(dir).forEach(file => {

                filelist = fs.statSync(path.join(dir, file)).isDirectory()
                    ? walkSync(path.join(dir, file), filelist)
                    : filelist.concat(path.join(dir, file));

            });
            return filelist;
        }

        var filelist = walkSync(dir);
        if (filelist.length > 0) {
            filelist.forEach(function (filename) {

                var matches = /^([^.]+).hbs$/.exec(path.basename(filename));
                if (!matches) {
                    return;
                }
                var name = matches[1];
                var pathPartial = filename.split(dir).join('').split(path.sep).join('/')

                pathPartial.replace('/')

                let pastaAtual = partialsDir.split(path.sep)
                pastaAtual = pastaAtual[pastaAtual.length-1]

                let prefixo = pathPartial.split(matches[0]).join('')

                let nameFinalPartial = `${pastaAtual}${prefixo}${name}`

                var template = fs.readFileSync(filename, 'utf8');

                // console.log('#',nameFinalPartial,template)
                hbs.registerPartial(nameFinalPartial, template);
            });
        }
    }
}

module.exports = PartialsUtil