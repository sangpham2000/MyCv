import MainLayout from '@/layout/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        component: AboutView
      }
    ]
  }
]
export default routes
