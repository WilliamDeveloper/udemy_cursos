const { series, parallel, src, dest } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function limparDist() {
    return del(['dist'])
}

function copiarHTML(cb) {
    return src('public/**/*')//seleciona os arquivos
        .pipe(dest('dist')) //manda para pasta destino
}

function gerarJS(cb) {
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
        .plugin(tsify)// plugin para interpretar o tyscript e gerar o javascript
        .bundle()
        .pipe(source('app.js'))///arquivo gerado
        .pipe(dest('dist')) // salva na pasta de destino
}

function gerarJSProducao() {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(
    limparDist,
    parallel(gerarJS, copiarHTML),
    gerarJSProducao
)