export default {
  en: {
    translation: {
      // Existing product/profile translations
      "product.price": "Price",
      "product.inStock": "In stock: {{count}} items",
      "product.outOfStock": "Out of stock",
      "product.onlyOneLeft": "Only 1 item left!",
      "product.addToCart": "Add to cart",

      "profile.welcome": "Welcome, {{name}}!",
      "profile.memberSince": "Member since: {{date}}",
      "profile.loyaltyPoints": "You have {{points}} loyalty points",
      "profile.orders_zero": "You have no orders",
      "profile.orders_one": "You have 1 order",
      "profile.orders_other": "You have {{count}} orders",
      "profile.editProfile": "Edit profile",

      // Navigation
      "nav.about": "About",
      "nav.education": "Education",
      "nav.work": "Work",
      "nav.projects": "Projects",
      "nav.voluntary": "Voluntary",
      "nav.more": "More",
      "nav.contact": "Contact",

      // Education
      "education.degree.bsc": "B.Sc. Computer Science and Engineering",
      "education.school.brac": "BRAC University",
      "education.details.brac": "Focus on Human-Computer Interaction & Web Technologies. Graduated Summa Cum Laude.",
      "education.degree.meng": "M.Engg. Information Systems Security",
      "education.school.concordia": "Concordia University",
      "education.details.concordia": "Intensive 12-week program covering React, Node.js, and Cloud Infrastructure.",

      // Experience
      "experience.role.frontend": "Frontend Developer",
      "experience.company.bevy": "Bevy Commerce",
      "experience.desc.bevy": "Leading the UI redesign initiative. Improved performance by 40% through code splitting and asset optimization. Mentoring junior developers.",
      "experience.role.webdev": "Web Developer (Volunteer)",
      "experience.company.technest": "TECHNEST Canada",
      "experience.desc.technest": "Built responsive websites for 20+ clients. Collaborated closely with designers to implement pixel-perfect animations.",

      // Projects
      "projects.ecotracker.title": "EcoTracker",
      "projects.ecotracker.problem": "People want to track their carbon footprint but existing apps are boring and data-heavy.",
      "projects.ecotracker.idea": "Gamify the experience! Make saving the planet feel like an RPG game.",
      "projects.ecotracker.solution": "A mobile-first PWA that uses device sensors to auto-track travel and rewards users with 'Eco-Coins'.",
      "projects.ecotracker.longDescription": "EcoTracker is a progressive web application designed to make environmental awareness fun. By leveraging the device's GPS and accelerometer, the app automatically detects modes of transport (walking, cycling, driving) and estimates carbon emissions.",
      
      "projects.devdash.title": "DevDash",
      "projects.devdash.problem": "Developers have too many tabs open for Jira, GitHub, and CI/CD status.",
      "projects.devdash.idea": "A unified command center for devops workflows.",
      "projects.devdash.solution": "Electron-based desktop app aggregating API data from major dev tools into a single customizable dashboard.",
      "projects.devdash.longDescription": "DevDash centralizes the chaotic developer workflow into a single window. It connects to popular APIs to pull PR status, ticket assignments, and build pipeline health in real-time.",
      
      "projects.retrochat.title": "RetroChat",
      "projects.retrochat.problem": "Modern chat apps are bloated. Sometimes you just want simple text.",
      "projects.retrochat.idea": "Back to basics. IRC vibes with modern security.",
      "projects.retrochat.solution": "Real-time chat application using WebSockets with end-to-end encryption and zero persistent storage.",
      "projects.retrochat.longDescription": "A nostalgic nod to IRC clients, RetroChat provides ephemeral, secure communication. No message history is stored on the server, ensuring complete privacy.",
      
      "projects.netsentinel.title": "NetSentinel",
      "projects.netsentinel.problem": "Small businesses lack affordable intrusion detection systems.",
      "projects.netsentinel.idea": "A lightweight, Raspberry Pi compatible network monitor.",
      "projects.netsentinel.solution": "Python-based packet sniffer that uses machine learning to identify anomalous traffic patterns.",
      "projects.netsentinel.longDescription": "NetSentinel is designed for low-power edge devices. It monitors local network traffic and alerts administrators of suspicious port scanning or data exfiltration attempts via Telegram bot.",
      
      "projects.ciphervault.title": "CipherVault",
      "projects.ciphervault.problem": "Storing secrets in environment variables can still be leaky.",
      "projects.ciphervault.idea": "A hardware-backed secret management CLI.",
      "projects.ciphervault.solution": "A CLI tool that interfaces with YubiKeys to decrypt secrets only in memory during runtime.",
      "projects.ciphervault.longDescription": "CipherVault adds a physical layer of security to development secrets. It requires a hardware token presence to decrypt configuration files, preventing remote data theft.",

      // Project Features
      "features.autoDetection": "Automatic activity detection",
      "features.gamifiedRewards": "Gamified reward system with leaderboards",
      "features.offlineSupport": "Offline support via Service Workers",
      "features.dataVisualization": "Interactive data visualization charts",
      "features.dragDropLayout": "Drag-and-drop widget layout",
      "features.oauth2Integration": "OAuth2 integration for GitHub and Jira",
      "features.realtimeUpdates": "Real-time websocket updates",
      "features.darkLightMode": "Dark/Light mode themes",
      "features.packetAnalysis": "Real-time packet analysis",
      "features.mlAnomalyDetection": "ML-based anomaly detection",
      "features.telegramAlerts": "Telegram/Slack alerts",
      "features.lowResource": "Low resource footprint",

      // Voluntary
      "voluntary.mentor.role": "Mentor",
      "voluntary.mentor.org": "Code for Good",
      "voluntary.mentor.desc": "Teaching basic HTML/CSS to high school students in underrepresented communities.",
      "voluntary.contributor.role": "Open Source Contributor",
      "voluntary.contributor.org": "React Docs",
      "voluntary.contributor.desc": "Helped translate documentation to Spanish and fixed accessibility issues in examples.",

      // Additional
      "additional.speaking": "Public Speaking: TechConf 2023",
      "additional.writing": "Technical Writing: Medium Blog with 5k+ readers",
      "additional.design": "UI Design: Figma & Adobe XD proficiency",

      // Common
      "category.developer": "Developer",
      "category.security": "Security",
      "period.jun2021Dec2021": "JUN 2021 - DEC 2021",
      "period.sep2024Present": "SEP 2024 - PRESENT",
      "period.2017-2021": "2017 - 2021",
      "period.2023-2024": "2023 - 2024",

      // Hero Section
      "hero.welcomeMessage": "Hi there! Welcome to my portfolio.",
      "hero.mainTitle": "I Build",
      "hero.websites": "Websites",
      "hero.tellStories": "That Tell Stories.",
      "hero.subtitle": "Frontend Engineer specializing in React, creative interactions, and pixel-perfect UIs.",
      "hero.viewProjects": "View Projects",
      "hero.letsTalk": "Let's Talk",
      "hero.protagonist": "The Protagonist",
      "hero.frontendWizard": "Frontend Wizard",
      "hero.name": "Name:",
      "hero.nameValue": "Fatema A. Meem",
      "hero.level": "Level:",
      "hero.levelValue": "Frontend Engineer",
      "hero.superpower": "Superpower:",
      "hero.superpowerValue": "Converting coffee into clean code.",

      // Education Section
      "education.title": "Chapter 1: The Origin Story",

      // Experience Section
      "experience.title": "Chapter 2: Career Adventures",

      // Projects Section
      "projects.title": "Featured Issues",
      "projects.subtitle": "Select an issue to read the full story.",
      "projects.readIssue": "Read Issue",
      "projects.plot": "Plot:",
      "projects.climax": "Climax:",
      "projects.allIssues": "All Issues",
      "projects.developerChronicles": "Developer Chronicles",
      "projects.securityFiles": "Security Files",
      "projects.noIssuesFound": "No issues found in this archive.",
      "projects.viewAll": "View All",

      // Project Modal
      "projectModal.noPreview": "No Preview",
      "projectModal.previousImage": "Previous Image",
      "projectModal.nextImage": "Next Image",
      "projectModal.selectImage": "Select Image",
      "projectModal.keyFeatures": "Key Features:",
      "projectModal.theChallenge": "The Challenge",
      "projectModal.theSolution": "The Solution",
      "projectModal.liveDemo": "Live Demo",
      "projectModal.source": "Source",
      "projectModal.closeModal": "Close Modal",

      // Volunteer Section
      "volunteer.sideQuests": "Side Quests",
      "volunteer.bonusContent": "Bonus Content",

      // Contact Section
      "contact.title": "Letters to the Editor",
      "contact.subtitle": "Have a project in mind? Drop a line!",
      "contact.yourName": "Your Name",
      "contact.namePlaceholder": "Charlie Brown",
      "contact.email": "Email",
      "contact.emailPlaceholder": "goodgrief@peanuts.com",
      "contact.message": "Message",
      "contact.messagePlaceholder": "Write something nice...",
      "contact.sendIt": "Send It",
      "contact.quote": "Life is like a website. You just have to keep refactoring until it works.",
      "contact.findMeElsewhere": "Find me elsewhere:",
      "contact.twitter": "Twitter",
      "contact.linkedin": "LinkedIn",
      "contact.mail": "Email",

      // Footer Section
      "footer.thanksForReading": "Thanks for reading!",
      "footer.designedWith": "Designed with ❤️ and ☕️. No copyrighted characters were harmed in the making of this site.",
      "footer.copyright": "© {{year}} Fatema A. Meem. All rights reserved.",
      "footer.backToTop": "Back to Top",
    },
  },
};
