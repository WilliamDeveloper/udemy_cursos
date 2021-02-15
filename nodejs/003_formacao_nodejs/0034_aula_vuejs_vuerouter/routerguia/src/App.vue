<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>  |
      <router-link to="/cadastro">Cadastro</router-link> |

      <!--<router-link to="/cadastro/detail/1">Cadastro1</router-link>-->
      <router-link :to="{name:'cadastro/detail', params:{id:'1'}}">Cadastro1</router-link> |
      <router-link :to="{name:'pai', params:{id:'1'}}">Pai</router-link>
    </div>
    <p>inicio rota</p>
    <router-view/>
    <p>fim rota</p>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
