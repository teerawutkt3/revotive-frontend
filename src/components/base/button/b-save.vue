<template>
  <Button color="outline-warning" :type="type" :id="this.id" :click="this.click"><i class="fa fa-floppy-o" aria-hidden="true"></i> Save</Button>
</template>

<script>
import Button from './button'
export default {
    name:'b-save',
  props: {
    click: {
      type: Function,
      default:()=>{}
    },
    id: {
       type:String,
      default: 'save'
    },
    type:{
      type:String,
      default: 'button'
    }
  },
    components:{
        Button
    }
}
</script>

<style>

</style>