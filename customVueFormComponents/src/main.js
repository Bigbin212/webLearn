import Vue from 'vue';
import App from './App.vue';
import uiAll from './index'

Vue.use(uiAll);
new Vue({
  el: '#app',
  render: h => h(App)
});


