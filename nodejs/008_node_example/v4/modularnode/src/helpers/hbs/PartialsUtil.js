const fs = require('fs');
const hbs = require('hbs');

const PartialsUtil = {
    importAllHBSFromDirWithPrefix({prefixoRegister=undefined, partialsDir}){

        // Register Partials
        // var partialsDir = path.join(__dirname, '..', "views", "partials");
        var filenames = fs.readdirSync(partialsDir);

        filenames.forEach(function (filename) {
            var matches = /^([^.]+).hbs$/.exec(filename);
            if (!matches) {
                return;
            }
            var name = matches[1];
            var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
            var name_register=`${prefixoRegister?prefixoRegister+'/':''}${name}`
            console.log('nome: ', name_register, template)
            hbs.registerPartial(name_register, template);
        });

    }
}

module.exports = PartialsUtil