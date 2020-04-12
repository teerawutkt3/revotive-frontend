<template>
    <Button color="success" :size="size" :click="this.click"><i class="fas fa-save"></i>&nbsp;Save</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-save',
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

<style>

</style>