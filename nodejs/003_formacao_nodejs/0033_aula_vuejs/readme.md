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
vue create guiaclientes

 --- ---------------------------------------------------
 - rodar projeto
 --- ---------------------------------------------------
 cd guiaclientes
 npm install
 npm run serve

 --- ---------------------------------------------------
 - bibliotecas aplicacao
 --- ---------------------------------------------------
 - biblioteca de ordenacao de array
 npm install --save lodash
 
 - caso usar bootstrap vue
 npm install --save bootstrap-vue
 
 - biblioteca layout similar ao bootstrap - https://bulma.io/documentation/elements/button/ 
  npm install --save bulma
 
 


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