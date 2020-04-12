<template>
    <Button color="outline-secondary" :id="this.id" :click="this.click"><i class="fa fa-reply" aria-hidden="true"></i> Back</Button>
</template>

<script>
    import Button from './button'

    export default {
        name: 'b-back',
        props: {
            click: {
                type: Function
            },
            id: String
        },
        components: {
            Button
        },
    }
</script>

<style>

</style>