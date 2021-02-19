<template>
    <div>
        <h2>Registro de Usuario</h2>
        <hr>

        <div class="columns is-centered">
            <div class="column is-half">
                <p>Nome</p>
                <input type="text" placeholder="Nome do usuario" class="input">
                <p>Email</p>
                <input type="text" placeholder="email@email.com" class="input">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input">
                <hr>
                <button class="button is-success">Cadastrar</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        }
    }
</script>

<style>

</style>