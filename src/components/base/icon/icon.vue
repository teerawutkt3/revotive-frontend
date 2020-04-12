<template>
    <i :class="ic"></i>
</template>

<script>
    export default {
        name: "icon",
        data(){
            return{
                ic:'fa '+this.icon
            }
        },
        props:{
            icon:{
                type:String,
                default: 'sliders'
            }
        }
    }
</script>

<style scoped>

