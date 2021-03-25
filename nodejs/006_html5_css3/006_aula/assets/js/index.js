let data =[
    {
        id:1,
        title: 'Estudar HTML',
    },
    {
        id:2,
        title: 'Estudar CSS',
    },
    {
        id:3,
        title: 'Estudar JavaScript',
    },
    {
        id:4,
        title: 'PHP',
    },
]


console.log(data)

function renderTodo(){
    let toduEl = document.querySelector('.todu')

    toduEl.innerHTML =''

    data.forEach(item=>{
        let li = document.createElement('li')
        li.innerHTML = `   
        <input type="checkbox" id="task-${item.id}">
        <label for="task-${item.id}">${item.title}</label>     
        <button type="button">X</button>      
    `
        li.querySelector('input').addEventListener('change',e=>{
            if(e.target.checked){
                li.classList.add('complete')
            }else{
                li.classList.remove('complete')
            }
        })

        li.querySelector('button').addEventListener('click', e=>{
            let msg= 'posso deletar ?'

            let button = e.target
            let li = button.parentNode
            let input = li.querySelector('input')
            let id = input.id
            let idArray = id.split('-')
            let todoId = idArray[1]

            console.warn(msg)
            if(confirm(msg)){
                data = data.filter( item => item.id !== parseInt(todoId))

                renderTodo()
            }


        })

        document.querySelector('.todu').append(li)
    })
}

renderTodo()

document.querySelector('#new-task').addEventListener('keyup', e=>{
    if(e.key === 'Enter'){
        let valor = e.target.value
        let obj = {
            id : data.length+1,
            title: valor
        }
        data.push(obj)
        renderTodo()
    }
})