<template>
    <div :class="{'cliente' : !isPremium , 'cliente-premium': isPremium}">
        <!--<h2>Cliente aqui- festa de rodeio!!</h2>-->
        <h3>Descricao do cliente: bla blaa bla</h3>

        <!--databind one way - leitura-->
        <input type="text" name="nome" :value="nome" size="50" >
        <!--<p>Nome: {{cliente.nome}}</p>-->
        <p>Nome: {{nome}}</p>

        <!--two way databases-->
        <input type="text" name="nome2" v-model="nome2"><br>
        <p>Nome2: {{nome2}}</p>
        <p>Email: {{email | processarEmail}}</p>
        <p>Idade: {{idade}}</p>
        <p v-if="showIdade">Idade: {{idade}}</p>
        <p v-if="showIdade == true">Idade: {{idade}}</p>
        <p v-else>o usuario ocultou a idade</p>
        <p v-show="showIdade">elemento esta exibindo</p>
        <h4>IdSpecial: {{idSpecial}}</h4>


        {{ 2 + 2 * 2 }}
        {{ 'valor interporlado - interpolacao' }}
        <button @click="mudarCor($event)" >Muda cor!</button>
        <button @click="emitirEventoDelete($event)" >Delete</button>
        <!--<hr>-->
    </div>

</template>

<script>
export default {

    data(){
        return {
           nome2:"William2",
           numero:"",
           isPremium:false,


        }
    },
    props:{
        nome: String,
        email: String,
        idade: Number,
        cliente : Object,
        showIdade:Boolean
    },
    methods:{
      mudarCor:function ($event) {
          console.log('chamando evento ',$event)
          this.isPremium = !this.isPremium
      },
      emitirEventoDelete:function ($event) {
          console.log('Emitindo do filho! ',$event)
          this.$emit('meDeleteElementoPai', {clienteId: 1, curso:'nodejs', component:this})
      },
      testar:function () {
        alert('testando metodo que ta no componente filho!')
      }
    },
    filters:{
        processarEmail: function (value) {
            if(value)
                return value.toUpperCase()
            return ''
        }
    },
    //computed property
    computed:{
        idSpecial : function () {

            let email = this.email || ''
            let nome = this.nome || ''
            let id = this.id || ''
            let computedPropertie = (email+nome+id).toUpperCase()
            return computedPropertie
            
        }
    }
}
</script>

<style scoped>
    .cliente{
        background-color: #00b0ff;
        color:blue;
        max-width: 600px;
        height: auto;
        margin: 2vh;
        padding: 2vh;
    }

    .cliente-premium{
        background-color: black;
        color:white;
        max-width: 600px;
        height: auto;
        margin: 2vh;
        padding: 2vh;
    }
</style>