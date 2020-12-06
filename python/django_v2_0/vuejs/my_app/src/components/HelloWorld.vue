<template>
  <div>
    <h1 class="text-center text-info">Lista de autores </h1>
    <ul class="list-group-item" v-for="autor in autores" v-bind:key="autor.id">
      <li class="list-group-item"> {{ autor.nome }} </li>
      <li class="list-group-item"> {{ autor.endereco }} </li>
      <li class="list-group-item" v-if="autor.site===null || autor.site===''"> Não Informado </li>
      <li class="list-group-item" v-else>{{ autor.site }}</li>
      <li class="list-group-item"> {{ autor.email }} </li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
export default {
  name: 'HelloWorld',
  data(){
    return {
      autores:null
    }
  },
  mounted(){
    axios.get("http://127.0.0.1:8000/artigos_app/autor/")
    .then(res=>this.autores = res.data)
  }
}
</script>

