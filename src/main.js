import Vue from 'vue';
import App from './App.vue';
import ServerHeader from './ServerHeader.vue';
import ServerFooter from './ServerFooter.vue';
import ServerBody from './ServerBody.vue';

Vue.component('serverheader', ServerHeader);
Vue.component('serverfooter', ServerFooter);
Vue.component('serverbody', ServerBody);

new Vue({
  el: '#app',
  render: h => h(App)
})
