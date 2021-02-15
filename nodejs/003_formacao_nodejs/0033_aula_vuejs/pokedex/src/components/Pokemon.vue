<template>
    <div>
        <h1>{{num}} {{name | upper}}</h1>
        <small>{{url}}</small>
        
        <div class="card">
            <div class="card-imag">
                <figure class="image is-4by3">
                    <img src="#" alt="">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4"></p>
                        <p class="subtitle is-6"></p>
                    </div>
                    <div class="content">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Pokemon",
        created: function(){
            axios.get(this.url).then((res)=>{
                console.log(res)
                this.pokemon.type = res.data.types[0].type.name
                this.pokemon.front =res.data.sprites.front_default
                this.pokemon.back =res.data.sprites.back_default
                console.log(this.pokemon)

            }).catch(error=>{
                console.log(error)
            })
        },
        data: function(){
            return {
                pokemon:{}
            }
        },
        props:{
            num: Number,
            name: String,
            url: String
        },
        filters:{
            upper: function (value) {
                let newName = value[0].toUpperCase() + value.slice(1)
                return newName
            },
        }
    }
</script>

<style scoped>

</style>