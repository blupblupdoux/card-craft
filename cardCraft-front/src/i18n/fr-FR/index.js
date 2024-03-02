// This is just an example,
// so you can safely delete all default props below

export default {
  common: {
    submitBtn: 'Soumettre',
    search: 'Rechercher',
  },
  nav: {
    drawerTitle: 'Bonjour',
    homeBtn: 'Accueil',
    decksBtn: 'Cartes',
    statsBtn: 'Stats',
    profileBtn: 'Profil',
    tagsBtn: 'Tags',
    logoutBtn: 'Deconnexion',
    otherBtn: 'Autre',
  },
  auth: {
    loginTitle: 'Connexion',
    registerTitle: 'Créer un compte',
    nameLabel: 'Nom',
    emailLabel: 'Email',
    usernameLabel: 'Pseudo',
    passwordLabel: 'Mot de passe',
    passwordConfirmLabel: 'Confirmation du mot de passe',
    requiredFields: "Seuls les champs marqués d'un * sont obligatoires.",
    noAccount: "Vous n'avez pas de compte ? Inscrivez-vous gratuitement."
  },
  home: {
    lastLearntDecks: 'Derniers groupes de cartes appris',
  },
  decks: {
    addDeck: 'Creer',
    tagBtn: 'Tag',
    sortBtn: 'Trier',
    sortAsc: 'Alphabétique A-Z',
    sortDesc: 'Alphabétique Z-A',
    sortCreatedNew: 'Date de création (nouveau)',
    sortCreatedOld: 'Date de création (ancien)',

    createTitle: 'Créer un nouveau groupe de cartes',
    editTitle: 'Modifer les informations du groupe de cartes',
    nameLabel: 'Title',
    descriptionLabel: 'Description',
    colorLabel: 'Couleur',
    currentColor: 'Couleur actuelle',

    actionPlay: 'Apprendre',
    actionAddCard: 'Ajouter carte',
    actionEdit: 'Modifier infos'
  },
  flashcards: {
    totalFlashcard: 'Nombres de cartes : {number}',
    createTitle: 'Créer une nouvelle carte',
    editTitle: 'Modifier la carte',
    questionLabel: 'Question (recto de la carte)',
    answerLabel: 'Réponse (verso de la carte)',
  },
  learn: {
    displayAnswer: 'Cliquez sur la carte orange pour afficher la réponse',
    goToNextFlashcard: 'Aller à la flashcard suivante',
    choseTypeTitle: "Selectionne un type d'apprentissage",
    'learningTypeTitle-training': 'Entrainement',
    'learningTypeTitle-sa': 'Auto évaluation',
    'learningTypeTitle-mcq': 'Quizz',
    'learningTypeDescription-training': "Tout comme les flashcards papier, à l'ancienne. Pas d'évaluation.",
    'learningTypeDescription-sa': "Déterminez vous-même si vous aviez ou non la bonne réponse.",
    'learningTypeDescription-mcq': "Questions à choix multiples. S'il n'y a pas de quizz pour une flashcard, l'auto-évaluation sera affichée.",
    learnActionCorrect: "J'avais juste",
    learnActionWrong: "J'avais faux",
  }
}
