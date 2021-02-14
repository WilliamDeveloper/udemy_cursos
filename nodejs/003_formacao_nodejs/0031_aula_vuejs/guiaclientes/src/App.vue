<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <Cliente nome="William" email="a@b.com.br" idade="18"/>
    <Cliente nome="Luciane" email="a@b.com.br" idade="18"/>
    <Cliente nome="Mariluci" email="a@b.com.br" idade="18"/>
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
  }
}
</script>

<style>

</style>
