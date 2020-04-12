<template>
    <i :class="ic"></i>
</template>

<script>
    export default {
        name: "icon",
        data(){
            return{
                ic:this.icon
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

