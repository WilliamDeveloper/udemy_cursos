<template>
  <div id="app">
    <h1>Guia clientes</h1>

    <h3>Cadastro:</h3>
    <small class="msg-error-validate" v-show="deuErroNome">O Nome é inválido, tente novamente!</small> <br>
    <input type="text" placeholder="nome" v-model="nomeField"><br>

    <small class="msg-error-validate" v-show="deuErroEmail">O Email é inválido, tente novamente!</small> <br>
    <input type="email" placeholder="email" v-model="emailField"><br>

    <small class="msg-error-validate" v-show="deuErroIdade">A idade é inválida, tente novamente!</small> <br>
    <input type="number" placeholder="idade" v-model="idadeField"><br>
    <button @click="cadastrar($event)">Cadastrar</button>

    <div class="buttons">
      <button class="button is-primary">Primary</button>
      <button class="button is-link">Link</button>
    </div>

    <div class="buttons">
      <button class="button is-info">Info</button>
      <button class="button is-success">Success</button>
      <button class="button is-warning">Warning</button>
      <button class="button is-danger">Danger</button>
    </div>


    <hr>
    <!--<div v-for="cliente in clientes" :key="cliente.id">-->
    <!--<div v-for="(cliente, index) in clientes" :key="cliente.id">-->
    <div v-for="(cliente, index) in orderClientes" :key="cliente.id">
      <p>testando v-for{{index+1}}</p>
      <Cliente :nome="cliente.nome" :email="cliente.email" :idade="cliente.idade" @meDeleteElementoPai="meDeleteElementoPai($event)"/>
      <h4>Edicao:</h4>
      <input type="text" v-model="cliente.nome">
      <input type="text" v-model="cliente.email">
    </div>

    <input type="text" v-model="nomeDoWilliam" size="50" >
    <Cliente :nome="nomeDoWilliam" email="a@b.com.br" :idade="28" :showIdade="true"/>
    <Cliente nome="Luciane" email="a@b.com.br" :idade="29"/>
    <Cliente nome="Mariluci" email="a@b.com.br" :idade="30"/>
    <Cliente :cliente="clienteWilliamDeveloper"/>



    <Produto></Produto>
  </div>
</template>

<script>

  import _ from 'lodash'
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
      deuErroNome:false,
      deuErroEmail:false,
      deuErroIdade:false,
      nomeField:"",
      emailField:"",
      idadeField:0,
      nomeDoWilliam:'databind entre componentes',
      clienteWilliamDeveloper:{
        nome:'William Developer',
        email:'a@b.com.br',
        idade:19,
      },
      clientes : [
        {
          id:1,
          nome:'BWilliam Developer1',
          email:'a@b.com.br',
          idade:19,
        },
        {
          id:2,
          nome:'CWilliam Developer3',
          email:'a@b.com.br',
          idade:19,
        },
        {
          id:3,
          nome:'AWilliam Developer3',
          email:'a@b.com.br',
          idade:19,
        },
      ]
    }
  },
  methods:{
    cadastrar: function ($event) {
      console.log($event)

      this.deuErroNome = (this.nomeField.length < 3) ? true:false
      this.deuErroEmail = (this.emailField.length < 3) ? true:false
      this.deuErroIdade = (this.idadeField.length < 1) ? true:false


      if(!this.deuErroNome && !this.deuErroEmail && !this.deuErroIdade){
        this.clientes.push({
          id: Date.now(),
          nome:this.nomeField,
          email:this.emailField,
          idade:parseInt(this.idadeField)
        })
        this.nomeField=""
        this.emailField=""
        this.idadeField=""
      }



    },
    meDeleteElementoPai: function ($event) {
      console.log('pai: ',$event, $event.clienteId)
      $event.component.isPremium = true
      $event.component.testar();

      let id = $event.clienteId
      this.clientes = this.clientes.filter( cliente => cliente.id != id )

    }
  },
  // da pra usar essa funcao como se fosse variavel
  // nesse casso estamos usando a lista ja ordenada com ajuda do lodash
  computed:{
    orderClientes: function () {
      return _.orderBy(this.clientes, ['nome'], ['asc'])
    }
  }
}
</script>

<style>
  .msg-error-validate{
    color:red;
  }
</style>
