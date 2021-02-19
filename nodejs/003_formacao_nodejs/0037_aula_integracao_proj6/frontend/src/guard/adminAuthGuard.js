import axios from "axios";

let adminAuthGuard = (to, from, next)=>{

    let data={}
    let config ={
        headers:{
            Authorization: 'Bearer '+localStorage.getItem('token')
        }
    }

    console.log(config)

    if(localStorage.getItem('token') != undefined){
        axios.post('http://localhost:3000/validate',data,config).then( res=> {
            console.log('validate-then',res)
            next()

        }).catch(e =>{
            console.log(e)
            next('/login')
        })

    }else{
        next('/login')
    }
}


export default adminAuthGuard