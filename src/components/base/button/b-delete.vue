<template>
    <Button color="danger" :size="this.size" :click="this.click"><i class="fa fa-trash" aria-hidden="true"></i> Delete</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-delete',props: {
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