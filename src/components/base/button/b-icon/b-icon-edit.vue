<template>
    <a href="javascript:void(0)" @click="this.click" class="text-warning"><i class="fa fa-pencil-square-o"></i></a>
</template>

<script>
    export default {
        props: {
            click: {
                type: Function,
                default: ()=>{}
            },
            id: String
        },
    }
</script>

<style>

</style>