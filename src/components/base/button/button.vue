<template>
    <base-button :size="size" :nativeType="this.type" :type="this.color" @click="this.click" >
        <slot></slot>
    </base-button>
</template>

<script>
    export default {
        name: "b-button",

        props: {
            click: {
                type: Function,
                default: () => {
                }
            },
            color: {
                type: String,
                default: 'default'
            },
            size: {
                type: String,
                default: 'md'
            },
            type: {
                type: String,
                default: 'button'
            }
        }
    };
</script>
