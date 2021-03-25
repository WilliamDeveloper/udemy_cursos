console.log('carregado')
document.querySelector('.open-menu').addEventListener('click', e=>{
    console.log('blau')
    document.querySelector('header .menu').classList.add('open')
})
document.querySelector('.close-menu button').addEventListener('click', e=>{
    console.log('blau')
    document.querySelector('header .menu').classList.remove('open')
})