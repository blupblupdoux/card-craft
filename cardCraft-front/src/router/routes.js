
const routes = [
  {
    path: '/',
    name: "home",
    meta: { auth: true },
    component: () => import('components/HomePage.vue'),
  },
  {
    path: '/login',
    name: "login",
    meta: { auth: false },
    component: () => import('components/auth/AuthLogin.vue'),
  },
  {
    path: '/register',
    name: "register",
    meta: { auth: false },
    component: () => import('components/auth/AuthRegister.vue'),
  },
  {
    path: '/decks',
    name: "decks",
    meta: { auth: true },
    component: () => import('components/DecksPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/ErrorNotFound.vue')
  }
]

export default routes
