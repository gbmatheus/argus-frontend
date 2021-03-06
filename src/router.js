// Imports
import Vue from 'vue'
import Router from 'vue-router'
import vuetify from './plugins/vuetify'
import kebabCase from 'lodash/kebabCase'

Vue.use(Router)

function layout (path, name, children) {
  const folder = kebabCase(name)

  return {
    path,
    component: () => import(`@/layouts/${folder}/Index`),
    children,
  }
}

function redirect (redirect) {
  return { path: '*', redirect }
}

function route (path, name, file) {
  const folder = (file || `${kebabCase(name)}`).toLowerCase()

  return {
    path,
    name,
    component: () => import(`@/views/${folder}/Index.vue`),
  }
}

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0

    if (to.hash) {
      scrollTo = to.hash
    } else if (savedPosition) {
      scrollTo = savedPosition.y
    }

    return vuetify.framework.goTo(scrollTo)
  },
  routes: [
    layout('/admin', 'Backend', [
      route('', 'Dashboard', 'backend/Dashboard'),
      route('settings', 'Settings', 'backend/Settings'),
      route('profile', 'Profile', 'backend/Profile'),
      route('alunos', 'Alunos', 'backend/Alunos'),
      route('usuarios', 'Usuarios', 'backend/Usuarios'),
      route('disciplinas', 'Disciplinas', 'backend/Disciplinas'),
      route('turmas', 'Turmas', 'backend/Turmas'),
      route('curriculos', 'Curriculos', 'backend/Curriculos'),
      route('pedagogia', 'Pedagogia', 'backend/Pedagogia'),
      route('financeiro', 'Financeiro', 'backend/Financeiro'),
      redirect(''),
    ]),
    layout('/auth', 'Frontend', [
      route('login', 'Login', 'auth/Login'),
      route('register', 'Register', 'auth/Register'),
      redirect('login'),
    ]),
    layout('/', 'Frontend', [
      route('', 'Home', 'frontend/Home'),
      route('about', 'About', 'frontend/About'),
      route('contact', 'Contact', 'frontend/Contact'),
    ]),
    redirect('/'),
  ],
})

// Bootstrap Analytics
// Set in .env
// https://github.com/MatteoGabriele/vue-analytics
if (process.env.VUE_APP_GOOGLE_ANALYTICS) {
  Vue.use(require('vue-analytics').default, {
    id: process.env.VUE_APP_GOOGLE_ANALYTICS,
    router,
    autoTracking: {
      page: process.env.NODE_ENV !== 'development',
    },
  })
}

export default router
