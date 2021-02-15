<template>
  <div id="app">

  </div>
</template>

<script>

  import axios from 'axios'
// let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

export default {
  name: 'App',
  components: {

  },
  created: function () {
    console.log('created')
    console.log(axios)
  }

}

</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
