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

data.forEach(item=>{
    let li = document.createElement('li')
    li.innerHTML = `   
        <input type="checkbox" id="task-${item.id}">
        <label for="task-${item.id}">${item.title}</label>           
    `
    li.querySelector('input').addEventListener('change',e=>{
        if(e.target.checked){
            li.classList.add('complete')
        }else{
            li.classList.remove('complete')
        }
    })

    document.querySelector('.todu').append(li)
})