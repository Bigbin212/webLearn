<template>
  <div class="customSwitch">
    <div :class="[{closed:value},'customSwitch-box']"
         @click="handleChange">
      <span :class="{closed:value}"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name:'customSwitch',
    data(){
      return{}
    },
    props:{
      value:{
        type:[Boolean,String,Number],
        default:false
      },
    },
    methods:{
      handleChange(value){
        this.$emit('input',!this.value);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .customSwitch{
    display: inline-block;
    >div{
      float:left;
    }
    .customSwitch-box{
      width: 40px;
      height: 20px;
      background-color: rgb(19,206,102);
      border-radius: 10px;
      display: flex;
      align-items: center;
      padding: 0 2px;
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      margin-left: 6px;
      &.closed{
        background-color: rgb(255,73,73);
      }
      span{
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        left: 22px;
        transition:200ms;
        &.closed{
          left: 2px;
        }
      }
    }
  }
</style>
