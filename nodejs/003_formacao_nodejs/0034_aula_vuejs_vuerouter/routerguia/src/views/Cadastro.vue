<template>
    <div>
        <input type="text" name="email" id="email" placeholder="email"><br>
        <input type="text" name="nome" id="nome" placeholder="nome"><br>
        <button>Teste</button>
        <br>{{parametroDaRota}}
    </div>
</template>

<script>
    export default {
        name: "Cadastro",
        created : function () {
            console.log('created')
            let id = this.$route.params.id
            this.parametroDaRota = id
            console.log(id)
        },
        data : function () {
            return{
                parametroDaRota : 'Nada'
            }
        }

    }
</script>

<style scoped>

</style>