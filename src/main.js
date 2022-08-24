import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'

createApp(App).use(router).mixin(mixins).use(store).mount('#app')

window.Kakao.init("b0eaea4b452692c85ff4fd6fb310115e");