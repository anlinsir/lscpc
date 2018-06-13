import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')

Vue.use(Router)

export default new Router({
	routes: [
		{
		    path:'/index',
		    name:'index',
		    component:Index
		},
		{ path: '*', redirect: "/index"}
	   
	]
})
 