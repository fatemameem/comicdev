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

      // Projects
      "projects.ecotracker.title": "EcoTracker",
      "projects.ecotracker.problem": "Les gens veulent suivre leur empreinte carbone mais les applications existantes sont ennuyeuses et trop techniques.",
      "projects.ecotracker.idea": "Gamifier l'expérience ! Faire en sorte que sauver la planète ressemble à un jeu RPG.",
      "projects.ecotracker.solution": "Une PWA mobile qui utilise les capteurs de l'appareil pour suivre automatiquement les déplacements et récompense les utilisateurs avec des 'Eco-Coins'.",
      "projects.ecotracker.longDescription": "EcoTracker est une application web progressive conçue pour rendre la sensibilisation environnementale amusante. En exploitant le GPS et l'accéléromètre de l'appareil, l'application détecte automatiquement les modes de transport (marche, vélo, voiture) et estime les émissions de carbone.",
      
      "projects.devdash.title": "DevDash",
      "projects.devdash.problem": "Les développeurs ont trop d'onglets ouverts pour Jira, GitHub et le statut CI/CD.",
      "projects.devdash.idea": "Un centre de commande unifié pour les workflows devops.",
      "projects.devdash.solution": "Application de bureau basée sur Electron agrégant les données d'API des principaux outils dev dans un seul tableau de bord personnalisable.",
      "projects.devdash.longDescription": "DevDash centralise le workflow chaotique des développeurs en une seule fenêtre. Il se connecte aux API populaires pour récupérer le statut des PR, les assignations de tickets et la santé des pipelines de build en temps réel.",
      
      "projects.retrochat.title": "RetroChat",
      "projects.retrochat.problem": "Les applications de chat modernes sont surchargées. Parfois, on veut juste du texte simple.",
      "projects.retrochat.idea": "Retour aux bases. L'ambiance IRC avec la sécurité moderne.",
      "projects.retrochat.solution": "Application de chat en temps réel utilisant WebSockets avec chiffrement de bout en bout et aucun stockage persistant.",
      "projects.retrochat.longDescription": "Un clin d'œil nostalgique aux clients IRC, RetroChat offre une communication éphémère et sécurisée. Aucun historique de messages n'est stocké sur le serveur, garantissant une confidentialité totale.",
      
      "projects.netsentinel.title": "NetSentinel",
      "projects.netsentinel.problem": "Les petites entreprises manquent de systèmes de détection d'intrusion abordables.",
      "projects.netsentinel.idea": "Un moniteur réseau léger, compatible Raspberry Pi.",
      "projects.netsentinel.solution": "Renifleur de paquets basé sur Python qui utilise l'apprentissage automatique pour identifier les patterns de trafic anormaux.",
      "projects.netsentinel.longDescription": "NetSentinel est conçu pour les appareils de périphérie à faible consommation. Il surveille le trafic réseau local et alerte les administrateurs des tentatives suspectes de scan de ports ou d'exfiltration de données via un bot Telegram.",
      
      "projects.ciphervault.title": "CipherVault",
      "projects.ciphervault.problem": "Stocker des secrets dans des variables d'environnement peut encore présenter des fuites.",
      "projects.ciphervault.idea": "Un CLI de gestion de secrets soutenu par le matériel.",
      "projects.ciphervault.solution": "Un outil CLI qui s'interface avec les YubiKeys pour déchiffrer les secrets uniquement en mémoire pendant l'exécution.",
      "projects.ciphervault.longDescription": "CipherVault ajoute une couche physique de sécurité aux secrets de développement. Il nécessite la présence d'un token matériel pour déchiffrer les fichiers de configuration, empêchant le vol de données à distance.",

      // Project Features
      "features.autoDetection": "Détection automatique d'activité",
      "features.gamifiedRewards": "Système de récompenses gamifié avec classements",
      "features.offlineSupport": "Support hors ligne via Service Workers",
      "features.dataVisualization": "Graphiques de visualisation de données interactifs",
      "features.dragDropLayout": "Disposition par glisser-déposer des widgets",
      "features.oauth2Integration": "Intégration OAuth2 pour GitHub et Jira",
      "features.realtimeUpdates": "Mises à jour websocket en temps réel",
      "features.darkLightMode": "Thèmes mode sombre/clair",
      "features.packetAnalysis": "Analyse de paquets en temps réel",
      "features.mlAnomalyDetection": "Détection d'anomalies basée sur ML",
      "features.telegramAlerts": "Alertes Telegram/Slack",
      "features.lowResource": "Empreinte de ressources faible",

      // Voluntary
      "voluntary.mentor.role": "Mentor",
      "voluntary.mentor.org": "Code for Good",
      "voluntary.mentor.desc": "Enseignement du HTML/CSS de base aux étudiants du secondaire dans les communautés sous-représentées.",
      "voluntary.contributor.role": "Contributeur Open Source",
      "voluntary.contributor.org": "React Docs",
      "voluntary.contributor.desc": "Aide à la traduction de la documentation en espagnol et correction des problèmes d'accessibilité dans les exemples.",

      // Additional
      "additional.speaking": "Prise de parole publique : TechConf 2023",
      "additional.writing": "Rédaction technique : Blog Medium avec plus de 5k lecteurs",
      "additional.design": "Design UI : Compétences Figma & Adobe XD",

      // Common
      "category.developer": "Développeur",
      "category.security": "Sécurité",
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
