<template>
  <div id="app">
    <h1>Guia clientes</h1>

    <!--<div v-for="cliente in clientes" :key="cliente.id">-->
    <div v-for="(cliente, index) in clientes" :key="cliente.id">
      <p>testando v-for{{index+1}}</p>
      <Cliente :nome="cliente.nome" :email="cliente.email" :idade="cliente.idade"/>
      <h4>Edicao:</h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
    </div>

    <input type="text" v-model="nomeDoWilliam" size="50" >
    <Cliente :nome="nomeDoWilliam" email="a@b.com.br" :idade="28" :showIdade="true"/>
    <Cliente nome="Luciane" email="a@b.com.br" :idade="29"/>
    <Cliente nome="Mariluci" email="a@b.com.br" :idade="30"/>
    <Cliente :cliente="clienteWilliamDeveloper"/>



    <Produto></Produto>
  </div>
</template>

<script>

  import Cliente from './components/Cliente'
  import Produto from './components/Produto'

export default {
  name: 'App',
  components:{
    Cliente:Cliente,
    Produto:Produto
  },
  data(){
    return {
      nomeDoWilliam:'databind entre componentes',
      clienteWilliamDeveloper:{
        nome:'William Developer',
        email:'a@b.com.br',
        idade:19,
      },
      clientes : [
        {
          id:1,
          nome:'William Developer1',
          email:'a@b.com.br',
          idade:19,
        },
        {
          id:2,
          nome:'William Developer3',
          email:'a@b.com.br',
          idade:19,
        },
        {
          id:3,
          nome:'William Developer3',
          email:'a@b.com.br',
          idade:19,
        },
      ]
    }
  }
}
</script>

<style>

</style>
