<template>
    <div id="pokemon">
        <div class="card">
            <div class="card-imag">
                <figure >
                    <img :src="currentImg" alt="">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{num}} {{name | upper}}</p>
                        <p class="subtitle is-6">{{pokemon.type}}</p>
                    </div>
                    <div class="content">
                        <button class="button is-medium is-fullwidth" @click="mudarSprite($event)">Mudar Sprite</button>
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
                this.currentImg = this.pokemon.front
                console.log(this.pokemon)

            }).catch(error=>{
                console.log(error)
            })
        },
        data: function(){
            return {
                isFront:true,
                currentImg:'',
                pokemon:{
                    type:'',
                    front:'',
                    back:''
                }
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
        },
        methods:{
            mudarSprite:function () {
                if(this.isFront){
                    this.isFront = false
                    this.currentImg = this.pokemon.back
                }else{
                    this.isFront = true
                    this.currentImg = this.pokemon.front
                }
            }
        },
    }
</script>

<style scoped>
#pokemon{
    margin: 2vh;
}
</style>