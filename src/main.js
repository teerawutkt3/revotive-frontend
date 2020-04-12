/*!

=========================================================
* Vue Argon Dashboard - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import components from './component'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'

//==> Buttons component
for (let i = 0; i < components.buttons.length; i++){
  Vue.component(components.buttons[i].name, components.buttons[i].component)
}
//==> Icon component
Vue.component(components.icon.name, components.icon.component)
//===> Card component
Vue.component(components.card.name, components.card.component)


Vue.config.productionTip = false

Vue.use(ArgonDashboard)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
