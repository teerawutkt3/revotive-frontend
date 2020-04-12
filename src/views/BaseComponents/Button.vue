<template>
    <b-card :header="true">
        <template v-slot:header>
            <h3 class="mb-0">Buttons</h3>
        </template>
        <template v-slot:body>

            <b-save :click="onClickTest"/> &nbsp;
            <b-edit/> &nbsp;
            <b-cancel/> &nbsp;
            <b-back/> &nbsp;
            <b-print/> &nbsp;
            <b-delete/> &nbsp;
            <b-reset/> &nbsp;
            <b-create/> &nbsp;
            <base-button type="warning" size="md">Custom</base-button>
            <hr>

            <div class="row">
                <div class="col-sm-8">
                    <b>template</b>
                    <p v-for="item in button_descs">
                        {{item}}
                    </p>
                </div>
                <div class="col-sm-4">
                    <b>script</b><br>

                    <pre>
methods: {
    onClickButton(value1, value2){
        console.log("click")
    },

    onClickButton(){
        console.log("click")
    }
}
</pre>
                    <span></span>
                </div>
            </div>
        </template>
    </b-card>
</template>

<script>
    export default {
        name: "Button",
        data() {
            return {
                button_descs: [
                    '<b-save :click="onClickButton"/>  |  <b-save :click="onClickButton(1,2)"/>',
                    '<b-edit/>',
                    '<b-cancel/>',
                    '<b-back/>',
                    '<b-print/>',
                    '<b-delete/>',
                    '<b-reset/>',
                    '<b-create/>',
                    '<base-button type="warning" size="md">Custom</base-button>',
                ]
            }
        },
        methods: {
            onClickTest() {
                console.log('onClickTest')
            }
        }
    }
</script>

<style scoped>

</style>