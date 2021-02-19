<template>
    <div>
        <h2>Edicao de Usuario</h2>
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">

                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{error}}</p>
                    </div>
                </div>

                <p>Nome</p>
                <input type="text" placeholder="Nome do usuario" class="input" v-model="name">
                <p>Email</p>
                <input type="text" placeholder="email@email.com" class="input" v-model="email">
                <hr>
                <button class="button is-success" @click="update($event)">Editar</button>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        created(){

            let config ={
                headers:{
                    Authorization: 'Bearer '+localStorage.getItem('token')
                }
            }

            let vUrl= `${this.url}/user/${this.$route.params.id}`
            axios.get(vUrl,config).then(res=>{
                console.log(res)

                this.name = res.data.user.name;
                this.email = res.data.user.email;
                this.id = res.data.user.id;

            }).catch(error=>{
                console.log(error)
                this.$router.push({name:'Home'})
            })

        },
        data(){
            return {
                url: 'http://localhost:3000',
                id:-1,
                name: '',
                email: '',
                error: undefined,
            }
        },
        methods:{
            update(){
                console.log(this.name)
                console.log(this.email)

                let params = {
                    name:this.name,
                    email:this.email,
                }
                axios.post('http://localhost:3000/user', params).then( resp =>{
                    console.log('resposta: ',resp)
                    this.error =''
                    this.$router.push({name:'Home'})
                }).catch( error => {
                    let msgError = error.response.data.status
                    this.error = msgError
                    console.log( msgError)
                })
            },
        },

    }
</script>

<style>

</style>