<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">

    <div class="column is-half is-offset-one-quarter">
      <input type="text" class="input is-rounded" nome="" id="" placeholder="buscar pokemons pelo nome" v-model="busca">
      <button class="button is-fullwidth is-success" id="buscaBtn" @click="buscar($event)">Buscar</button>


      <!--busca por botao-->
      <!--<div v-for="(pokemon, index) in filteredPokemons" :key="index">-->
      <!--<div v-for="(pokemon, index) in pokemons" :key="index">-->

      <!--busca dinamica-->
      <div v-for="(pokemon, index) in resultadoBusca" :key="index">
        <!--<h1>{{index}} {{pokemon.name}}</h1>-->
        <Pokemon :num="index+1" :name="pokemon.name" :url="pokemon.url"></Pokemon>
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
      pokemons:[],
      filteredPokemons: []
    }
  },
  created: function () {
    console.log('created')
    console.log(axios)
    let url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'

    axios.get(url).then((res)=>{
      console.log(res)
      this.pokemons = res.data.results
      this.filteredPokemons = res.data.results
      console.log(this.pokemons)
    }).catch( error =>{
      console.log(error)
    })
  },
  components:{
     Pokemon : Pokemon,
  },
  computed:{
    resultadoBusca : function () {
      if(this.busca == '' || this.busca == ' '){
        return this.pokemons
      }else{
        return this.pokemons.filter(pokemon => pokemon.name == this.busca)
      }
    }
  },
  methods:{
    buscar: function () {
      this.filteredPokemons = this.pokemons

      if(this.busca == '' || this.busca == ' '){
        this.filteredPokemons = this.pokemons
      }else{
        console.log('busca: ', this.busca)
        this.filteredPokemons = this.pokemons.filter(pokemon => pokemon.name === this.busca)
        console.log('filtered', this.filteredPokemons)
        // tem um bug aqui q some quando busca um objeto q nao existe e depois procura o certo
      }
    }
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
