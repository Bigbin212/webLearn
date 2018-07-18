<template>
  <label class="customSelect">
    <input type='text' placeholder='请选择' @focus="focusHandle" ref="input">
    <ul :class="{showOptions:focus,inShowOptions:!focus}">
      <slot></slot>
    </ul>
  </label>
</template>

<script>
  export default {
    name: "customSelect",
    props: ['value'],
    data() {
      return {
        focus: false,
      }
    },
    watch: {
      value() {
        this.input = this.$refs['input'];
        this.input.value = this.value;
      }
    },
    methods: {
      focusHandle() {
        this.focus = !this.focus;
      },
      checkHandle(value) {
        this.$emit('input', value);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .customSelect {
    display: block;
    width: 240px;
    position: relative;
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
    ul {
      min-width: 240px;
      list-style: none;
      padding: 6px 0;
      box-sizing: border-box;
      position: absolute;
      z-index: 1001;
      border: 1px solid #e4e7ed;
      border-radius: 4px;
      background-color: #fff;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
      margin: 5px 0;
      opacity: 0;
      top: 0;
    }
    .showOptions {
      opacity: 1;
      z-index: 2041;
      position: absolute;
      top: 40px;
      transition: top 250ms, opacity 250ms 50ms;
    }
    .inShowOptions {
      height: 0;
      transition: top 250ms 50ms, opacity 250ms;
    }
  }
</style>
