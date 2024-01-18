
const routes = [
  {
    path: '/',
    name: "home",
    component: () => import('components/NavMenu.vue'),
  },
  {
    path: '/login',
    name: "login",
    component: () => import('components/AuthLogin.vue'),
  },
  {
    path: '/register',
    name: "register",
    component: () => import('components/AuthRegister.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/ErrorNotFound.vue')
  }
]

export default routes
