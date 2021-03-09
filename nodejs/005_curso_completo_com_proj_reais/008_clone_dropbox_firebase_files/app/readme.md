// EX_A - alternativa EX_B abstraida na classe prototype
this.el.inputPhoto.files.toArray().forEach( file=>{
    console.log('file ', file)
})

// EX_B - funciona em muitos browser
Array.prototype.forEach.call(this.el.inputPhoto.files, (item) => {
    console.log('file ', file)
})

// EX_C - nao funciona em todos browser
[...this.el.inputPhoto.files].forEach( (item) => {
    console.log('file ', file)
})


///-----------------------------------

FileList.prototype.toArray = function(){
    let list = []
    Array.prototype.forEach.call(this, (item) => {
        list.push(item)
    })

    return list
}