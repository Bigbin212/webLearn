<template>
  <div class="customInput">
    <label v-if="type==='text'">
      <input :type="type" @input="input($event)" :value='value' placeholder='请输入内容'>
    </label>
    <label v-else-if="type==='password'">
      <input :type="type" @input="input($event)" :value='value' placeholder='请输入密码'>
    </label>
    <label class="textAreaOut" v-else>
      <div class="textAreaHeight"><span style="word-break: break-all">{{value}}</span><br></div>
      <textarea @input="input($event)" placeholder='请输入内容'></textarea>
    </label>
  </div>
</template>

<script>
  export default {
    name: "customInput",
    props: {
      type: {
        type: String,
        default: 'text'
      },
      value: {
        default: ''
      }
    },
    data() {
      return {}
    },
    methods: {
      input(event) {
        this.$emit('input', event.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customInput {
    margin: 10px;
    font-size: 14px;
    background-color: aliceblue;
    input {
      font-size: inherit;
      background-color: #fff;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      height: 40px;
      line-height: 40px;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
      width: 100%;
      &:hover {
        border-color: #c0c4cc;
      }
      &:focus {
        border-color: #409eff;
      }
    }
    .textAreaOut {
      display: block;
      position: relative;
      .textAreaHeight {
        visibility: hidden;
        min-height: 45px;
        //实现高度和textArea一样
        padding: 5px 15px;
        line-height: 1.5;
      }
      textarea {
        display: block;
        font-family: inherit;
        font-size: inherit;
        resize: vertical;
        padding: 5px 15px;
        line-height: 1.5;
        box-sizing: border-box;
        width: 100%;
        color: #606266;
        background-color: #fff;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        &:hover {
          border-color: #c0c4cc;
        }
        &:focus {
          border-color: #409eff;
        }
      }
    }
  }
</style>
