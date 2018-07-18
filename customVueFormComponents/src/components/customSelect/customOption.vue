<template>
  <li class="customOption" @click="checkHandle">{{label}}</li>
</template>

<script>
    export default {
      name: "customOption",
      props:['label'],
      methods:{
        checkHandle(){
          let parent = this.$parent;
          while (parent) {
            if (parent.$options.name === 'customSelect') {
              if(parent.focus){
                parent.$emit('input',this.label);
              }
              return true
            } else {
              parent = parent.$parent
            }
          }
          return false;
        }
      }
    }
</script>

<style lang="scss" scoped>
  .customOption{
    font-size: 14px;
    padding: 0 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      background-color: #f5f7fa;
    }
  }
</style>
