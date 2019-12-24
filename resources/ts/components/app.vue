<template>
  <div class="App">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1>{{ message }}</h1>
          <p class="text-center">
            <button class="btn btn-primary" @click="load">Load Users</button>
          </p>
yar        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
    message = 'Laravel + Vue.js + TypeScript';
    load() {
    }
}
</script>

<style scoped>

</style>