import Vue from 'vue'
import App from './App.vue'

import './plugins/element.js';
// import Row from '@element/row';
// import Col from '@element/col';

// import Element from '@element';
Vue.config.productionTip = false

// Vue.use(Row);
// Vue.use(Col);

// Vue.use(Element);

new Vue({
  render: h => h(App),
}).$mount('#app')
