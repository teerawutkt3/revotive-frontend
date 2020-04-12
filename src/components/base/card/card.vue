<template>
    <div :class="defaultClass">
        <img v-if="imgShow" class="card-img-top" :src="imgLink" alt="Card image cap">
        <div class="card-header bg-defulat" v-if="header">
            <!-- bg-secondary text-white -->
            <slot name="header"></slot>
        </div>
        <div class="card-body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "base-card",
        data(){
            return {
                defaultClass: 'card shadow-' + this.shadow
            }
        },
        props:{
            header:{
                type: Boolean,
                default: true
            },
            shadow:{
                type: String,
                default: 'lg'
            },
            imgShow: {
                type:Boolean,
                default: false
            },
            imgLink:{
                type: String,
                default: 'https://picsum.photos/600/300/?image=25'
            }
        }
    }
</script>

<style scoped>

</style>