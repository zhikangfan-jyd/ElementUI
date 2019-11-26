
<template>
  <div :class="['el-container',{'is-vertical':isVertical}]">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:'ElContainer',
    porps:{
      direction:{
        type:String,
        validator: val => ['horizontal','vertical'].includes(val)
      }
    },
    computed:{
      isVertical(){
        if (this.direction == 'vertical') {
          return true;
        } else if (this.direction == 'horizontal') {
          return false;
        }
        //判断当前插槽内是否有值
        if (this.$slots && this.$slots.default) {
          // window.console.log(this.$slots);
          return this.$slots.default.some(vNode => {
            const tag = vNode.componentOptions &&vNode.componentOptions.tag;
            if (tag == 'el-header' || tag == 'el-footer') {
              // window.console.log(true);
              return true;
            }
          })
        } else {
          return false;
        }
      }
    }
}
</script>

<style>

</style>