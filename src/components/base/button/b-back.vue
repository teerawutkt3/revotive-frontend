<template>
    <Button color="default" :size="size" :click="this.click"><i class="fa fa-reply" aria-hidden="true"></i> Back</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-back',
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
        },
    }
</script>

<style>

</style>