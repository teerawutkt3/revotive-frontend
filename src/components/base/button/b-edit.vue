<template>
    <Button  color="warning" :size="this.size"  :click="this.click"><i class="fas fa-edit"></i>&nbsp;Edit</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-edit',
        props: {
            click: {
                type: Function
            },
            size: {
                type: String,
                default: 'md'
            }
        },
        components: {
            Button
        }
    }
</script>

<style>

</style>