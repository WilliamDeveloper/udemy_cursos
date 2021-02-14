<template>
  <div id="app">
    <h1>Guia clientes</h1>

    <div v-for="cliente in clientes" :key="cliente.id">
      <p>testando v-for</p>
      <Cliente :nome="cliente.nome" :email="cliente.email" :idade="cliente.idade"/>
    </div>

    <input type="text" v-model="nomeDoWilliam" size="50" >
    <Cliente :nome="nomeDoWilliam" email="a@b.com.br" idade="18" :showIdade="true"/>
    <Cliente nome="Luciane" email="a@b.com.br" idade="19"/>
    <Cliente nome="Mariluci" email="a@b.com.br" idade="20"/>
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
        idade:'19',
      },
      clientes : [
        {
          id:1,
          nome:'William Developer1',
          email:'a@b.com.br',
          idade:'19',
        },
        {
          id:2,
          nome:'William Developer3',
          email:'a@b.com.br',
          idade:'19',
        },
        {
          id:3,
          nome:'William Developer3',
          email:'a@b.com.br',
          idade:'19',
        },
      ]
    }
  }
}
</script>

<style>

</style>
