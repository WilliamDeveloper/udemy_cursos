<template>
    <div>
        <h2>Registro de Usuario</h2>
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">
                <p>Nome</p>
                <input type="text" placeholder="Nome do usuario" class="input" v-model="name">
                <p>Email</p>
                <input type="text" placeholder="email@email.com" class="input" v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input" v-model="password">
                <hr>
                <button class="button is-success" @click="register($event)">Cadastrar</button>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                name: '',
                email: '',
                password: '',
            }
        },
        methods:{
            register(){
                console.log(this.name)
                console.log(this.email)
                console.log(this.password)

                let params = {
                    name:this.name,
                    email:this.email,
                    password:this.password
                }
                axios.post('http://localhost:3000/user', params).then( resp =>{
                    console.log('resposta: ',resp)
                }).catch( error => {
                    let msgError = error.response.data.status
                    console.log( msgError)
                })
            },
        },

    }
</script>

<style>

</style>