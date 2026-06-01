// Données de vocabulaire pour l'entraînement d'anglais - Manager SI
// Format: [français, anglais, [distracteurs plausibles...]]
const VOCABULARY_DATA = {
  mots: [
    ["Logiciel", "Software", ["Hardware", "Program", "Application"]],
    [
      "Cahier des charges",
      "Specifications",
      ["Requirements", "Guidelines", "Documentation"],
    ],
    ["Navigateur", "Browser", ["Search engine", "Explorer", "Surfer"]],
    [
      "Moteur de recherche",
      "Search engine",
      ["Browser", "Web crawler", "Search bar"],
    ],
    ["Programmation", "Programming", ["Coding", "Scripting", "Development"]],
    [
      "Nom de domaine",
      "Domain name",
      ["Domain server", "Host name", "Web address"],
    ],
    ["Compte", "Account", ["Profile", "Username", "Login"]],
    [
      "Créer un compte",
      "To sign up",
      ["To sign in", "To log in", "To register an account"],
    ],
    [
      "Définir un mot de passe",
      "To set a password",
      [
        "To create a password",
        "To reset a password",
        "To choose a password",
      ],
    ],
    ["Utilisateur", "User", ["Customer", "Client", "Visitor"]],
    ["Identifiant", "Username", ["User ID", "Login", "Account name"]],
    ["Bibliothèque", "Library", ["Framework", "Repository", "Toolbox"]],
    ["Cadre de travail", "Framework", ["Library", "Workspace", "Workframe"]],
    [
      "Environnement de développement",
      "Integrated development environment - IDE",
      [
        "Integrated developer environment - IDE",
        "Internal development environment - IDE",
        "Interactive development environment - IDE",
      ],
    ],
    ["Maintenance", "Maintenance", ["Support", "Upkeep", "Servicing"]],
    ["Sauvegarde", "Backup", ["Save", "Restore", "Archive"]],
    [
      "Base de données",
      "Database",
      ["Data flow", "Data storage", "Data warehouse"],
    ],
    ["Flux de données", "Data flow", ["Data stream", "Data pipe", "Data feed"]],
    [
      "Stockage de données",
      "Data storage",
      ["Data warehouse", "Data lake", "Data repository"],
    ],
    ["Pare-feu", "Firewall", ["Antivirus", "Firebreak", "Shield"]],
    ["Logiciel espion", "Spyware", ["Malware", "Adware", "Ransomware"]],
    ["Bande passante", "Bandwidth", ["Throughput", "Latency", "Frequency"]],
    [
      "Interface de programmation",
      "Application Programming Interface - API",
      [
        "Application Process Interface - API",
        "Application Programmable Interface - API",
        "Advanced Programming Interface - API",
      ],
    ],
    ["Balise", "Markup", ["Tag", "Marker", "Beacon"]],
    [
      "Langage binaire",
      "Binary language",
      ["Machine language", "Hexadecimal language", "Bitcode"],
    ],
    [
      "Système de gestion de contenu",
      "Content management system - CMS",
      [
        "Content Manager System - CMS",
        "Content Management Service - CMS",
        "Customer Management System - CMS",
      ],
    ],
    ["Serveur", "Server / Host", ["Client", "Cloud", "Node"]],
    [
      "Service d'hébergement",
      "Hosting service",
      ["Cloud service", "Server rental", "Web hosting"],
    ],
    [
      "Plan de site / Arborescence",
      "Sitemap",
      ["Site plan", "Site tree", "Site outline"],
    ],
    [
      "Site statique",
      "Static site",
      ["Frozen site", "Standard site", "Fixed site"],
    ],
    [
      "Site dynamique",
      "Dynamic site",
      ["Interactive site", "Animated site", "Reactive site"],
    ],
    [
      "Site animé",
      "Animated site",
      ["Dynamic site", "Interactive site", "Motion site"],
    ],
    ["Refonte", "Redesign", ["Rework", "Rebuild", "Renewal"]],
    [
      "Charte graphique",
      "Graphic charter",
      ["Style guide", "Brand book", "Design system"],
    ],
    ["Bannière", "Banner", ["Header", "Banner ad", "Slogan"]],
    ["Référencement", "Referencing", ["Indexing", "Linking", "Listing"]],
    [
      "Optimisation pour les moteurs de recherche",
      "Search Engine Optimization - SEO",
      [
        "Search Engine Operations - SEO",
        "Search Engine Order - SEO",
        "Search Engine Output - SEO",
      ],
    ],
    [
      "Référencement payant",
      "Search Engine Advertising - SEA",
      [
        "Search Engine Ads - SEA",
        "Search Engine Auction - SEA",
        "Search Engine Audit - SEA",
      ],
    ],
    [
      "Référencement abusif",
      "Spamdexing",
      ["Black hat SEO", "Keyword stuffing", "Cloaking"],
    ],
    [
      "Réseau Social",
      "Social Network",
      ["Social Media", "Social Platform", "Social Web"],
    ],
    [
      "Protocole de transfert de fichier",
      "File Transfer Protocol",
      [
        "File Sharing Protocol",
        "File Trade Protocol",
        "File Transport Protocol",
      ],
    ],
    [
      "Transfert de fichier",
      "File transfer",
      ["File sharing", "File copy", "File move"],
    ],
    [
      "Partage de fichier",
      "File sharing",
      ["File transfer", "File swap", "File exchange"],
    ],
    [
      "Télécharger",
      "To download/To upload",
      ["To send/To receive", "To save/To open", "To copy/To move"],
    ],
    [
      "Visite virtuelle",
      "Virtual visit",
      ["Virtual tour", "Virtual reality", "Online visit"],
    ],
    [
      "Objet interactif",
      "Interactive object",
      ["Active object", "Dynamic object", "Reactive object"],
    ],
    [
      "Interface utilisateur graphique",
      "Graphic user interface",
      [
        "Graphical user interaction",
        "Visual user interface",
        "Graphic user experience",
      ],
    ],
    [
      "Prototype d'interface utilisateur",
      "Mock-up",
      ["Wireframe", "Storyboard", "Sketch"],
    ],
    [
      "Expérience utilisateur",
      "User experience",
      ["User interface", "User journey", "User flow"],
    ],
    [
      "Maquette fonctionnelle d'un site",
      "Wireframe",
      ["Mock-up", "Sitemap", "Prototype"],
    ],
    ["Tableau", "Array", ["Table", "List", "Vector"]],
    [
      "Chaîne (de caractères)",
      "String",
      ["Char", "Sequence", "Text"],
    ],
    ["Boucle", "Loop", ["Iteration", "Cycle", "Repetition"]],
    [
      "Effectuer / Réaliser",
      "To perform",
      ["To do", "To execute", "To carry"],
    ],
    [
      "Traiter",
      "To process",
      ["To handle", "To treat", "To manage"],
    ],
    [
      "Jalons / Étape clé",
      "Milestone",
      ["Step", "Checkpoint", "Stepping stone"],
    ],
    ["Ainsi que / De même que", "As well as", ["As good as", "So as", "Such as"]],
    [
      "Impliqué",
      "Involved",
      ["Implied", "Implicated", "Concerned"],
    ],
    [
      "Réduire / Restreindre",
      "To narrow",
      ["To reduce", "To shrink", "To shorten"],
    ],
    [
      "Étendre / Développer",
      "To expand",
      ["To extend", "To enlarge", "To broaden"],
    ],
    [
      "Efficace",
      "Efficient",
      ["Effective", "Efficacious", "Effortless"],
    ],
    ["Fiable", "Reliable", ["Trustworthy", "Stable", "Dependable"]],
    [
      "Mener / Réaliser",
      "To conduct",
      ["To lead", "To run", "To direct"],
    ],
    [
      "Concevoir / Élaborer",
      "To design",
      ["To create", "To build", "To devise"],
    ],
    [
      "Pérennité",
      "Sustainability",
      ["Continuity", "Durability", "Longevity"],
    ],
    [
      "Respecter les délais",
      "To meet deadlines",
      [
        "To keep deadlines",
        "To respect deadlines",
        "To follow deadlines",
      ],
    ],
    [
      "Améliorer",
      "To improve",
      ["To enhance", "To upgrade", "To increase"],
    ],
    ["Défaut / Anomalie", "Defect", ["Flaw", "Bug", "Issue"]],
    [
      "Mettre en œuvre",
      "To implement",
      ["To set up", "To deploy", "To enforce"],
    ],
    [
      "Diriger / Mener",
      "To lead",
      ["To drive", "To manage", "To head"],
    ],
    [
      "Fonctionnalités / Caractéristiques",
      "Features",
      ["Functionalities", "Functions", "Capabilities"],
    ],
    [
      "Attentes",
      "Expectations",
      ["Hopes", "Wishes", "Demands"],
    ],
  ],
  expressions: [
    [
      "Déclarer une variable en langage java",
      "Declare a variable in java language",
      [
        "Define a variable in java language",
        "Initialize a variable in java language",
        "Set a variable in java language",
      ],
    ],
    [
      "Utiliser des tableaux pour stocker plusieurs valeurs dans une seule variable",
      "Use arrays to store multiple values in a single variable",
      [
        "Use lists to store multiple values in a single variable",
        "Use arrays to keep multiple values in a single variable",
        "Use arrays to store several values in a unique variable",
      ],
    ],
    [
      "Créer une chaîne en java",
      "Create a string in java",
      [
        "Build a string in java",
        "Make a string in java",
        "Set a string in java",
      ],
    ],
    [
      "Exécuter des boucles",
      "Execute loops",
      ["Run loops", "Perform loops", "Execute iterations"],
    ],
    [
      "Effectuer une opération d'entrée ou de sortie",
      "Perform an input or output operation",
      [
        "Execute an input or output operation",
        "Run an input or output operation",
        "Realize an input or output operation",
      ],
    ],
    [
      "Traiter une information représentée sous sa forme binaire",
      "Process a binary information",
      [
        "Handle a binary information",
        "Treat a binary information",
        "Manage a binary information",
      ],
    ],
    [
      "Comprendre les principaux livrables, les jalons, ainsi que les rôles et les responsabilités",
      "Understand the main deliverables, milestones, as well as the roles and responsibilities",
      [
        "Understand the main deliveries, milestones, as well as the roles and responsibilities",
        "Understand the principal deliverables, milestones, as well as the roles and responsibilities",
        "Understand the main deliverables, steps, as well as the roles and responsibilities",
      ],
    ],
    [
      "Utiliser les opérateurs booléens pour réduire, étendre ou affiner les résultats",
      "Use Boolean operators to narrow, expand, or refine search results",
      [
        "Use Boolean operators to reduce, extend, or refine search results",
        "Use logical operators to narrow, expand, or refine search results",
        "Use Boolean functions to narrow, expand, or refine search results",
      ],
    ],
    [
      "Créer une procédure stockée dans une base de données",
      "Create a stored procedure in a database",
      [
        "Build a stored procedure in a database",
        "Make a stored procedure in a database",
        "Create a saved procedure in a database",
      ],
    ],
    [
      "Utiliser les algorithmes les plus efficaces possibles pour résoudre des problèmes",
      "Use the most efficient algorithms possible to solve problems",
      [
        "Use the most effective algorithms possible to solve problems",
        "Use the most powerful algorithms possible to solve problems",
        "Use the best algorithms possible to solve problems",
      ],
    ],
    [
      "Développer des solutions logicielles fiables et fonctionnelles",
      "Develop reliable and functional software solutions",
      [
        "Develop trustworthy and functional software solutions",
        "Build reliable and functional software solutions",
        "Create reliable and operational software solutions",
      ],
    ],
    [
      "Se positionner comme expert technique",
      "Position oneself as a technical expert",
      [
        "Establish oneself as a technical expert",
        "Set oneself as a technical expert",
        "Be positioned as a technical expert",
      ],
    ],
    [
      "Gérer et optimiser la base de données",
      "Manage and optimize the database",
      [
        "Handle and optimize the database",
        "Maintain and optimize the database",
        "Manage and improve the database",
      ],
    ],
    [
      "Réaliser une étude logicielle",
      "Conduct a software study",
      [
        "Lead a software study",
        "Carry out a software study",
        "Run a software study",
      ],
    ],
    [
      "Concevoir l'architecture des applications",
      "Design application architecture",
      [
        "Build application architecture",
        "Develop application architecture",
        "Plan application architecture",
      ],
    ],
    [
      "Assurer la gestion des données",
      "Ensure data management",
      [
        "Provide data management",
        "Guarantee data management",
        "Maintain data management",
      ],
    ],
    [
      "Sécuriser les applications",
      "Secure applications",
      ["Protect applications", "Safeguard applications", "Defend applications"],
    ],
    [
      "Implémenter des solutions logicielles",
      "Implement software solutions",
      [
        "Set up software solutions",
        "Deploy software solutions",
        "Apply software solutions",
      ],
    ],
    [
      "Créer des programmes",
      "Build programs",
      ["Create programs", "Make programs", "Write programs"],
    ],
    [
      "Écrire et tester le code",
      "Write and test code",
      [
        "Code and test code",
        "Develop and test code",
        "Write and check code",
      ],
    ],
    [
      "Collaborer avec des développeurs",
      "Collaborate with developers",
      [
        "Work with developers",
        "Cooperate with developers",
        "Coordinate with developers",
      ],
    ],
    [
      "Utiliser des outils de développement",
      "Use development tools",
      ["Use developer tools", "Use coding tools", "Use programming tools"],
    ],
    [
      "Créer des applications ergonomiques",
      "Create ergonomic applications",
      [
        "Build ergonomic applications",
        "Develop ergonomic applications",
        "Design ergonomic applications",
      ],
    ],
    [
      "Ecouter, analyser et rédiger les besoins",
      "Listen, analyze and write needs",
      [
        "Listen, study and write needs",
        "Hear, analyze and write needs",
        "Listen, analyze and document needs",
      ],
    ],
    [
      "Être garant de la pérennité et de l'évolution des solutions",
      "To guarantee the sustainability and evolution of solutions",
      [
        "To ensure the sustainability and evolution of solutions",
        "To warrant the sustainability and evolution of solutions",
        "To guarantee the durability and evolution of solutions",
      ],
    ],
    [
      "Respecter les délais, les coûts et la qualité",
      "Meet deadlines, costs and quality",
      [
        "Respect deadlines, costs and quality",
        "Keep deadlines, costs and quality",
        "Match deadlines, costs and quality",
      ],
    ],
    [
      "Satisfaire les attentes du client",
      "Meet client expectations",
      [
        "Satisfy client expectations",
        "Match client expectations",
        "Fulfill client expectations",
      ],
    ],
    [
      "Piloter une projet d'ingénierie logicielle",
      "Lead a software engineering project",
      [
        "Manage a software engineering project",
        "Drive a software engineering project",
        "Conduct a software engineering project",
      ],
    ],
    [
      "Construire un cahier des charges",
      "Build specifications",
      ["Write specifications", "Create specifications", "Make specifications"],
    ],
    [
      "Gérer les données de l'entreprise",
      "Manage company data",
      [
        "Handle company data",
        "Maintain company data",
        "Administer company data",
      ],
    ],
    [
      "Développer des applications mobiles",
      "Develop mobile apps",
      [
        "Build mobile apps",
        "Create mobile apps",
        "Design mobile apps",
      ],
    ],
    [
      "Accompagner la stratégie de l'entreprise",
      "Support the company's strategy",
      [
        "Follow the company's strategy",
        "Back the company's strategy",
        "Assist the company's strategy",
      ],
    ],
    [
      "Suivre les principes et bonnes pratiques de développement",
      "Follow development principles and best practices",
      [
        "Apply development principles and best practices",
        "Respect development principles and best practices",
        "Follow programming principles and best practices",
      ],
    ],
    [
      "Analyser et identifier tous les problèmes potentiels",
      "Analyze and identify any potential problems",
      [
        "Analyze and find any potential problems",
        "Study and identify any potential problems",
        "Analyze and detect any potential problems",
      ],
    ],
    [
      "Améliorer et maintenir le logiciel à long terme",
      "Improve and maintain the software in the long term",
      [
        "Enhance and maintain the software in the long term",
        "Improve and keep the software in the long term",
        "Improve and maintain the software over the long term",
      ],
    ],
    [
      "Traduire le besoin du client en demandes fonctionnelles",
      "Translate the client's need into functional demands",
      [
        "Translate the client's need into functional requirements",
        "Convert the client's need into functional demands",
        "Translate the customer's need into functional demands",
      ],
    ],
    [
      "Analyser et décrire les tâches à réaliser par l'ordinateur",
      "Analyze and describe the tasks to be performed by the computer",
      [
        "Analyze and define the tasks to be performed by the computer",
        "Study and describe the tasks to be performed by the computer",
        "Analyze and describe the tasks to be executed by the computer",
      ],
    ],
    [
      "Déterminer et schématiser les fonctionnalités du logiciel",
      "Determine and schematize the software functionalities",
      [
        "Define and schematize the software functionalities",
        "Determine and diagram the software functionalities",
        "Determine and schematize the software features",
      ],
    ],
    [
      "Déceler les défauts de programmation",
      "Identify programming defects",
      [
        "Detect programming defects",
        "Find programming defects",
        "Spot programming defects",
      ],
    ],
    [
      "Effectuer des traitements par lot",
      "Perform batch processes",
      [
        "Execute batch processes",
        "Run batch processes",
        "Realize batch processes",
      ],
    ],
    [
      "Contrôler les évolutions et les différentes versions du logiciel",
      "Control developments and different versions of the software",
      [
        "Manage developments and different versions of the software",
        "Monitor developments and different versions of the software",
        "Check developments and different versions of the software",
      ],
    ],
    [
      "Maintenir en condition opérationnelle le logiciel",
      "Keep the software in operational condition",
      [
        "Maintain the software in operational condition",
        "Hold the software in operational condition",
        "Keep the software in working condition",
      ],
    ],
    [
      "Mettre en production à l'issue des phases de qualification",
      "Put into production at the end of the qualification and integration phases",
      [
        "Deploy into production at the end of the qualification and integration phases",
        "Release into production at the end of the qualification and integration phases",
        "Push into production at the end of the qualification and integration phases",
      ],
    ],
    [
      "Rédiger le code source qui constitue le corps du logiciel",
      "Write the source code that forms the body of the software",
      [
        "Write the source code that builds the body of the software",
        "Write the source code that makes up the body of the software",
        "Write the source code that creates the body of the software",
      ],
    ],
    [
      "Mettre en œuvre l'agilité au sein d'une équipe de développeurs",
      "Implement agility as part of a team of developers",
      [
        "Set up agility as part of a team of developers",
        "Apply agility as part of a team of developers",
        "Deploy agility as part of a team of developers",
      ],
    ],
    [
      "Diriger des projets collaboratifs",
      "Lead collaborative projects",
      [
        "Manage collaborative projects",
        "Drive collaborative projects",
        "Run collaborative projects",
      ],
    ],
    [
      "Vérifier que les fonctions correspondent aux attentes du client",
      "Make sure the features offered by the software are in line with the customer's expectations",
      [
        "Make sure the functions offered by the software are in line with the customer's expectations",
        "Verify the features offered by the software are in line with the customer's expectations",
        "Check the features offered by the software are in line with the customer's expectations",
      ],
    ],
    [
      "Définir les étapes clés de cycle de vie du projet",
      "Define key lifecycle milestones for the project",
      [
        "Set key lifecycle milestones for the project",
        "Identify key lifecycle milestones for the project",
        "Establish key lifecycle milestones for the project",
      ],
    ],
    [
      "Intégrer les environnements de développement",
      "Integrate development environments",
      [
        "Build development environments",
        "Set up development environments",
        "Configure development environments",
      ],
    ],
    [
      "Gérer les modifications apportées au code source",
      "Manage changes to source code",
      [
        "Handle changes to source code",
        "Track changes to source code",
        "Control changes to source code",
      ],
    ],
    [
      "Déployer le logiciel sur un serveur d'applications",
      "Deploy the software to an application server",
      [
        "Install the software on an application server",
        "Release the software to an application server",
        "Upload the software to an application server",
      ],
    ],
  ],
  definitions: [
    [
      "Technical debt",
      "This concept refers to the failure to comply with the design of software, intentional or not, which entails additional costs in the future.",
      ["Code smell", "Legacy code", "Refactoring"],
    ],
    [
      "Enterprise Resource Planning - ERP",
      "This information system is used to manage and follow all of a company's information and operational services on a daily basis.",
      [
        "Customer Relationship Management - CRM",
        "Business Intelligence - BI",
        "Supply Chain Management - SCM",
      ],
    ],
    [
      "Key success factor",
      "An essential consideration in addressing a market. Each company faces several of these elements that need to be mastered at the risk of not being competitive.",
      [
        "Critical performance indicator",
        "Strategic objective",
        "Competitive advantage",
      ],
    ],
    [
      "Unit testing",
      "A procedure to verify the proper functioning of a specific part of a software or portion of a program, also known as component testing.",
      ["Integration testing", "Functional testing", "Regression testing"],
    ],
    [
      "Error management",
      "This process brings together the various ways to protect the user from errors and allow them to correct them. The goal is to minimize interruptions due to errors.",
      ["Exception handling", "Bug tracking", "Issue management"],
    ],
    [
      "Version management",
      "This process involves managing all versions of one or more files.",
      ["Source control", "Change management", "Revision tracking"],
    ],
    [
      "Software pipelining",
      "A technique used by compilers to optimize loop execution.",
      ["Loop unrolling", "Parallel processing", "Pipeline processing"],
    ],
    [
      "Maintainability",
      "In the IT field, the ability for components or applications to be maintained, consistently and at a lower cost, in working order.",
      ["Scalability", "Reliability", "Usability"],
    ],
    [
      "Design pattern",
      "A characteristic module arrangement, recognized as good practice in response to a software design problem. It describes a standard solution that can be used in the design of different software.",
      ["Architecture pattern", "Software template", "Code structure"],
    ],
    [
      "Testing policy",
      "A high-level document outlining the organization's key principles, approaches and objectives regarding testing activity. This document describes why testing is done.",
      ["Test plan", "Test strategy", "Testing protocol"],
    ],
    [
      "Database query",
      "A questioning of a database. It may have a number of criteria for specifying the application. There are several query languages, which are specific to the structure of the databases.",
      ["SQL command", "Database request", "Data lookup"],
    ],
    [
      "Data visualization",
      "A set of graphical representation methods, in two or three dimensions, using color and frames or not. Computer resources allow complex sets of data to be represented in a simpler, educational and pedagogical way.",
      ["Data representation", "Data mapping", "Data presentation"],
    ],
    [
      "Microservices",
      "A software development technique, a variant of the architectural style of service-oriented architecture, which structures an application as a set of poorly coupled services.",
      [
        "Modular services",
        "Distributed services",
        "Service-oriented architecture",
      ],
    ],
    [
      "Platform as a service (Paas)",
      "A cloud service category that offers a processing platform and a software layer as a service.",
      [
        "Software as a service (SaaS)",
        "Infrastructure as a service (IaaS)",
        "Function as a service (FaaS)",
      ],
    ],
    [
      "Selection criteria",
      "Defining these elements allows you to select the most relevant criteria based on a goal to be achieved.",
      ["Decision criteria", "Evaluation criteria", "Choice parameters"],
    ],
    [
      "Software architecture",
      "This concept is designed with the needs of the future user of the application based on the study and the results of creating an element or functionality of the software that will suit the needs in question.",
      ["Software design", "System architecture", "Software structure"],
    ],
    [
      "Cloud computing",
      "Software or data hosted or launched on remote servers, accessible from anywhere on the internet.",
      ["Edge computing", "Distributed computing", "Remote computing"],
    ],
    [
      "Pentest",
      "An ethical hacking technique that tests the vulnerability of a computer system, application or website by detecting vulnerabilities that may be exploited by a hacker or malware.",
      ["Vulnerability scan", "Security audit", "White-hat hacking"],
    ],
    [
      "Security policy",
      "An action plan defined to preserve the integrity and sustainability of a social group.",
      ["Privacy policy", "Security plan", "Security protocol"],
    ],
    [
      "Roadmap",
      "This document generally proposes a list of means, the target or targets, principles to follow and values to be respected, the priority of tasks, and a timetable for achieving those goals.",
      ["Project plan", "Strategy map", "Timeline"],
    ],
    [
      "Arguing to convince",
      "This method supports an assertion using reasoning or evidence.",
      ["Persuading", "Reasoning", "Debating"],
    ],
    [
      "Setting up an audit tool",
      "The purpose of implementing this system is to identify and assess the risks (operational, financial, reputational in particular) associated with the IT activities of a company or administration.",
      ["IT audit", "Risk assessment", "Compliance check"],
    ],
    [
      "Development improvement",
      "An approach that aims to perfect the programs developed by offering innovative technical solutions.",
      [
        "Continuous improvement",
        "Software optimization",
        "Code refinement",
      ],
    ],
    [
      "Setting up a quality approach",
      "This methodology is all the actions carried out by a company to: improve quality management, offer better products, services to customers, and make employees evolve.",
      ["Quality assurance", "Quality control", "Quality management"],
    ],
    [
      "Matrix of choices",
      "A table that brings together all our choices as well as the different criteria to consider in order to decide between them. This matrix facilitates decision-making because it lets you know which is the best choice through a weighting system.",
      ["Decision matrix", "Comparison table", "Weighting matrix"],
    ],
  ],
};
