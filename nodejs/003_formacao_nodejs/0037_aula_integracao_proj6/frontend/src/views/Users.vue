<template>
    <div>
        <h1>Painel Adm!</h1>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        created(){
            console.log('ola')


            let config ={
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }

            axios.get('http://localhost:3000/user', config).then(res=>{
                console.log(res)
            }).catch(e=>{
                console.log(e)
            })

        },
        data(){
            return {

            }
        },
        methods:{
            ola(){
                console.log('ola')
            }
        },
    }
</script>

<style>

</style>