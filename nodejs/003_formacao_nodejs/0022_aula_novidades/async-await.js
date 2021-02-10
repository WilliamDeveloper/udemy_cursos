function pegarId() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(5)}, 2*1000)
    })
}
function pegarId2() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(5)}, 2*1000)
    })
}

function pegarId3() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(5)}, 2*1000)
    })
}

function pegarId4() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(5)}, 2*1000)
    })
}

function pegarId5() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(5)}, 2*1000)
    })
}
// isso eh um promise hell
console.log('oi1')
pegarId().then(function (resp1) {
    console.log(resp1)
    pegarId2().then(function (resp2) {
        console.log(resp2)
        pegarId3().then(function (resp3) {
            console.log(resp3)
            pegarId4().then(function (resp4) {
                console.log(resp4)
                pegarId5().then(function (resp5) {
                    console.log(resp5)

                })
            })
        })
    })
})
console.log('oi2')

//---------
let func = async ()=>{
    console.log('oi1')
    var resp1 = await pegarId()
    console.log(resp1)

    var resp2 = await pegarId2()
    console.log(resp2)

    var resp3 = await pegarId3()
    console.log(resp3)

    var resp4 = await pegarId4()
    console.log(resp4)

    var resp5 = await pegarId5()
    console.log(resp5)

    console.log('oi2')
}
func()
