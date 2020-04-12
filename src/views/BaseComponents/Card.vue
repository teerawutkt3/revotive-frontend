<template>
    <b-card :header="true">
        <template v-slot:header>
            <h3 class="mb-0">Card</h3>
        </template>
        <template v-slot:body>
            <b>Use</b>
            <pre>
                {{text_desc}}
            </pre>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return {
                text_desc: `
##### Use
<b-card :header="true">
    <template v-slot:header>
        header...
    </template>
    <template v-slot:body>
        content...
    </template>
</b-card>
                `
            }
        }
    }
</script>

<style scoped>

</style>