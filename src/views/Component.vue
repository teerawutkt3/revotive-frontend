<template>
    <div>
        <base-header type="gradient-success" class="mb-5 pb-5 pt-5 pt-md-8">
        </base-header>
        <div class="container-fluid mt--7">

            <ButtonComponent/>
            <CardComponent class="mt-3"/>
        </div>


    </div>
</template>

<script>
    import ButtonComponent from './BaseComponents/Button'
    import CardComponent from './BaseComponents/Card'
    export default {
        name: "Revotive-Component",
        components:{
            ButtonComponent,
            CardComponent
        }
    }
</script>

<style scoped>

</style>