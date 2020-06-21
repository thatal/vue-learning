import Vue from 'vue'
import App from './App.vue'
import Task from './components/Task.vue'
import HelloWorld from './components/HelloWorld.vue'
import NotFound from './components/NotFound.vue'

Vue.config.productionTip = false

const routes = {
	"/" : App,
	"/task" : Task,
	"/hello" : HelloWorld,
}


new Vue({
	data: {
		currentRoute: window.location.pathname,
	},
	computed: {
		currentComponent() {
			return routes[this.currentRoute] || NotFound;
		}
	},
	// render: h => h(App),
	render: function(h){
		return h(this.currentComponent);
	},
}).$mount('#app')
