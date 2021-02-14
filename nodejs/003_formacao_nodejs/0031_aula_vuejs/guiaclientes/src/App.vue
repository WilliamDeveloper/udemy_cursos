<template>
  <div id="app">
    <h1>Guia clientes</h1>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <Cliente/>
    <Cliente/>
  </div>
</template>

<script>

  import Cliente from './components/Cliente'

export default {
  name: 'App',
  components:{
    Cliente:Cliente
  }
}
</script>

<style>

</style>
