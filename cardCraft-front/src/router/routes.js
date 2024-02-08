
const routes = [
  {
    path: '/',
    name: "home",
    meta: { auth: true, navMenu: true },
    component: () => import('components/HomePage.vue')
  },
  {
    path: '/login',
    name: "login",
    meta: { auth: false, navMenu: false },
    component: () => import('components/auth/AuthLogin.vue')
  },
  {
    path: '/register',
    name: "register",
    meta: { auth: false, navMenu: false},
    component: () => import('components/auth/AuthRegister.vue')
  },
  {
    path: '/decks',
    name: "decks",
    meta: { auth: true, navMenu: true },
    component: () => import('components/decks/DecksPage.vue')
  },
  {
    path: '/deck/:id',
    name: "deckDetails",
    meta: { auth: true, navMenu: false },
    props: true,
    component: () => import('components/decks/DeckDetails.vue')
  },
  {
    path: '/deck/create',
    name: "deckCreate",
    meta: { auth: true, navMenu: false },
    component: () => import('components/decks/DeckEdition.vue')
  },
  {
    path: '/deck/:id/edit',
    name: "deckEdit",
    meta: { auth: true, navMenu: false },
    props: true,
    component: () => import('components/decks/DeckEdition.vue')
  },
  {
    path: '/deck/:deckId/flashcard/create',
    name: "flashcardCreate",
    meta: { auth: true, navMenu: false },
    component: () => import('components/flashcards/FlashcardEdition.vue')
  },
  {
    path: '/deck/:deckId/flashcard/:id/edit',
    name: "flashcardEdit",
    meta: { auth: true, navMenu: false },
    props: true,
    component: () => import('components/flashcards/FlashcardEdition.vue')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/ErrorNotFound.vue')
  }
]

export default routes
