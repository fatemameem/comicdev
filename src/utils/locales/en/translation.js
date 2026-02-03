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
      "education.details.brac":
        "Focus on Human-Computer Interaction & Web Technologies. Graduated Summa Cum Laude.",
      "education.degree.meng": "M.Engg. Information Systems Security",
      "education.school.concordia": "Concordia University",
      "education.details.concordia":
        "Intensive 12-week program covering React, Node.js, and Cloud Infrastructure.",

      // Experience
      "experience.role.frontend": "Frontend Developer",
      "experience.company.bevy": "Bevy Commerce",
      "experience.desc.bevy":
        "Leading the UI redesign initiative. Improved performance by 40% through code splitting and asset optimization. Mentoring junior developers.",
      "experience.role.webdev": "Web Developer (Volunteer)",
      "experience.company.technest": "TECHNEST Canada",
      "experience.desc.technest":
        "Built responsive websites for 20+ clients. Collaborated closely with designers to implement pixel-perfect animations.",

      // Additional Experience
      "additionalExperience.title": "Chapter 3: Additional Experience",
      "additionalExperience.role.customerService": "Customer Service Representative - Rogers & Fido",
      "additionalExperience.company.ioSolutions": "IO Solutions Inc",
      "additionalExperience.desc.ioSolutions":
        "Experienced Customer Service Representative capable of answering inquiries, assuring satisfaction, and fulfilling 100% performance targets with a proven track record of efficient communication, multitasking, and building client loyalty.",
      "additionalExperience.role.gradAmbassador": "Graduate Student Ambassador",
      "additionalExperience.company.gradStudies": "School of Graduate Studies, Concordia University",
      "additionalExperience.desc.gradAmbassador":
        "Represented the graduate student community and promoted academic programs while providing guidance and support to prospective and current graduate students.",
      "additionalExperience.role.examInvigilator": "Exam Invigilator",
      "additionalExperience.company.examOffice": "Office of Examinations, Concordia University",
      "additionalExperience.desc.examInvigilator":
        "Supervised academic examinations ensuring integrity and adherence to university policies while providing assistance to students during examination periods.",

      // =========================
      // PROJECTS
      // =========================

      "projects.bdgsa.title": "BDGSA Website Platform",
      "projects.bdgsa.problem":
        "Student organizations struggle to maintain dynamic websites without requiring constant developer involvement.",
      "projects.bdgsa.idea":
        "Create a scalable blog and content platform with role-based management and moderation workflows.",
      "projects.bdgsa.solution":
        "A full-stack Next.js platform with admin dashboards, JWT authentication, and moderated content submission workflows.",
      "projects.bdgsa.longDescription":
        "The BDGSA website platform provides a scalable and responsive content management system allowing student organizations to publish blogs and updates easily. It features REST APIs, admin authentication, role-based moderation workflows, and mobile-first UI design optimized for accessibility and scalability.",

      "projects.technest.title": "Tech-Nest Canada Platform",
      "projects.technest.problem":
        "Non-technical teams need to manage events and podcasts without developer dependency.",
      "projects.technest.idea":
        "Provide a dashboard-driven platform enabling non-developers to update site content through simple tools.",
      "projects.technest.solution":
        "A production Next.js + TypeScript platform integrated with Google Sheets and an admin dashboard for managing events, podcasts, and team data.",
      "projects.technest.longDescription":
        "Tech-Nest Canada is a live production platform supporting cybersecurity and AI ethics initiatives. It integrates Google Sheets-powered content management, real-time dashboard updates, caching optimizations, and global state management to deliver seamless user experiences and rapid content updates.",

      "projects.containerguard.title": "Container Guard",
      "projects.containerguard.problem":
        "Containerized applications are vulnerable to attacks due to weak configurations and improper isolation.",
      "projects.containerguard.idea":
        "Analyze and harden container environments by applying modern container security best practices.",
      "projects.containerguard.solution":
        "A security-focused implementation using Docker environments to test vulnerabilities and implement isolation, privilege controls, and attack defenses.",
      "projects.containerguard.longDescription":
        "Container Guard analyzes vulnerabilities within Docker containerized environments, implementing protections such as least privilege access, network isolation, and read-only filesystems. Security testing included SQL injection, SYN flood attacks, and XSS exploitation to demonstrate defense strategies and strengthen container deployments.",

      "projects.malwaredefense.title": "Malware Analysis & Defense Automation",
      "projects.malwaredefense.problem":
        "Legacy software systems remain vulnerable due to undetected vulnerabilities and outdated defenses.",
      "projects.malwaredefense.idea":
        "Automate malware vulnerability detection and strengthen defense mechanisms using reverse engineering tools.",
      "projects.malwaredefense.solution":
        "Reverse engineered executables with Ghidra and developed Python scripts to automate detection and mitigation of vulnerabilities.",
      "projects.malwaredefense.longDescription":
        "This project involved reverse engineering executables using Ghidra to identify security flaws such as hard-coded credentials and buffer overflows. Automated Python scripts were developed to improve vulnerability detection and defense implementations, improving legacy software resilience.",

      "projects.mealrecommender.title":
        "Emotion-Based Meal Recommendation System",
      "projects.mealrecommender.problem":
        "Traditional meal recommendation systems ignore emotional responses influencing food choices.",
      "projects.mealrecommender.idea":
        "Use EEG data to personalize meal recommendations based on emotional reactions.",
      "projects.mealrecommender.solution":
        "A machine learning system analyzing EEG signals and applying multiple ML algorithms to recommend meals aligned with emotional responses.",
      "projects.mealrecommender.longDescription":
        "The system analyzed EEG signals from participants to understand emotional reactions toward food and recommend meals accordingly. Multiple ML algorithms including Random Forest, KNN, SVM, and XGBoost were used to validate personalized meal recommendations.",

      "projects.dllinjection.title":
        "Malicious DLL Injection Detection using Ghidra",
      "projects.dllinjection.problem":
        "Malicious DLL injections allow attackers to execute unauthorized code within legitimate processes, making detection difficult in large binary datasets.",
      "projects.dllinjection.idea":
        "Use static code analysis techniques to automatically detect suspicious API calls and injection patterns within binaries.",
      "projects.dllinjection.solution":
        "A Ghidra-based static analysis framework enhanced with Python automation scripts to detect suspicious injection patterns and reduce false positives.",
      "projects.dllinjection.longDescription":
        "This project implemented a static analysis framework using Ghidra to detect malicious DLL injection attempts in compiled binaries. Python scripts automated the identification of suspicious API calls such as VirtualAllocEx and WriteProcessMemory. The system analyzed 39 binaries and achieved 97% detection accuracy with an F1-score of 0.89 while improving reliability through refined pattern matching and reduced false positives. The project strengthened expertise in reverse engineering workflows and automated malware analysis pipelines.",

      "projects.marvelhangman.title": "Marvel Hangman Game",
      "projects.marvelhangman.problem":
        "Classic word-guessing games are often generic and lack engaging themes for fans.",
      "projects.marvelhangman.idea":
        "Create a themed hangman game where players guess Marvel character names in a fun and interactive way.",
      "projects.marvelhangman.solution":
        "A browser-based hangman game built using Vanilla JavaScript, HTML, and CSS, allowing users to guess Marvel character names with interactive feedback.",
      "projects.marvelhangman.longDescription":
        "Marvel Hangman is a lightweight browser game where players guess the names of popular Marvel characters letter by letter before exhausting attempts. Built using Vanilla JavaScript, HTML, and CSS, the game provides responsive gameplay, dynamic word rendering, and interactive feedback to keep users engaged while showcasing core frontend development skills without relying on frameworks.",

      // =========================
      // FEATURES
      // =========================
      "features.characterNameGuessing":
        "Guess Marvel character names letter by letter",
      "features.dynamicWordRendering": "Dynamic word and letter rendering",
      "features.gameStateManagement":
        "Interactive game state management and feedback",
      "features.responsiveGameplay": "Responsive gameplay across devices",
      "features.vanillaJsImplementation":
        "Built purely with Vanilla JavaScript, HTML, and CSS",
      "features.roleBasedModeration":
        "Role-based content submission and moderation",
      "features.adminDashboard": "Admin dashboard with content management",
      "features.mobileResponsive": "Mobile-first responsive UI design",
      "features.restApiIntegration":
        "REST API powered dynamic content management",
      "features.dashboardRealtimeUpdates":
        "Dashboard updates reflected across site in real time",
      "features.googleSheetsIntegration":
        "Google Sheets powered content updates",
      "features.apiCaching":
        "API caching and memoization for performance improvement",
      "features.globalStateManagement":
        "Global state management across dashboard and public pages",

      "features.containerIsolation":
        "Container isolation and least privilege access",
      "features.attackSimulation":
        "Security testing against SQL injection, SYN flood, and XSS",
      "features.readOnlyFilesystem":
        "Read-only container filesystem protections",

      "features.reverseEngineering":
        "Executable reverse engineering using Ghidra",
      "features.vulnerabilityAutomation":
        "Automated vulnerability detection via Python scripts",
      "features.legacyDefense": "Defense enhancements for legacy systems",

      "features.eegAnalysis": "EEG signal processing for emotion analysis",
      "features.mlPrediction": "Machine learning based recommendation models",
      "features.personalizedSuggestions":
        "Emotion-driven personalized meal suggestions",

      "features.staticBinaryAnalysis": "Static binary analysis using Ghidra",
      "features.apiDetectionAutomation":
        "Automated detection of suspicious API calls via Python scripting",
      "features.patternMatchingEngine":
        "Precise pattern matching to reduce false positives",
      "features.datasetAnalysis": "Large-scale binary dataset analysis",
      "features.reverseEngineeringWorkflow":
        "Reverse engineering and malware analysis workflow automation",

      // Voluntary

      "voluntary.bdgsavp.role": "Vice President of Communications",
      "voluntary.bdgsavp.org": "Bangladesh Graduate Student Association, Concordia University",
      "voluntary.bdgsavp.desc":
        "Led communication initiatives and coordinated outreach activities to strengthen engagement among graduate students and promote association events and programs.",

      "voluntary.bracclubhr.role": "Assistant Director, Human Resources",
      "voluntary.bracclubhr.org": "BRAC University Computer Club",
      "voluntary.bracclubhr.desc":
        "Supported recruitment, member coordination, and internal operations while helping organize club activities and events for students interested in technology and computing.",

      "voluntary.bracadventureit.role": "Executive, IT",
      "voluntary.bracadventureit.org": "BRAC University Adventure Club",
      "voluntary.bracadventureit.desc":
        "Provided technical support and managed digital resources and communications to assist in organizing events and activities for club members.",

      // Additional
      "additional.speaking": "Public Speaking: TechConf 2023",
      "additional.writing": "Technical Writing: Medium Blog with 5k+ readers",
      "additional.design": "UI Design: Figma & Adobe XD proficiency",

      // Common
      "category.developer": "Developer",
      "category.security": "Security",
      "category.academic": "Academic Research",
      "period.jun2021Dec2021": "JUN 2021 - DEC 2021",
      "period.sep2024Present": "SEP 2024 - PRESENT",
      "period.2017-2021": "2017 - 2021",
      "period.2023-2024": "2023 - 2024",
      "period.2023-2025": "2023 - 2025",
      "period.2024Present": "2024 - PRESENT",

      // Hero Section
      "hero.welcomeMessage": "Hi there! Welcome to my portfolio.",
      "hero.mainTitle": "I Build",
      "hero.websites": "Websites",
      "hero.tellStories": "That Tell Stories.",
      "hero.subtitle":
        "Frontend Engineer specializing in React, creative interactions, and pixel-perfect UIs.",
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
      "projects.academicResearch": "Academic Research",
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
      "contact.quote":
        "Life is like a website. You just have to keep refactoring until it works.",
      "contact.findMeElsewhere": "Find me elsewhere:",
      "contact.twitter": "Twitter",
      "contact.linkedin": "LinkedIn",
      "contact.mail": "Email",
      "contact.messageSuccess": "Message Sent Successfully! 🎉",
      "contact.messageError": "Something went wrong! Please try again.",

      // Footer Section
      "footer.thanksForReading": "Thanks for reading!",
      "footer.designedWith":
        "Designed with ❤️ and ☕️. No copyrighted characters were harmed in the making of this site.",
      "footer.copyright": "© {{year}} Fatema A. Meem. All rights reserved.",
      "footer.backToTop": "Back to Top",
    },
  },
};
