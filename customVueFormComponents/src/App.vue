<template>
  <div id="app">
    <custom-select v-model="value">
      <custom-option label="选项1"></custom-option>
      <custom-option label="选项2"></custom-option>
      <custom-option label="选项3"></custom-option>
    </custom-select>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return{
      value:[]
    }
  },
  watch:{
    value(){
      console.log(this.value);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  margin-top: 60px;
}
</style>
