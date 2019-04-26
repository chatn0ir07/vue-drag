<template>
	<div id="app">
		<div class="Container">
			<div class="Grabbler" v-drag:selector="'.Container'">Grab me here!</div>
			<img alt="Vue logo" src="./assets/logo.png" id="logo">
    	</div>
		<div style="position: absolute; top:80vh;">
			How to use vue-drag:
			<code>Use v-drag on any Element you'd like to:
				<br>
				v-drag:selector="'#SomeClassThatShouldMoveWhenTheElementIsDragged'"
				<br>
				If the element is now dragged, it wont move itself but the selector element useful for making things like windows
			</code>
		</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { drag } from './components/Draggable.js'


export default {
  name: 'app',
  components: {
  },
  directives: {
    drag
  }
}
</script>

<style>
body,html {
  padding: 0;
  margin:0;
  box-sizing: border-box;
  height: 100vh;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px dashed black;
  border-radius: 5px;
  height: 500px;
  width: 95vw;
}
.Grabbler {
  cursor:all-scroll;
  background: lightblue;
  height:30px;
  line-height: 30px;
}
.Container {
  background: gray;
  height: 25vh;
  width: 12vw;
}
</style>
