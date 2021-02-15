<template>
  <div class="about">
    <p>pagina filha</p>
    <h1>This is an about page</h1>
  </div>
</template>


<script>
  export default {
    name: "filha",
    created : function () {
      console.log('created')

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