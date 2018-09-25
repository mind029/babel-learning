<template>
  <div class="hello">
    <div @touchmove="touchMoveEvent" :class="{active:active}" @touchstart="touchStartEvent" @touchend="touchEndEvent" class="touch-wrapper">
    </div>
    <hr />
    <input  @focus="onInput" value="123" type="text">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      active: false
    }
  },
  methods: {
    touchStartEvent (event) {
      console.log(event)
      this.active = true
    },
    touchEndEvent (event) {
      console.log(event)
      this.active = false
    },
    touchMoveEvent (event) {
      console.log('touchMoveEvent')
      console.log(event)
    },
    onInput (event) {
      document.activeElement.blur()
      this.active = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.touch-wrapper {
  width:100px;
  height: 100px;
  background: green;
}
.active {
  background: orange
}

input {
  border: 1px solid #ddd;
}
</style>
