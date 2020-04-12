<template>
    <Button  color="outline-warning" :id="this.id" :click="this.click" ><i class="fa fa-plus" aria-hidden="true"></i> Add</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-create',
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