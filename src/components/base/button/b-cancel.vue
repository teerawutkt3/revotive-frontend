<template>
    <Button color="default" :size="this.size" :click="this.click">Cancel</Button>
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

<style scoped>

</style>