export default {
  fr: {
    translation: {
      // Existing product/profile translations
      "product.price": "Prix",
      "product.inStock": "En stock : {{count}} articles",
      "product.outOfStock": "Rupture de stock",
      "product.onlyOneLeft": "Plus qu'un seul article !",
      "product.addToCart": "Ajouter au panier",

      "profile.welcome": "Bienvenue, {{name}} !",
      "profile.memberSince": "Membre depuis : {{date}}",
      "profile.loyaltyPoints": "Vous avez {{points}} points de fidélité",
      "profile.orders_zero": "Vous n'avez aucune commande",
      "profile.orders_one": "Vous avez 1 commande",
      "profile.orders_other": "Vous avez {{count}} commandes",
      "profile.editProfile": "Modifier le profil",

      // Navigation
      "nav.about": "À propos",
      "nav.education": "Formation",
      "nav.work": "Travail",
      "nav.projects": "Projets",
      "nav.voluntary": "Bénévolat",
      "nav.more": "Plus",
      "nav.contact": "Contact",

      // Education
      "education.degree.bsc": "B.Sc. Informatique et Génie Logiciel",
      "education.school.brac": "Université BRAC",
      "education.details.brac": "Spécialisation en Interaction Homme-Machine et Technologies Web. Diplômé Summa Cum Laude.",
      "education.degree.meng": "M.Ing. Sécurité des Systèmes d'Information",
      "education.school.concordia": "Université Concordia",
      "education.details.concordia": "Programme intensif de 12 semaines couvrant React, Node.js et Infrastructure Cloud.",

      // Experience
      "experience.role.frontend": "Développeur Frontend",
      "experience.company.bevy": "Bevy Commerce",
      "experience.desc.bevy": "Direction de l'initiative de refonte de l'interface. Amélioration des performances de 40% grâce au fractionnement de code et à l'optimisation des ressources. Mentorat de développeurs junior.",
      "experience.role.webdev": "Développeur Web (Bénévole)",
      "experience.company.technest": "TECHNEST Canada",
      "experience.desc.technest": "Création de sites web adaptatifs pour plus de 20 clients. Collaboration étroite avec les designers pour implémenter des animations au pixel près.",

      // Additional Experience
      "additionalExperience.title": "Chapitre 3: Expérience Additionnelle",
      "additionalExperience.role.customerService": "Représentant du Service Client - Rogers & Fido",
      "additionalExperience.company.ioSolutions": "IO Solutions Inc",
      "additionalExperience.desc.ioSolutions":
        "Représentant expérimenté du service client capable de répondre aux demandes, d'assurer la satisfaction et d'atteindre 100% des objectifs de performance avec un historique prouvé de communication efficace, multitâches et fidélisation de la clientèle.",
      "additionalExperience.role.gradAmbassador": "Ambassadeur des Étudiants Diplômés",
      "additionalExperience.company.gradStudies": "École des Études Supérieures, Université Concordia",
      "additionalExperience.desc.gradAmbassador":
        "Représenté la communauté des étudiants diplômés et promu les programmes académiques tout en fournissant des conseils et un soutien aux futurs étudiants diplômés et actuels.",
      "additionalExperience.role.examInvigilator": "Surveillant d'Examens",
      "additionalExperience.company.examOffice": "Bureau des Examens, Université Concordia",
      "additionalExperience.desc.examInvigilator":
        "Supervisé les examens académiques en assurant l'intégrité et le respect des politiques universitaires tout en fournissant de l'aide aux étudiants pendant les périodes d'examens.",

      // =========================
      // PROJECTS
      // =========================

      "projects.bdgsa.title": "Plateforme Web BDGSA",
      "projects.bdgsa.problem": "Les organisations étudiantes ont du mal à maintenir des sites web dynamiques sans nécessiter une implication constante des développeurs.",
      "projects.bdgsa.idea": "Créer une plateforme de blog et de contenu évolutive avec gestion basée sur les rôles et workflows de modération.",
      "projects.bdgsa.solution": "Une plateforme Next.js full-stack avec tableaux de bord d'administration, authentification JWT, et workflows de soumission de contenu modéré.",
      "projects.bdgsa.longDescription": "La plateforme web BDGSA fournit un système de gestion de contenu évolutif et réactif permettant aux organisations étudiantes de publier facilement des blogs et des mises à jour. Elle dispose d'APIs REST, d'authentification d'administration, de workflows de modération basés sur les rôles, et d'une conception UI mobile-first optimisée pour l'accessibilité et l'évolutivité.",


      "projects.technest.title": "Plateforme Tech-Nest Canada",
      "projects.technest.problem": "Les équipes non-techniques doivent gérer les événements et podcasts sans dépendance aux développeurs.",
      "projects.technest.idea": "Fournir une plateforme pilotée par tableau de bord permettant aux non-développeurs de mettre à jour le contenu du site via des outils simples.",
      "projects.technest.solution": "Une plateforme Next.js + TypeScript en production intégrée avec Google Sheets et un tableau de bord d'administration pour gérer les événements, podcasts et données d'équipe.",
      "projects.technest.longDescription": "Tech-Nest Canada est une plateforme de production en direct soutenant les initiatives de cybersécurité et d'éthique IA. Elle intègre la gestion de contenu alimentée par Google Sheets, les mises à jour de tableau de bord en temps réel, les optimisations de mise en cache, et la gestion d'état global pour offrir des expériences utilisateur fluides et des mises à jour de contenu rapides.",


      "projects.containerguard.title": "Container Guard",
      "projects.containerguard.problem": "Les applications conteneurisées sont vulnérables aux attaques en raison de configurations faibles et d'isolation inappropriée.",
      "projects.containerguard.idea": "Analyser et renforcer les environnements de conteneurs en appliquant les meilleures pratiques de sécurité de conteneurs modernes.",
      "projects.containerguard.solution": "Une implémentation axée sur la sécurité utilisant des environnements Docker pour tester les vulnérabilités et implémenter l'isolation, les contrôles de privilèges, et les défenses d'attaque.",
      "projects.containerguard.longDescription": "Container Guard analyse les vulnérabilités au sein des environnements Docker conteneurisés, implémentant des protections telles que l'accès aux privilèges minimums, l'isolation réseau, et les systèmes de fichiers en lecture seule. Les tests de sécurité incluaient l'injection SQL, les attaques par inondation SYN, et l'exploitation XSS pour démontrer les stratégies de défense et renforcer les déploiements de conteneurs.",


      "projects.malwaredefense.title": "Analyse et Défense Automatisée contre les Malwares",
      "projects.malwaredefense.problem": "Les systèmes logiciels hérités restent vulnérables en raison de vulnérabilités non détectées et de défenses obsolètes.",
      "projects.malwaredefense.idea": "Automatiser la détection de vulnérabilités de malwares et renforcer les mécanismes de défense en utilisant des outils d'ingénierie inverse.",
      "projects.malwaredefense.solution": "Ingénierie inverse d'exécutables avec Ghidra et développement de scripts Python pour automatiser la détection et l'atténuation des vulnérabilités.",
      "projects.malwaredefense.longDescription": "Ce projet impliquait l'ingénierie inverse d'exécutables utilisant Ghidra pour identifier les failles de sécurité telles que les identifiants codés en dur et les débordements de tampon. Des scripts Python automatisés ont été développés pour améliorer la détection de vulnérabilités et les implémentations de défense, améliorant la résilience des logiciels hérités.",


      "projects.mealrecommender.title": "Système de Recommandation de Repas Basé sur les Émotions",
      "projects.mealrecommender.problem": "Les systèmes traditionnels de recommandation de repas ignorent les réponses émotionnelles influençant les choix alimentaires.",
      "projects.mealrecommender.idea": "Utiliser les données EEG pour personnaliser les recommandations de repas basées sur les réactions émotionnelles.",
      "projects.mealrecommender.solution": "Un système d'apprentissage automatique analysant les signaux EEG et appliquant plusieurs algorithmes ML pour recommander des repas alignés avec les réponses émotionnelles.",
      "projects.mealrecommender.longDescription": "Le système analysait les signaux EEG de participants pour comprendre les réactions émotionnelles envers la nourriture et recommander des repas en conséquence. Plusieurs algorithmes ML incluant Random Forest, KNN, SVM, et XGBoost ont été utilisés pour valider les recommandations de repas personnalisées.",

      "projects.dllinjection.title": "Détection d'Injection de DLL Malveillantes utilisant Ghidra",
      "projects.dllinjection.problem": "Les injections de DLL malveillantes permettent aux attaquants d'exécuter du code non autorisé dans des processus légitimes, rendant la détection difficile dans de grands ensembles de données binaires.",
      "projects.dllinjection.idea": "Utiliser des techniques d'analyse de code statique pour détecter automatiquement les appels API suspects et les modèles d'injection dans les binaires.",
      "projects.dllinjection.solution": "Un framework d'analyse statique basé sur Ghidra enrichi de scripts d'automatisation Python pour détecter les modèles d'injection suspects et réduire les faux positifs.",
      "projects.dllinjection.longDescription": "Ce projet a implémenté un framework d'analyse statique utilisant Ghidra pour détecter les tentatives d'injection de DLL malveillantes dans les binaires compilés. Les scripts Python ont automatisé l'identification d'appels API suspects tels que VirtualAllocEx et WriteProcessMemory. Le système a analysé 39 binaires et atteint 97% de précision de détection avec un F1-score de 0,89 tout en améliorant la fiabilité grâce à une correspondance de motifs raffinée et une réduction des faux positifs. Le projet a renforcé l'expertise dans les workflows d'ingénierie inverse et les pipelines d'analyse automatisée de malwares.",

      "projects.marvelhangman.title": "Jeu du Pendu Marvel",
      "projects.marvelhangman.problem": "Les jeux de devinettes classiques sont souvent génériques et manquent de thèmes engageants pour les fans.",
      "projects.marvelhangman.idea": "Créer un jeu du pendu thématique où les joueurs devinent les noms de personnages Marvel de manière amusante et interactive.",
      "projects.marvelhangman.solution": "Un jeu du pendu basé sur navigateur construit avec Vanilla JavaScript, HTML et CSS, permettant aux utilisateurs de deviner les noms de personnages Marvel avec des commentaires interactifs.",
      "projects.marvelhangman.longDescription": "Marvel Hangman est un jeu de navigateur léger où les joueurs devinent les noms de personnages Marvel populaires lettre par lettre avant d'épuiser leurs tentatives. Construit avec Vanilla JavaScript, HTML et CSS, le jeu offre un gameplay réactif, un rendu dynamique des mots et des commentaires interactifs pour maintenir l'engagement des utilisateurs tout en mettant en valeur les compétences de développement frontend de base sans dépendre de frameworks.",

      // =========================
      // FEATURES
      // =========================
      "features.characterNameGuessing": "Deviner les noms de personnages Marvel lettre par lettre",
      "features.dynamicWordRendering": "Rendu dynamique des mots et lettres",
      "features.gameStateManagement": "Gestion interactive de l'état du jeu et commentaires",
      "features.responsiveGameplay": "Gameplay réactif sur tous les appareils",
      "features.vanillaJsImplementation": "Construit purement avec Vanilla JavaScript, HTML et CSS",
      "features.roleBasedModeration": "Soumission de contenu basée sur les rôles et modération",
      "features.adminDashboard": "Tableau de bord d'administration avec gestion de contenu",
      "features.mobileResponsive": "Conception UI réactive mobile-first",
      "features.restApiIntegration": "Gestion de contenu dynamique alimentée par API REST",
      "features.dashboardRealtimeUpdates": "Mises à jour de tableau de bord reflétées sur le site en temps réel",
      "features.googleSheetsIntegration": "Mises à jour de contenu alimentées par Google Sheets",
      "features.apiCaching": "Mise en cache API et mémorisation pour amélioration des performances",
      "features.globalStateManagement": "Gestion d'état global entre le tableau de bord et les pages publiques",

      "features.containerIsolation": "Isolation de conteneurs et accès aux privilèges minimums",
      "features.attackSimulation": "Tests de sécurité contre injection SQL, inondation SYN, et XSS",
      "features.readOnlyFilesystem": "Protections de système de fichiers de conteneur en lecture seule",

      "features.reverseEngineering": "Ingénierie inverse d'exécutables utilisant Ghidra",
      "features.vulnerabilityAutomation": "Détection automatisée de vulnérabilités via scripts Python",
      "features.legacyDefense": "Améliorations de défense pour systèmes hérités",

      "features.eegAnalysis": "Traitement de signaux EEG pour analyse d'émotions",
      "features.mlPrediction": "Modèles de recommandation basés sur l'apprentissage automatique",
      "features.personalizedSuggestions": "Suggestions de repas personnalisées basées sur les émotions",

      "features.staticBinaryAnalysis": "Analyse binaire statique utilisant Ghidra",
      "features.apiDetectionAutomation": "Détection automatisée d'appels API suspects via scripts Python",
      "features.patternMatchingEngine": "Moteur de correspondance de motifs précis pour réduire les faux positifs",
      "features.datasetAnalysis": "Analyse d'ensembles de données binaires à grande échelle",
      "features.reverseEngineeringWorkflow": "Automatisation des workflows d'ingénierie inverse et d'analyse de malwares",

      // Voluntary
      "voluntary.bdgsavp.role": "Vice-Présidente aux Communications",
      "voluntary.bdgsavp.org": "Association des Étudiants Diplômés du Bangladesh, Université Concordia",
      "voluntary.bdgsavp.desc": "Dirigé les initiatives de communication et coordonné les activités de sensibilisation pour renforcer l'engagement parmi les étudiants diplômés et promouvoir les événements et programmes de l'association.",

      "voluntary.bracclubhr.role": "Directrice Adjointe, Ressources Humaines",
      "voluntary.bracclubhr.org": "Club Informatique de l'Université BRAC",
      "voluntary.bracclubhr.desc": "Soutenu le recrutement, la coordination des membres et les opérations internes tout en aidant à organiser les activités et événements du club pour les étudiants intéressés par la technologie et l'informatique.",

      "voluntary.bracadventureit.role": "Exécutive, TI",
      "voluntary.bracadventureit.org": "Club d'Aventure de l'Université BRAC",
      "voluntary.bracadventureit.desc": "Fourni un support technique et géré les ressources numériques et communications pour aider à organiser des événements et activités pour les membres du club.",

      // Additional
      "additional.speaking": "Prise de parole publique : TechConf 2023",
      "additional.writing": "Rédaction technique : Blog Medium avec plus de 5k lecteurs",
      "additional.design": "Design UI : Compétences Figma & Adobe XD",

      // Common
      "category.developer": "Développeur",
      "category.security": "Sécurité",
      "category.academic": "Recherche Académique",
      "period.jun2021Dec2021": "JUN 2021 - DEC 2021",
      "period.sep2024Present": "SEP 2024 - PRÉSENT",
      "period.2017-2021": "2017 - 2021",
      "period.2023-2024": "2023 - 2024",

      // Hero Section
      "hero.welcomeMessage": "Salut ! Bienvenue sur mon portfolio.",
      "hero.mainTitle": "Je Crée des",
      "hero.websites": "Sites Web",
      "hero.tellStories": "Qui Racontent des Histoires.",
      "hero.subtitle": "Ingénieur Frontend spécialisé en React, interactions créatives et interfaces pixel-parfait.",
      "hero.viewProjects": "Voir les Projets",
      "hero.letsTalk": "Discutons",
      "hero.protagonist": "Le Protagoniste",
      "hero.frontendWizard": "Magicien Frontend",
      "hero.name": "Nom :",
      "hero.nameValue": "Fatema A. Meem",
      "hero.level": "Niveau :",
      "hero.levelValue": "Ingénieur Frontend",
      "hero.superpower": "Super Pouvoir :",
      "hero.superpowerValue": "Convertir le café en code propre.",

      // Education Section
      "education.title": "Chapitre 1 : L'Histoire des Origines",

      // Experience Section
      "experience.title": "Chapitre 2 : Aventures Professionelles",

      // Projects Section
      "projects.title": "Numéros en Vedette",
      "projects.subtitle": "Sélectionnez un numéro pour lire l'histoire complète.",
      "projects.readIssue": "Lire le Numéro",
      "projects.plot": "Intrigue :",
      "projects.climax": "Apogée :",
      "projects.allIssues": "Tous les Numéros",
      "projects.developerChronicles": "Chroniques du Développeur",
      "projects.securityFiles": "Dossiers Sécurité",
      "projects.academicResearch": "Recherche Académique",
      "projects.noIssuesFound": "Aucun numéro trouvé dans cette archive.",
      "projects.viewAll": "Voir Tout",

      // Project Modal
      "projectModal.noPreview": "Aucun Aperçu",
      "projectModal.previousImage": "Image Précédente",
      "projectModal.nextImage": "Image Suivante",
      "projectModal.selectImage": "Sélectionner l'Image",
      "projectModal.keyFeatures": "Fonctionnalités Clés :",
      "projectModal.theChallenge": "Le Défi",
      "projectModal.theSolution": "La Solution",
      "projectModal.liveDemo": "Démo en Direct",
      "projectModal.source": "Source",
      "projectModal.closeModal": "Fermer la Modale",

      // Volunteer Section
      "volunteer.sideQuests": "Quêtes Secondaires",
      "volunteer.bonusContent": "Contenu Bonus",

      // Contact Section
      "contact.title": "Courrier des Lecteurs",
      "contact.subtitle": "Vous avez un projet en tête ? Écrivez-moi !",
      "contact.yourName": "Votre Nom",
      "contact.namePlaceholder": "Charlie Brown",
      "contact.email": "Courriel",
      "contact.emailPlaceholder": "bonnesgrief@peanuts.com",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Écrivez quelque chose de gentil...",
      "contact.sendIt": "Envoyer",
      "contact.quote": "La vie est comme un site web. Il faut juste continuer à refactoriser jusqu'à ce que ça marche.",
      "contact.findMeElsewhere": "Trouvez-moi ailleurs :",
      "contact.twitter": "Twitter",
      "contact.linkedin": "LinkedIn",
      "contact.mail": "Courriel",
      "contact.messageSuccess": "Message envoyé avec succès ! 🎉",
      "contact.messageError": "Quelque chose s'est mal passé ! Veuillez réessayer.",

      // Footer Section
      "footer.thanksForReading": "Merci de votre lecture !",
      "footer.designedWith": "Conçu avec ❤️ et ☕️. Aucun personnage protégé par des droits d'auteur n'a été blessé lors de la création de ce site.",
      "footer.copyright": "© {{year}} Fatema A. Meem. Tous droits réservés.",
      "footer.backToTop": "Retour en Haut",
    },
  },
};
