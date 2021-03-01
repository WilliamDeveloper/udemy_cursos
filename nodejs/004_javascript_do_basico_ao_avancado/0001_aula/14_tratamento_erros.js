try{
    let a = 5
    throw new  Error("errro de proposito")
}catch (e) {
    console.log(e)
}finally {
    console.log("excecuta sempre")
}

console.log("continuou")


try{
    let a = 5

}catch (e) {
    console.log(e)
}finally {
    console.log("excecuta sempre")
}

console.log("continuou")