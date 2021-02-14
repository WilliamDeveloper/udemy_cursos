<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <Cliente/>
    <Cliente/>
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
