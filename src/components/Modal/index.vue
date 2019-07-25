<template>
<div class="modal-mask" v-show="show" transition="modal">
  <div class="modal-wrapper" @click.self="close">
    <div class="modal-container">
      <div class="modal-header">
        <div class="modal-title">{{ title }}</div>
        <div class="modal-close" v-if="enableCloseBtn" @click="close"><span></span><span></span></div>
      </div>
      <div class="modal-body">
        <slot name="content">default body</slot>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    },
    enableCloseBtn: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    }
  },
  watch: {
    show() {
      const body = window.document.querySelectorAll('body')[0]
      body.classList.toggle('modal-open')
    }
  },
  methods: {
    close() {
      this.$emit('close');
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .16s linear;
  background: rgba(34, 46, 70, .8);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.modal-container {
  width: 520px;
  min-height: 304px;
  margin: 0px auto;
  padding-bottom: 10px;
  background-color: #fff;
  // box-shadow: 0 0 10px #C5C5C5;
  transition: all .12s ease-in;
}

.modal-header {
  position: relative;
}

.modal-title {
  // background: #FFFDCA;
  font-size: 12px;
  color: #F07300;
  height: 24px;
  line-height: 24px;
}

.modal-full {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
  display: table;
  transition: opacity .12s linear;
}

.modal-full-wrapper {
  padding: 6rem 2rem;
  margin: 0 auto;
  max-width: 640px;
  box-sizing: inherit;
  position: relative;
  transition: all .12s ease-in;
}
.modal-full-wrapper .modal-close {
  top: 6.2rem;
  right: -4rem;
  transform: translate(0, 0);
}

.modal-close {
  height: 16px;
  width: 16px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  color: #3C3C3C;
}
.modal-close:hover {
  cursor: pointer;
}
.modal-close:hover span {
  background-color: #0C0C0C;
}
.modal-close span {
  position: absolute;
  Z-index: 1;
  width: 2px;
  height: 11px;
  top: 6px;
  margin-left: 12px;
  background: #3C3C3C;
  transition: all .12s linear;
  display: block;
}
.modal-close span:first-child {
  transform: rotate(45deg);
}
.modal-close span:last-child {
  transform: rotate(135deg);
}

.modal-body {
}

.modal-default-button {
  float: right;
}

.modal-enter, .modal-leave {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
  -webkit-transform: scale(0.7);
  transform: scale(0.7);
  opacity: 0;
}

.modal-enter .modal-full-wrapper,
.modal-leave .modal-full-wrapper {
  -webkit-transform: scale(0.95);
  transform: scale(0.95);
  opacity: 0;
}

.button {
  height: 36px;
  line-height: 32px;
  background: none;
  padding: 0 1rem;
  overflow: visible;
  border-radius: 5px;
  margin-left: 1rem;
  letter-spacing: 1px;
  font-size: 13px;
  font-size: .8125rem;
  color: #b6b6b6;
  text-transform: uppercase;
  border: 2px solid #cbcbcb;
  font-weight: 600;
  transition: all .12s linear;
  float: right;
}
.button-action {
  border-color: #12d758;
  color: #10bf4e;
}
.button-action:hover {
  background: #12d758;
  color: #fff;
}
.cf:after, .cf:before {
  content: " ";
  display: table;
}
.cf:after {
  clear: both;
}
.cf:after, .cf:before {
  content: " ";
  display: table;
}
</style>
