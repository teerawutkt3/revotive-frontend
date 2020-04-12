<template>
    <a @click="click" class="text-danger"><i class="fa fa-trash"></i></a>
</template>

<script>
    export default {
        props: {
            click: {
                type: Function,
                default: ()=>{}
            }
        },
    }
</script>

<style>

</style>