<template>
    <div id="cliente">
        <!--<h2>Cliente aqui- festa de rodeio!!</h2>-->
        <h3>Descricao do cliente: bla blaa bla</h3>

        <!--databind one way - leitura-->
        <input type="text" name="nome" :value="nome" size="50" >
        <!--<p>Nome: {{cliente.nome}}</p>-->
        <p>Nome: {{nome}}</p>

        <!--two way databases-->
        <input type="text" name="nome2" v-model="nome2"><br>
        <p>Nome2: {{nome2}}</p>
        <p>Email: {{email}}</p>
        <p>Idade: {{idade}}</p>


        {{ 2 + 2 * 2 }}
        {{ 'valor interporlado - interpolacao' }}
        <!--<hr>-->
    </div>

</template>

<script>
export default {

    data(){
        return {
           nome2:"William2",
           numero:"",

        }
    },
    props:{
        nome: String,
        email: String,
        idade: Number,
        cliente : Object
    }
}
</script>

<style scoped>
    #cliente{
        color:blue;
        background-color: #00b0ff;
        max-width: 600px;
        height: auto;
        margin: 2vh;
        padding: 2vh;
    }
</style>