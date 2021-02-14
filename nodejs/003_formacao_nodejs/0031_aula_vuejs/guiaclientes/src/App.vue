<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <input type="text" v-model="nomeDoWilliam" size="50" >
    <Cliente :nome="nomeDoWilliam" email="a@b.com.br" idade="18"/>
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
    }
  }
}
</script>

<style>

</style>
