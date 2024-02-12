
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
    path: '/deck/create',
    name: "deckCreate",
    meta: { auth: true, navMenu: false },
    component: () => import('components/decks/DeckEdition.vue')
  },
  {
    path: '/deck/:deckId',
    props: true,
    component: () => import('components/decks/components/DeckParent.vue'),
    children: [
      {
        path: '',
        name: "deckDetails",
        meta: { auth: true, navMenu: false },
        props: true,
        component: () => import('components/decks/DeckDetails.vue')
      },
      {
        path: 'learn',
        name: "deckLearn",
        meta: { auth: true, navMenu: false },
        props: true,
        component: () => import('components/decks/DeckLearn.vue')
      },
      {
        path: 'edit',
        name: "deckEdit",
        meta: { auth: true, navMenu: false },
        props: true,
        component: () => import('components/decks/DeckEdition.vue')
      },
      {
        path: 'flashcard/create',
        name: "flashcardCreate",
        meta: { auth: true, navMenu: false },
        props: true,
        component: () => import('components/decks/FlashcardEdition.vue')
      },
      {
        path: 'flashcard/:flashcardId/edit',
        name: "flashcardEdit",
        meta: { auth: true, navMenu: false },
        props: true,
        component: () => import('components/decks/FlashcardEdition.vue')
      },
    ]
  },
  

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('components/ErrorNotFound.vue')
  }
]

export default routes
