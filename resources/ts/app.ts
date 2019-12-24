import Vue from 'vue';
import bootstrap from './bootstrap';
import AppComponent from './components/app.vue';

bootstrap();

const app = new Vue({
    el: '#app',
    render: h => h(AppComponent)
});