import Vue from 'vue';
import VeeValidate from 'vee-validate';

import router from './router';
import App from './App.vue';

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app');
