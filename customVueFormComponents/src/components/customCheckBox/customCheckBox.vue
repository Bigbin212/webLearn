<template>
  <label class="customCheckbox">
    <span class="checkBoxInput" :class="{check}">
      <span class="checkBoxInputInner"></span>
      <input :type="type" :value="label" @click="changeHandle"/>
    </span>
    <span class="checkBoxLabel">{{label}}</span>
  </label>
</template>

<script>
  export default {
    name: "customCheckBox",
    props: {
      type: {
        type: String,
        default: 'checkbox'
      },
      label: {
        default: '选项'
      },
      value: {
        default: 'no'
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    data() {
      return {
        check: false
      }
    },
    watch:{
      value() {
        if(this.type==='radio'){
          this.check=this.value === this.label;
        }
      }
    },
    methods: {
      changeHandle(event) {
        if (this.type === 'radio') {
          if (this.check = !this.check) {
            this.$emit('change', event.target.value);
          }
        } else {
          if (Array.isArray(this.value)) {
            let newValue = [...this.value];
            if (this.check = !this.check) {
              newValue.push(this.label)
            } else {
              newValue.splice(newValue.indexOf(event.target.value), 1)
            }
            this.$emit('change', newValue)
          } else {
            throw new Error('type为checkbox时，请输入一个数组');
          }
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .customCheckbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    .checkBoxInput {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .checkBoxInputInner {
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71, -.46, .29, 1.46), background-color .25s cubic-bezier(.71, -.46, .29, 1.46);
        &:hover {
          border-color: #409eff;
        }
        &::after {
          box-sizing: content-box;
          content: "";
          border: 1px solid #fff;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(0);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      input {
        opacity: 0;
        outline: none;
        position: absolute;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .check {
      .checkBoxInputInner {
        &::after {
          transform: rotate(45deg) scaleY(1);
        }
        background-color: #409eff;
      }
    }
    .checkBoxLabel {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
</style>
