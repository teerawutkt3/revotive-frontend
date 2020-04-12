<template>
    <Button  color="success" :size="this.size" :click="this.click" ><i class="fa fa-plus" aria-hidden="true"></i> Add</Button>
</template>

<script>
    import Button from './button'
    export default {
        name:'b-create',
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