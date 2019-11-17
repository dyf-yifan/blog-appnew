import Vue from 'vue'
import VueRouter from 'vue-router'


import Nav from '@/views/Nav.vue'
import Index from '@/views/Index.vue'
import Article from '@/views/Article.vue'
import Collection from '@/views/Collection.vue'
import User from '@/views/User.vue'
import Profile from '@/views/Profile.vue'
import SignIn from '@/views/SignIn.vue'
import Basic from '@/views/Basic.vue'
import Pass from '@/views/Pass.vue'
import Setting from '@/views/Setting.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import UserFollows from '@/views/UserFollows.vue'

Vue.use(VueRouter)

const routes = [
	
		{
			path: '/',
			component: Nav,
			children:[
				{
					path: '/',
					redirect: 'index'
				},
				{
					path: 'index',
					component: Index
				},
				{
					path: 'article',
					component: Article
				},
				{
					path: 'collection',
					component: Collection
				},
				{
					path: 'user',
					component: User
				},																																																																																																									
				{
					path: 'profile',
					component: Profile,
					children: [
						{
							path: '/',
							redirect: 'basic'
						},
						{
							path: 'basic',
							component: Basic
						},
						{
							path: 'pass',
							component: Pass
						},
						{
							path: 'setting',
							component: Setting
						}
					]
				}
			]
		},
		{
			path: '/sign-in',
			component: SignIn
		}
	
	
]

const router = new VueRouter({
  routes
})

export default router
