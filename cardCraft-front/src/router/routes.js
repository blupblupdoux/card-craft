
const routes = [
  {
    path: '/',
    name: "home",
    meta: { auth: true },
    component: () => import('components/NavMenu.vue'),
  },
  {
    path: '/login',
    name: "login",
    meta: { auth: false },
    component: () => import('components/AuthLogin.vue'),
  },
  {
    path: '/register',
    name: "register",
    meta: { auth: false },
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
