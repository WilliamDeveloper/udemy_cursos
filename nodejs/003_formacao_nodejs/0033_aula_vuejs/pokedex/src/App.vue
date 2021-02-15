<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">

    <div class="column is-half is-offset-one-quarter">
      <input type="text" class="input is-rounded" nome="" id="" placeholder="buscar pokemons pelo nome" v-model="busca">
      <button class="button is-fullwidth is-success" id="buscaBtn">Buscar</button>
      <div v-for="(pokemon, index) in pokemons" :key="index">
        <!--<h1>{{index}} {{pokemon.name}}</h1>-->
        <Pokemon :num="index" :name="pokemon.name" :url="pokemon.url"></Pokemon>
      </div>
    </div>

  </div>
</template>

<script>

  import axios from 'axios'
  import Pokemon from './components/Pokemon'
// let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

export default {
  name: 'App',
  data: function(){
    return {
      busca:'',
      pokemons:[]
    }
  },
  created: function () {
    console.log('created')
    console.log(axios)
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

    axios.get(url).then((res)=>{
      console.log(res)
      this.pokemons = res.data.results
      console.log(this.pokemons)
    }).catch( error =>{
      console.log(error)
    })
  },
  components:{
     Pokemon : Pokemon,
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

  #buscaBtn{
    margin-top:2vh;
  }

</style>
