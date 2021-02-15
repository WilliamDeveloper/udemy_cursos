--- ---------------------------------------------------
- criado com
--- ---------------------------------------------------
npm init -y

--- ---------------------------------------------------
- bibliotecas global de sistema
--- ---------------------------------------------------
- biblioteca para o script de node se auto dar restart quando tiver uma modificacao
 npm install -g nodemon 
  
 -- vue clie
 npm install -g @vue/cli
 
 --- ---------------------------------------------------
 - criando projeto vue
 --- ---------------------------------------------------
vue create pokedex

 --- ---------------------------------------------------
 - rodar projeto
 --- ---------------------------------------------------
cd pokedex
npm install
npm run serve

 --- ---------------------------------------------------
 - bibliotecas aplicacao
 --- ---------------------------------------------------

- poke api  https://pokeapi.co/
- biblioteca layout similar ao bootstrap - https://bulma.io/documentation/elements/button/ 
npm install --save bulma
 
- fazer requisicao para api
npm install --save axios
 
 


# um componente so pode ter uma tag raiz

-- template basico de um "arquivo.vue"
<template>
    <div>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    
</style>