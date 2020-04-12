<template>
    <Button color="outline-info" :id="this.id" :click="this.click">Print</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-print',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components: {
            Button
        }
    }
</script>

<style>

</style>