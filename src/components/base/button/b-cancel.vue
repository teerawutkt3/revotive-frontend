<template>
    <Button color="outline-secondary" :id="this.id" :click="this.click">Cancel</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-cancel',
        props: {
            click: {
                type: Function,
                default:()=>{}
            },
            id: String
        },
        components: {
            Button
        }
    }
</script>

<style scoped>

</style>