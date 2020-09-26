import Vue from 'vue'
import App from './App.vue'
//import Laba from './components/Laba.vue'
//Vue.component ('app-laba')

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')