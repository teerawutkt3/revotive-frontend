<template>
    <Button color="info" :size="this.size" :click="this.click"><i class="fas fa-print"></i>&nbsp;Print</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-print',
        props: {
            click: {
                type: Function
            },
            size: {
                type: String,
                default: 'md'
            },
        },
        components: {
            Button
        }
    }
</script>

<style>

</style>