<!--
 * @Author: shanyu
 * @Date: 2022-03-20 13:04:15
 * @LastEditTime: 2022-03-23 18:13:21
 * @LastEditors: shanyu
 * @Description: 
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getWindowA">console window.a</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    getWindowA(){
      console.log(window.a)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
