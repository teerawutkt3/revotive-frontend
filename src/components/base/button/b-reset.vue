<template>
    <Button color="secondary" :size="this.size" :click="this.click"><i class="fa fa-undo" aria-hidden="true"></i> Reset</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-reset',
        props: {
            click: {
                type: Function
            },
            size: {
                type: String,
                default: 'md'
            }
        },

        components:{
            Button
        }
    }
</script>

<style>

</style>