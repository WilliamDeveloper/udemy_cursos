<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <input type="text" v-model="nomeDoWilliam">
    <Cliente :nome="nomeDoWilliam" email="a@b.com.br" idade="18"/>
    <Cliente nome="Luciane" email="a@b.com.br" idade="19"/>
    <Cliente nome="Mariluci" email="a@b.com.br" idade="20"/>
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
      nomeDoWilliam:'William Goulart Pacheco',
    }
  }
}
</script>

<style>

</style>
