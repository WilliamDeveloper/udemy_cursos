<template>
    <div>
        <h2>Login</h2>
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">

                <div v-if="error != undefined">
                    <div class="notification is-danger">
                        <p>{{error}}</p>
                    </div>
                </div>

                <p>Email</p>
                <input type="text" placeholder="email@email.com" class="input" v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input" v-model="password">
                <hr>
                <button class="button is-success" @click="logar($event)">Logar</button>
            </div>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return {
                email: '',
                password: '',
                error: undefined,
            }
        },
        methods:{
            logar(){
                console.log(this.email)
                console.log(this.password)

                // let params = {
                //     email:this.email,
                //     password:this.password
                // }
                // axios.post('http://localhost:3000/user', params).then( resp =>{
                //     console.log('resposta: ',resp)
                //     this.error =''
                //     this.$router.push({name:'Home'})
                // }).catch( error => {
                //     let msgError = error.response.data.status
                //     this.error = msgError
                //     console.log( msgError)
                // })
            },
        },

    }
</script>

<style>

</style>