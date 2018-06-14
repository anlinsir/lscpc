import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/pages/index')), 'index')
const Zixun = r => require.ensure([], () => r(require('@/pages/zixun')), 'zixun')
const zixunDetali = r => require.ensure([], () => r(require('@/pages/zixunDetali')), 'zixunDetali')

Vue.use(Router)

export default new Router({
	routes: [
		{
		    path:'/index',
		    name:'index',
		    component:Index
		},
		{
		    path:'/zixun',
		    name:'zixun',
		    component:Zixun
		},
		{
		    path:'/zixunDetali/:id',
		    name:'zixunDetali',
		    component:zixunDetali
		},
		{ path: '*', redirect: "/index"}
	   
	]
})
 