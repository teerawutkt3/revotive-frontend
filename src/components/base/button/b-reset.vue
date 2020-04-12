<template>
    <Button color="outline-secondary" :id="this.id" :click="this.click"><i class="fa fa-undo" aria-hidden="true"></i> Reset</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-reset',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components:{
            Button
        }
    }
</script>

<style>

</style>