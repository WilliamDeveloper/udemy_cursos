<template>
    <div>
        <h1>{{num}} {{name | upper}}</h1>
        <small>{{url}}</small>
    </div>
    
</template>

<script>
    export default {
        name: "Pokemon",
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