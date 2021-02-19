<template>
    <div>
        <h1>Painel Adm!</h1>


        <table class="table">
            <thead>
                <tr>
                    <th>Id</th>
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
                           <router-link :to="{name:'UsersEdit', params:{id:user.id}}"><button class="button is-success">Editar</button></router-link> | |
                           <button class="button is-danger" @click="doShowModal(user.id)">Deletar</button>
                       </td>
                   </tr>
            </tbody>
        </table>


        <div :class="{modal : true, 'is-active' : showModal}">
            <div class="modal-background"></div>
            <div class="modal-content">


                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">
                            Voce quer mesmo deletar o usuario ?
                        </p>

                    </header>
                    <div class="card-content">
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
                        </div>
                    </div>
                    <footer class="card-footer">
                        <a href="#" class="card-footer-item" @click="doHideModal()">Cancelar</a>
                        <a href="#" class="card-footer-item" @click="deleteUser()">Sim, quero deletar!</a>
                    </footer>
                </div>

            </div>
            <button class="modal-close is-large" aria-label="close" @click="doHideModal()"></button>
        </div>


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
                users: [],
                showModal:false,
                deleteUserId:-1
            }
        },
        methods:{
            doHideModal(){
                this.showModal = false
            },
            doShowModal(id){
                this.deleteUserId = id
                this.showModal = true


            },
            deleteUser(){

                let config ={
                    headers:{
                        Authorization: 'Bearer '+localStorage.getItem('token')
                    }
                }


                let url = `http://localhost:3000/user/${this.deleteUserId}`
                console.log(url)

                axios.delete(url, config).then(res=>{
                    console.log('sucesso, ', res)
                    this.users = this.users.filter(user=> user.id != this.deleteUserId)
                    this.showModal = false
                }).catch(error=>{
                    console.log('error, ', error)
                })
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