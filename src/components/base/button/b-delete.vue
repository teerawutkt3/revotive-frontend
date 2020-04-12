<template>
    <Button color="outline-danger" :id="this.id" :click="this.click"><i class="fa fa-trash" aria-hidden="true"></i> Delete</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-delete',props: {
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