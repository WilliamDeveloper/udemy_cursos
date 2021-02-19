<template>
    <div>
        <h1>Painel Adm!</h1>


        <table class="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Cargo</th>
                    <th>Acoes</th>
                </tr>
            </thead>
            <tbody>
                   <tr v-for="user in users" :key="user.id">
                       <td>{{user.id}}</td>
                       <td>{{user.name}}</td>
                       <td>{{user.email}}</td>
                       <td>{{user.role | processRole}}</td>
                       <td>
                           <button class="button is-success">Editar</button> | |
                           <button class="button is-danger">Deletar</button>
                       </td>
                   </tr>
            </tbody>
        </table>
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
                this.users = res.data
            }).catch(e=>{
                console.log(e)
            })

        },
        data(){
            return {
                users: []
            }
        },
        methods:{
            ola(){
                console.log('ola')
            }
        },
        filters:{
            processRole: function (value) {
                if( value == 0){
                    return 'Usuario comum'
                }else if(value == 1){
                    return 'Admin'
                }else{
                    return value
                }
            }
        }
    }
</script>

<style>

</style>