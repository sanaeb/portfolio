/**
 * Centralized translations for the portfolio.
 * Single source of truth for FR and EN content.
 *
 * Adding a new string: add the key in both `fr` and `en` (TS catches missing
 * keys via the `Dict = typeof fr` constraint).
 */

export type Lang = 'fr' | 'en'

/** Site-wide config that's not language-specific. */
export const siteConfig = {
  /** Production URL — used in sitemap, og:url, etc. Change to https://sanae.dev once the custom domain is wired. */
  url: 'https://sanae-portfolio.pages.dev',
  /** External links shown in header / hero. */
  linkedIn: 'https://www.linkedin.com/in/sanae-boutarfass-7186a14b',
  github: 'https://github.com/sanaeb',
  email: 'sanae.boutarfass@gmail.com',
  photo: '/photos/sanae.jpg',
  cvPath: {
    fr: '/cv/sanae-boutarfass-cv-fr.pdf',
    en: '/cv/sanae-boutarfass-cv-en.pdf',
  },
} as const

const fr = {
  meta: {
    siteTitle: 'Sanae Boutarfass — Développeuse Full Stack à Lyon',
    siteDescription:
      "10 ans d'expérience full stack — Java / Spring, React / TypeScript, Python. Architecture, back-end industriel, vision par ordinateur.",
    homeTitle: 'Sanae Boutarfass — Développeuse Full Stack à Lyon',
    experienceTitle: 'Expérience — Sanae Boutarfass',
    experienceDescription:
      "Parcours de Sanae Boutarfass — 10 ans d'expérience en développement web full-stack.",
    projectsTitle: 'Projets — Sanae Boutarfass',
    projectsDescription:
      'Projets personnels et professionnels — code, démos, articles techniques.',
    applyDeskTitle: 'ApplyDesk — Sanae Boutarfass',
    applyDeskDescription:
      "Back-office personnel de recherche d'emploi : scrapers, parsing CV LLM, suivi de candidatures, génération d'emails.",
    altForgeTitle: 'AltForge — Sanae Boutarfass',
    altForgeDescription:
      "Générateur d'alt-text par IA pour la conformité WCAG. Spring Boot + JPA + Postgres + React + Gemini, audit DB et rate-limiting, déployé en prod.",
    aboutTitle: 'À propos — Sanae Boutarfass',
  },
  nav: {
    home: 'Accueil',
    experience: 'Expérience',
    projects: 'Projets',
    articles: 'Articles',
    about: 'À propos',
  },
  langSwitcher: {
    frTitle: 'Français',
    frActiveLabel: 'Version française · sélectionnée',
    enTitle: 'English version',
    enActiveLabel: 'English version · selected',
    switchToFr: 'Passer en français',
    switchToEn: 'Switch to English',
  },
  status: {
    heroBadge: 'Disponible · CDI senior · Lyon ou remote',
    footerLine: 'Disponible pour un nouveau poste',
    footerDetails: 'Lyon ou remote France · CDI senior · équipe produit',
  },
  actions: {
    downloadCv: 'Télécharger mon CV',
    downloadCvShort: 'CV',
    github: 'GitHub',
  },
  footer: {
    contact: 'Contact',
    sendEmail: 'Envoyer un email',
    linkedIn: 'LinkedIn',
    location: 'Localisation',
    locationCity: 'Lyon, France',
    timezone: 'UTC+1',
    builtWith: 'Built with Astro · Tailwind · TypeScript',
  },
  home: {
    hero: {
      subtitleSenior: 'full stack senior',
      subtitleBefore: 'Développeuse',
      subtitleAfter: 'à Lyon.',
      subtitleStats: '10 ans · Java + Python + React.',
      cta: 'Voir mes projets',
    },
    trustBand: {
      eyebrow: 'Published in',
    },
    now: {
      eyebrow: 'Now · Mai 2026',
      title: "Où j'en suis.",
      description:
        "Building, shipped, recherche — un coup d'œil rapide à ce que je fais en ce moment.",
      cards: {
        building: {
          label: 'Building',
          icon: '›',
          title: 'ApplyDesk',
          description:
            "Back-office personnel de recherche d'emploi — LLM, scrapers, suivi candidatures.",
        },
        shipped: {
          label: 'Just shipped',
          icon: '✓',
          title: 'SLAM Mapping BO',
          titleSuffix: 'v1.0',
          description:
            'Visual SLAM indoor localization · livré avril 2026.',
        },
        currently: {
          label: 'Currently',
          icon: '✱',
          title: 'En recherche active',
          description:
            'CDI senior · Lyon ou remote France · équipe produit qui prend le code au sérieux.',
        },
      },
    },
    stats: [
      { value: '10', label: "années d'XP", sub: 'depuis 2015' },
      { value: '3', label: 'stacks', sub: 'Java · Python · React' },
      { value: '4', label: 'publications', sub: 'IEEE · EUVIP' },
      { value: '8 mois', label: 'SLAM Mapping BO', sub: 'de zéro à prod' },
    ],
    approach: {
      eyebrow: 'Approche',
      title: 'Comment je code.',
      cards: [
        {
          number: '01',
          title: 'Du back industriel à la prod',
          body: "Java/Spring sur des systèmes critiques, multi-datasource, transactions distribuées, batch. Python pour la data et la vision. Je code pour passer l'audit OWASP et tenir 5 ans.",
          icon: 'backend' as const,
        },
        {
          number: '02',
          title: 'Produit, pas juste tech',
          body: "Je conçois en pensant à l'utilisateur final — sur le produit accessibilité que je maintiens, ce sont des personnes malvoyantes qui dépendent du back-office pour naviguer. La qualité du code suit, pas l'inverse.",
          icon: 'product' as const,
        },
        {
          number: '03',
          title: 'Recherche + craft',
          body: "Background recherche (4 publis IEEE en vision par ordinateur). J'aime les patterns sophistiqués — SLAM, ponts inter-runtimes — autant que les bonnes API REST bien typées.",
          icon: 'research' as const,
        },
      ],
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Sélection récente.',
      description:
        'Side-projects et démos techniques. Le détail des projets professionnels est dans /experience.',
      cta: 'Tous les projets',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Parlons-en.',
      body: "Je cherche une équipe produit qui prend le code au sérieux. Lyon, ou remote France. Disponible pour un nouveau poste senior.",
      ctaEmail: 'Me contacter par email',
      ctaLinkedIn: 'LinkedIn',
    },
  },
  experience: {
    eyebrow: 'Parcours',
    title: '10 ans de développement.',
    description:
      "Du back-end industriel chez Okeenea à la vision par ordinateur en laboratoire — voici le détail des missions qui ont façonné mon expertise.",
    currentLabel: 'actuellement',
    items: [
      {
        company: 'Okeenea',
        role: 'Développeuse Full Stack',
        period: "Avril 2023 — Aujourd'hui",
        context:
          'Evelity — application mobile de guidage universel pour personnes en situation de handicap (Java / Spring)',
        url: 'https://www.okeenea.com/',
        initials: 'OK',
        gradient: 'violet' as const,
        current: true,
        highlights: [
          'Développement front + back du back-office Evelity (React/Vite + Spring Boot 3) — scalabilité, maintenabilité, compatibilité mobile.',
          'Architecture multi-datasource avec transactions distribuées, batch et messaging asynchrone.',
          'Industrialisation qualité : revues, tests automatisés, CI exigeante (couverture ≥ 80 %, TDD, SonarQube bloquant), déploiement GKE.',
          'Sécurité : audit OWASP traité, auth Keycloak / OAuth2 / OIDC / JWT durcie.',
          'Réduction progressive de la dette technique via refactorings ciblés, sans ralentir la livraison.',
        ],
        stack: [
          'Java 17',
          'Spring Boot 3',
          'PostgreSQL',
          'React 18',
          'TypeScript',
          'Redux Toolkit',
          'Keycloak',
          'GCP / GKE',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'Okeenea',
        role: 'Développeuse Full Stack',
        period: 'Septembre 2025 — Avril 2026',
        context:
          'Evelity Vision — système de localisation indoor par SLAM visuel, livré en production en avril 2026 (Python / SLAM)',
        url: 'https://www.okeenea.com/',
        initials: 'EV',
        gradient: 'cyan' as const,
        current: false,
        highlights: [
          'Conception et livraison from scratch en 8 mois — autonomie complète sur architecture, back, front et ops.',
          'Pipeline end-to-end : vidéo 360° → frames → Visual SLAM → géoréférencement GPS → export.',
          'Intégration de Stella VSLAM (moteur C++ open-source) côté backend Python via pont JNI.',
          'Implémentation du géoréférencement Sim(2) / Umeyama avec détection auto des niveaux de bâtiment.',
          "Back-office FastAPI async + front React / Zustand ; visualisation 2D MapLibre et 3D Three.js.",
        ],
        stack: [
          'Python 3.9',
          'FastAPI',
          'SQLAlchemy',
          'Stella VSLAM',
          'C++',
          'OpenCV 4',
          'JNI',
          'React 18',
          'Three.js',
          'MapLibre GL',
          'GKE',
        ],
      },
      {
        company: 'Arca Computing',
        role: 'Développeuse Full Stack',
        period: 'Mai 2022 — Mars 2023',
        context:
          "Missions ESN : plateforme de gestion de recherche d'emploi (Spring Boot + VueJS) et app SMS marketing (Spring Boot + Angular + MongoDB)",
        url: undefined,
        initials: 'AC',
        gradient: 'amber' as const,
        current: false,
        highlights: [
          "Développement d'une plateforme web pour aider les demandeurs d'emploi dans la gestion de leurs candidatures.",
          "Maintenance évolutive d'une app de traitement de bases de contacts pour campagnes SMS marketing.",
        ],
        stack: ['Java', 'Spring Boot', 'VueJS', 'Angular', 'MongoDB', 'Thymeleaf'],
      },
      {
        company: 'Université de Strasbourg',
        role: 'Enseignante contractuelle en informatique',
        period: 'Septembre 2020 — Mai 2022',
        context: undefined,
        url: undefined,
        initials: 'US',
        gradient: 'emerald' as const,
        current: false,
        highlights: [
          'Enseignement de la programmation en licence et master.',
          "Encadrement de projets étudiants et conception d'exercices pratiques.",
        ],
        stack: [],
      },
      {
        company: 'Laboratoire MIA — La Rochelle',
        role: "Ingénieure d'études en informatique",
        period: '2016 — 2020',
        context: 'Recherche appliquée en vision par ordinateur et deep learning',
        url: undefined,
        initials: 'MIA',
        gradient: 'slate' as const,
        current: false,
        highlights: [
          "Conception et entraînement de réseaux de neurones profonds pour traitement et analyse d'images (colorisation N&B/infrarouge/panchromatique, discrimination styles d'écriture, reconnaissance faciale).",
          "Acquisition et construction des bases de données d'images, évaluation et optimisation des hyperparamètres.",
          '4 publications IEEE / EUVIP entre 2018 et 2020.',
        ],
        stack: [
          'Python',
          'TensorFlow',
          'Keras',
          'OpenCV',
          'Pandas',
          'NumPy',
          'Scikit-Learn',
          'PyQt',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projets',
    title: 'Ce que je construis.',
    description:
      'Side-projects, démos techniques et articles. Les projets pro Okeenea (Evelity, Evelity Vision) sont décrits dans /experience.',
    applyDeskTagline:
      "Back-office personnel pour gérer ma recherche d'emploi de bout en bout — scrapers d'offres (France Travail, Adzuna, HelloWork), parsing CV via Gemini, suivi de candidatures, génération d'emails et prep d'entretiens.",
    homeApplyDeskTagline:
      "Back-office personnel pour gérer ma recherche d'emploi de bout en bout — scrapers d'offres, parsing CV via LLM, suivi de candidatures, génération d'emails.",
    altForgeTagline:
      "Générateur d'alt-text par IA pour la conformité WCAG. Upload une image, récupère un alt-text descriptif en FR ou EN en quelques secondes — pensé pour l'European Accessibility Act (juin 2025).",
  },
  applydesk: {
    backLink: 'projets',
    statusBadge: 'WIP · 2026',
    personalBadge: 'Personnel',
    tagline:
      "Back-office personnel pour gérer ma recherche d'emploi de A à Z — scrapers, parsing LLM, suivi de candidatures, génération d'emails, préparation d'entretiens.",
    problem: {
      eyebrow: 'Le problème',
      title: "Pourquoi j'ai construit ça",
      bodyBefore:
        "Quand on cherche un poste en parallèle d'un CDI, on jongle entre 5+ job boards, des CVs versionnés, des lettres de motivation à adapter, des entretiens à préparer et un suivi qui se perd dans une feuille Excel.",
      bodyHighlight:
        'ApplyDesk centralise tout ça dans une app où chaque étape est outillée.',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'Ce qui est intéressant techniquement',
      items: [
        {
          title: 'Parsing CV via Gemini structured output',
          body: "J'envoie le texte brut extrait via pypdf et je récupère un Pydantic model fully validé (experiences, formation, skills par catégorie, langues, publications). La détection est fiable même sur des CVs en colonnes.",
        },
        {
          title: 'Multi-langue FR / EN',
          body: "Chaque CV a une langue, les candidatures aussi. Un bouton « translate → EN » appelle Gemini pour générer une version anglaise idiomatique (action verbs : shipped, led, owned), avec édition manuelle possible bullet par bullet.",
        },
        {
          title: 'Génération LaTeX moderncv',
          body: "Export du CV en source LaTeX éditable directement dans l'app + compilation sur Overleaf en un clic (form POST avec textarea, parce qu'input strip les newlines — petit détail qui m'a coûté une heure).",
        },
        {
          title: "Scrapers d'offres",
          body: 'France Travail + Adzuna via API, HelloWork / Welcome to the Jungle en HTML scraping. Dédup intelligente (titre + entreprise + lieu) pour fusionner les doublons inter-sources.',
        },
        {
          title: 'Suivi candidatures + relances auto',
          body: "Tableau Kanban (envoyée → réponse → entretien → offre), banner « needs followup » quand une candidature dépasse le seuil de jours configuré.",
        },
        {
          title: 'Email de candidature généré + envoi SMTP',
          body: "Le LLM rédige un email tailored offer × profil, je peux éditer, puis l'app envoie via Gmail SMTP avec le CV en pièce jointe (dans la langue choisie).",
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Sous le capot',
    },
    status: {
      eyebrow: 'Statut actuel',
      title: 'Statut actuel',
      body: "Utilisé quotidiennement depuis avril 2026. Repo privé pour l'instant — je l'ouvrirai après ma recherche, une fois nettoyé des données perso.",
    },
  },
  altforge: {
    backLink: 'projets',
    statusBadge: 'Live · 2026',
    personalBadge: 'Personnel',
    tagline:
      "Générateur d'alt-text par IA pour la conformité WCAG. Single + batch synchrone + batch asynchrone (job polling), audit DB Postgres, rate-limiting par IP, stats agrégées. 4 onglets UI, 27 tests, deploy free-tier Render + Cloudflare Pages.",
    links: {
      demo: 'Démo live',
      repo: 'Code source',
    },
    problem: {
      eyebrow: 'Le problème',
      title: "Pourquoi j'ai construit ça",
      bodyBefore:
        "Depuis juin 2025, l'European Accessibility Act impose aux sites e-commerce, banques et services publics européens des images correctement décrites pour les lecteurs d'écran. La plupart des sites ont des milliers d'images legacy sans alt-text, et la rédaction manuelle ne passe pas à l'échelle.",
      bodyHighlight:
        "AltForge automatise la première passe en restant aligné avec les bonnes pratiques WCAG (pas de « image de », descriptif, concis), avec une couche d'audit et de rate-limiting prête pour de la production multi-tenant.",
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'Ce qui est intéressant techniquement',
      items: [
        {
          title: 'Audit DB Postgres avec interceptor chain',
          body: "Chaque appel à l'API est enregistré dans `request_audits` (Spring Data JPA + Flyway, IP hashée SHA-256, latence, status, langue, modèle). Un HandlerInterceptor mesure le temps de réponse côté serveur, le controller pose les métadonnées métier via request attributes — séparation claire entre cross-cutting et logique métier.",
        },
        {
          title: 'Rate-limiting par IP sans Redis',
          body: "Un deuxième interceptor compte les appels du même hash IP sur les 60 dernières minutes via la table d'audit, renvoie 429 + `Retry-After` au-dessus du seuil. Ordre des interceptors choisi pour que les 429 soient eux-mêmes audités (`error_code = rate_limited`). Activable par feature flag, fail-open si la DB tombe.",
        },
        {
          title: 'Pipeline async avec @Async + ThreadPoolTaskExecutor',
          body: "`POST /batch/async` retourne 202 + UUID immédiatement, un worker dédié (1 core / 2 max / queue 10) traite les images séquentiellement, met à jour `processed_images` après chaque appel Gemini. Le front polle `GET /api/jobs/{id}` toutes les 2s et anime une progress bar.",
        },
        {
          title: 'Multi-modal Gemini depuis Spring Boot, sans SDK',
          body: "RestClient typé Spring 6.1, image encodée en base64 `inline_data`, prompts système soigneusement écrits en FR et EN pour respecter les règles WCAG (interdire « image de / picture of », ~125 chars, décrire avant d'interpréter).",
        },
        {
          title: 'Stats agrégées en JPQL',
          body: "`GET /api/stats?hours=N` calcule total / success rate / avg latency + breakdowns par langue et endpoint via des derived queries Spring Data + JPQL `GROUP BY`. UI dédiée avec barres horizontales et sélecteur de fenêtre 24h / 7j / 30j.",
        },
        {
          title: 'Pyramide de tests sans Docker en CI',
          body: "27 tests JUnit 5 : `@DataJpaTest` sur H2 en mode PostgreSQL pour faire tourner les vraies migrations Flyway sur les queries du repository, `@WebMvcTest` + MockMvc avec @MockitoBean pour les controllers, unit tests pour les interceptors. Aucune dépendance Testcontainers.",
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Sous le capot',
    },
    status: {
      eyebrow: 'Statut actuel',
      title: 'Statut actuel',
      body: "v2.2 livré et live sur altforge.pages.dev — 4 onglets (single / batch / async / stats). Repo public sur GitHub. Reste v3 (auth + billing) si besoin d'en faire un vrai SaaS public.",
    },
  },
  about: {
    eyebrow: 'À propos',
    titleLine1: 'De la recherche en vision',
    titleLine2: 'au produit en prod.',
    subtitle:
      "10 ans à coder à l'intersection de la recherche, de l'industrie et du produit.",
    bioBefore1: "J'ai commencé en 2015 par la ",
    bioHighlight1: 'vision par ordinateur appliquée',
    bioAfter1:
      " et le deep learning au sein d'un labo de recherche à La Rochelle. Mes premières publications IEEE portaient sur la colorisation d'images N&B et la reconnaissance faciale en domaine visible+infrarouge.",
    bioP2:
      "Au bout de 4 ans, j'ai migré progressivement vers le développement web — d'abord par curiosité, puis parce que j'aime particulièrement le rythme produit : voir un design devenir un commit, devenir une feature utilisée par des vrais gens en quelques semaines.",
    bioP3Before: "Aujourd'hui je travaille chez ",
    bioP3LinkLabel: 'Okeenea',
    bioP3Middle: ' sur ',
    bioP3Highlight1: 'Evelity',
    bioP3Middle2:
      ', une application d\'accessibilité urbaine pour personnes malvoyantes / sourdes / à mobilité réduite, ainsi que sur ',
    bioP3Highlight2: 'Evelity Vision',
    bioP3After:
      ', un système de localisation indoor par SLAM visuel que j\'ai conçu et livré en 8 mois.',
    bioP4:
      "Côté technique, je suis aussi à l'aise sur du Java/Spring industriel que sur du Python data-heavy ou du C++ low-level. Côté front c'est React, TypeScript, Vite. J'aime le code testé, les revues constructives, les pipelines CI exigeants — pas par dogme, parce que ça fait gagner du temps sur la durée.",
    bioP5Before: 'En dehors du travail, je fais beaucoup de side-projects (cf. ',
    bioP5Link: '/projects',
    bioP5After:
      "), souvent comme prétexte à apprendre une techno nouvelle ou à automatiser un truc chiant.",
    formation: {
      eyebrow: 'Formation',
      title: 'Parcours académique',
      items: [
        {
          degree: 'Master Informatique — Images et Systèmes',
          institution: "Université d'Aix-Marseille",
          specialty: 'spécialité Imagerie Numérique',
          period: '2013–2015',
        },
        {
          degree: 'Licence Pro Systèmes Informatiques et Logiciels',
          institution: "IUT d'Arles",
          specialty: 'spécialité Imagerie Numérique',
          period: '2012–2013',
        },
        {
          degree: 'DUT Informatique',
          institution: 'École Supérieure de Technologie',
          specialty: 'spécialité Administration des Bases de Données',
          period: '2010–2012',
        },
      ],
    },
    publications: {
      eyebrow: 'Publications',
      title: 'Recherche académique',
      description:
        '4 papiers en vision par ordinateur publiés en conférences IEEE et EUVIP entre 2018 et 2020, en co-auteure avec Bernard Besserer.',
      items: [
        {
          title: 'Improving CNN-based colorization of B&W photographs',
          venue: 'IEEE IPAS',
          year: 2020,
        },
        {
          title: 'Colour palette as support for CNN colorization',
          venue: 'IEEE MCNA',
          year: 2020,
        },
        {
          title: 'Convolutional autoencoder for discriminating handwriting styles',
          venue: 'EUVIP',
          year: 2019,
        },
        {
          title: 'Using Visible+NIR information for CNN face recognition',
          venue: 'EUVIP',
          year: 2018,
        },
      ],
    },
  },
}

export type Dict = typeof fr

const en: Dict = {
  meta: {
    siteTitle: 'Sanae Boutarfass — Senior Full Stack Developer in Lyon',
    siteDescription:
      '10 years of full stack experience — Java / Spring, React / TypeScript, Python. Architecture, industrial back-end, computer vision.',
    homeTitle: 'Sanae Boutarfass — Senior Full Stack Developer in Lyon',
    experienceTitle: 'Experience — Sanae Boutarfass',
    experienceDescription:
      "Sanae Boutarfass's career path — 10 years of experience in full-stack web development.",
    projectsTitle: 'Projects — Sanae Boutarfass',
    projectsDescription:
      'Personal and professional projects — code, demos, technical articles.',
    applyDeskTitle: 'ApplyDesk — Sanae Boutarfass',
    applyDeskDescription:
      'Personal job-search back-office: scrapers, LLM CV parsing, application tracking, email generation.',
    altForgeTitle: 'AltForge — Sanae Boutarfass',
    altForgeDescription:
      'AI alt-text generator for WCAG compliance. Spring Boot + JPA + Postgres + React + Gemini, audit DB and rate limiting, deployed to production.',
    aboutTitle: 'About — Sanae Boutarfass',
  },
  nav: {
    home: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    articles: 'Articles',
    about: 'About',
  },
  langSwitcher: {
    frTitle: 'Version française',
    frActiveLabel: 'French version · selected',
    enTitle: 'English',
    enActiveLabel: 'English version · selected',
    switchToFr: 'Passer en français',
    switchToEn: 'Switch to English',
  },
  status: {
    heroBadge: 'Open to work · Senior · Lyon or remote France',
    footerLine: 'Open to new senior roles',
    footerDetails: 'Lyon or remote France · senior · product team',
  },
  actions: {
    downloadCv: 'Download my CV',
    downloadCvShort: 'CV',
    github: 'GitHub',
  },
  footer: {
    contact: 'Contact',
    sendEmail: 'Send an email',
    linkedIn: 'LinkedIn',
    location: 'Location',
    locationCity: 'Lyon, France',
    timezone: 'UTC+1',
    builtWith: 'Built with Astro · Tailwind · TypeScript',
  },
  home: {
    hero: {
      subtitleSenior: 'senior full stack developer',
      subtitleBefore: '',
      subtitleAfter: 'based in Lyon.',
      subtitleStats: '10 years · Java + Python + React.',
      cta: 'See my projects',
    },
    trustBand: {
      eyebrow: 'Published in',
    },
    now: {
      eyebrow: 'Now · May 2026',
      title: 'Where I am.',
      description:
        "Building, shipped, looking — a quick look at what I'm doing right now.",
      cards: {
        building: {
          label: 'Building',
          icon: '›',
          title: 'ApplyDesk',
          description:
            'Personal job-search back-office — LLM, scrapers, application tracking.',
        },
        shipped: {
          label: 'Just shipped',
          icon: '✓',
          title: 'SLAM Mapping BO',
          titleSuffix: 'v1.0',
          description:
            'Visual SLAM indoor localization · shipped April 2026.',
        },
        currently: {
          label: 'Currently',
          icon: '✱',
          title: 'Actively looking',
          description:
            'Senior role · Lyon or remote France · product team that takes code seriously.',
        },
      },
    },
    stats: [
      { value: '10', label: 'years of XP', sub: 'since 2015' },
      { value: '3', label: 'stacks', sub: 'Java · Python · React' },
      { value: '4', label: 'publications', sub: 'IEEE · EUVIP' },
      { value: '8 mo.', label: 'SLAM Mapping BO', sub: 'zero to prod' },
    ],
    approach: {
      eyebrow: 'Approach',
      title: 'How I code.',
      cards: [
        {
          number: '01',
          title: 'From industrial back-end to prod',
          body: 'Java/Spring on critical systems, multi-datasource, distributed transactions, batch. Python for data and computer vision. I write code that passes OWASP audits and lasts 5 years.',
          icon: 'backend' as const,
        },
        {
          number: '02',
          title: 'Product-minded, not just tech',
          body: "I design with the end user in mind — on the accessibility product I maintain, that's visually impaired people who depend on the back-office to navigate cities. Code quality follows from product goals, not the other way around.",
          icon: 'product' as const,
        },
        {
          number: '03',
          title: 'Research + craft',
          body: 'Research background (4 IEEE papers in computer vision). I enjoy sophisticated patterns — SLAM, cross-runtime bridges — as much as well-typed REST APIs.',
          icon: 'research' as const,
        },
      ],
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Recent selection.',
      description:
        'Side-projects and technical demos. Professional projects are detailed in /experience.',
      cta: 'All projects',
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk.",
      body: "I'm looking for a product team that takes code seriously. Lyon, or remote France. Open to a new senior role.",
      ctaEmail: 'Contact me by email',
      ctaLinkedIn: 'LinkedIn',
    },
  },
  experience: {
    eyebrow: 'Career',
    title: '10 years of engineering.',
    description:
      'From industrial back-end at Okeenea to computer vision research — here are the details of the projects that shaped my expertise.',
    currentLabel: 'current',
    items: [
      {
        company: 'Okeenea',
        role: 'Full Stack Developer',
        period: 'April 2023 — Present',
        context:
          'Evelity — universal mobile wayfinding app for people with disabilities (Java / Spring)',
        url: 'https://www.okeenea.com/',
        initials: 'OK',
        gradient: 'violet' as const,
        current: true,
        highlights: [
          'Shipped the Evelity back-office end-to-end (React/Vite + Spring Boot 3) — focused on scalability, maintainability and mobile compatibility.',
          'Designed a multi-datasource architecture with distributed transactions, batch jobs and async messaging.',
          'Drove quality engineering: code reviews, automated tests, strict CI (coverage ≥ 80%, TDD, SonarQube as a blocking gate), GKE deployment.',
          'Security: closed OWASP audit findings, hardened Keycloak / OAuth2 / OIDC / JWT auth.',
          'Steadily paid down technical debt through targeted refactors without slowing delivery.',
        ],
        stack: [
          'Java 17',
          'Spring Boot 3',
          'PostgreSQL',
          'React 18',
          'TypeScript',
          'Redux Toolkit',
          'Keycloak',
          'GCP / GKE',
          'GitLab CI/CD',
        ],
      },
      {
        company: 'Okeenea',
        role: 'Full Stack Developer',
        period: 'September 2025 — April 2026',
        context:
          'Evelity Vision — visual SLAM indoor localization system, shipped to production in April 2026 (Python / SLAM)',
        url: 'https://www.okeenea.com/',
        initials: 'EV',
        gradient: 'cyan' as const,
        current: false,
        highlights: [
          'Designed and shipped Evelity Vision from scratch in 8 months — full ownership of architecture, back, front and ops.',
          'End-to-end pipeline: 360° video → frames → Visual SLAM → GPS georeferencing → export.',
          'Integrated Stella VSLAM (open-source C++ engine) into a Python back-end via a JNI bridge.',
          'Implemented Sim(2) / Umeyama georeferencing with automatic building-floor detection.',
          'Async FastAPI back-office + React / Zustand front-end; 2D MapLibre and 3D Three.js visualization.',
        ],
        stack: [
          'Python 3.9',
          'FastAPI',
          'SQLAlchemy',
          'Stella VSLAM',
          'C++',
          'OpenCV 4',
          'JNI',
          'React 18',
          'Three.js',
          'MapLibre GL',
          'GKE',
        ],
      },
      {
        company: 'Arca Computing',
        role: 'Full Stack Developer',
        period: 'May 2022 — March 2023',
        context:
          'Consulting missions: job-search management platform (Spring Boot + VueJS) and SMS marketing app (Spring Boot + Angular + MongoDB)',
        url: undefined,
        initials: 'AC',
        gradient: 'amber' as const,
        current: false,
        highlights: [
          'Built a web platform to help job seekers manage their applications.',
          'Maintained and evolved an app for processing contact databases used in SMS marketing campaigns.',
        ],
        stack: ['Java', 'Spring Boot', 'VueJS', 'Angular', 'MongoDB', 'Thymeleaf'],
      },
      {
        company: 'University of Strasbourg',
        role: 'Adjunct Lecturer in Computer Science',
        period: 'September 2020 — May 2022',
        context: undefined,
        url: undefined,
        initials: 'US',
        gradient: 'emerald' as const,
        current: false,
        highlights: [
          "Taught programming at bachelor's and master's level.",
          'Supervised student projects and designed lab exercises.',
        ],
        stack: [],
      },
      {
        company: 'MIA Lab — La Rochelle',
        role: 'Research Engineer (Computer Science)',
        period: '2016 — 2020',
        context: 'Applied research in computer vision and deep learning',
        url: undefined,
        initials: 'MIA',
        gradient: 'slate' as const,
        current: false,
        highlights: [
          'Designed and trained deep neural networks for image processing and analysis (B&W / infrared / panchromatic colorization, handwriting-style discrimination, face recognition).',
          'Built image datasets, evaluated models and tuned hyperparameters.',
          '4 IEEE / EUVIP papers published between 2018 and 2020.',
        ],
        stack: [
          'Python',
          'TensorFlow',
          'Keras',
          'OpenCV',
          'Pandas',
          'NumPy',
          'Scikit-Learn',
          'PyQt',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    title: 'What I build.',
    description:
      'Side-projects, technical demos and articles. Okeenea products (Evelity, Evelity Vision) are described in /experience.',
    applyDeskTagline:
      "Personal job-search back-office to manage everything end-to-end — job scrapers (France Travail, Adzuna, HelloWork), LLM-powered CV parsing, application tracking, email generation and interview prep.",
    homeApplyDeskTagline:
      'Personal job-search back-office to manage everything end-to-end — job scrapers, LLM CV parsing, application tracking, email generation.',
    altForgeTagline:
      'AI-powered alt-text generator for WCAG compliance. Upload an image, get a clean descriptive alt-text in French or English within seconds — built ahead of the European Accessibility Act (June 2025).',
  },
  applydesk: {
    backLink: 'projects',
    statusBadge: 'WIP · 2026',
    personalBadge: 'Personal',
    tagline:
      'Personal job-search back-office to handle everything end-to-end — scrapers, LLM parsing, application tracking, email generation, interview prep.',
    problem: {
      eyebrow: 'The problem',
      title: 'Why I built this',
      bodyBefore:
        "When job-hunting alongside a full-time role, you juggle 5+ job boards, versioned CVs, cover letters to tailor, interviews to prep, and an application log that gets lost in a spreadsheet.",
      bodyHighlight:
        'ApplyDesk centralizes all of that in one app where every step is tooled.',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'What is technically interesting',
      items: [
        {
          title: 'CV parsing via Gemini structured output',
          body: 'I feed the raw text extracted via pypdf and get back a fully validated Pydantic model (experiences, education, skills by category, languages, publications). Detection holds up even on column-layout CVs.',
        },
        {
          title: 'Bilingual FR / EN',
          body: 'Each CV has a language, and so do applications. A "translate → EN" button calls Gemini to generate an idiomatic English version (action verbs: shipped, led, owned), with bullet-by-bullet manual editing.',
        },
        {
          title: 'moderncv LaTeX generation',
          body: 'CV exported as editable LaTeX source directly inside the app + one-click compilation on Overleaf (form POST with textarea, because input strips newlines — a small detail that cost me an hour).',
        },
        {
          title: 'Job-offer scrapers',
          body: 'France Travail + Adzuna via API, HelloWork / Welcome to the Jungle via HTML scraping. Smart dedup (title + company + location) merges duplicates across sources.',
        },
        {
          title: 'Application tracking + auto-followup',
          body: 'Kanban board (sent → response → interview → offer), with a "needs followup" banner when an application exceeds the configured day threshold.',
        },
        {
          title: 'LLM-generated cover email + SMTP send',
          body: "The LLM writes a tailored offer × profile email, I can edit, then the app sends via Gmail SMTP with the CV attached (in the chosen language).",
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Under the hood',
    },
    status: {
      eyebrow: 'Current status',
      title: 'Current status',
      body: "Used daily since April 2026. Private repo for now — I'll open-source it after my job search, once cleaned of personal data.",
    },
  },
  altforge: {
    backLink: 'projects',
    statusBadge: 'Live · 2026',
    personalBadge: 'Personal',
    tagline:
      'AI alt-text generator for WCAG compliance. Single + sync batch + async batch (job polling), Postgres audit DB, per-IP rate limiting, aggregated stats. 4-tab UI, 27 tests, free-tier deploy on Render + Cloudflare Pages.',
    links: {
      demo: 'Live demo',
      repo: 'Source code',
    },
    problem: {
      eyebrow: 'The problem',
      title: 'Why I built this',
      bodyBefore:
        "Since June 2025, the European Accessibility Act requires e-commerce sites, banks and public services to provide proper image descriptions for screen readers. Most sites have thousands of legacy images without alt-text, and manual writing simply doesn't scale.",
      bodyHighlight:
        'AltForge automates the first pass while staying aligned with WCAG best practices (no "image of", descriptive, concise), with an audit and rate-limiting layer ready for multi-tenant production use.',
    },
    highlights: {
      eyebrow: 'Highlights',
      title: 'What is technically interesting',
      items: [
        {
          title: 'Postgres audit DB with an interceptor chain',
          body: 'Every API call is recorded in `request_audits` (Spring Data JPA + Flyway, SHA-256 hashed IP, latency, status, language, model). A HandlerInterceptor measures server-side latency; the controller posts the business metadata via request attributes — clean separation between cross-cutting concerns and business logic.',
        },
        {
          title: 'Per-IP rate limiting without Redis',
          body: 'A second interceptor counts hits for the same IP hash over the last 60 minutes from the audit table, returns 429 + `Retry-After` past the threshold. Interceptor order is set so the 429 itself is audited (`error_code = rate_limited`). Feature-flagged, fails open if the DB is down.',
        },
        {
          title: 'Async pipeline with @Async + ThreadPoolTaskExecutor',
          body: '`POST /batch/async` returns 202 + UUID immediately; a dedicated worker (1 core / 2 max / queue 10) processes images sequentially, updating `processed_images` after each Gemini call. The frontend polls `GET /api/jobs/{id}` every 2s and animates a progress bar.',
        },
        {
          title: 'Multi-modal Gemini from Spring Boot, no SDK',
          body: 'Typed Spring 6.1 RestClient, image base64-encoded as `inline_data`, system prompts carefully written in FR and EN to enforce WCAG rules (forbid "image of / picture of", ~125 chars, describe before interpreting).',
        },
        {
          title: 'JPQL-driven aggregated stats',
          body: '`GET /api/stats?hours=N` computes total / success rate / avg latency + breakdowns per language and endpoint through Spring Data derived queries and JPQL `GROUP BY`. Dedicated UI with horizontal bars and a 24h / 7d / 30d window picker.',
        },
        {
          title: 'A test pyramid that runs without Docker in CI',
          body: '27 JUnit 5 tests: `@DataJpaTest` against H2 in PostgreSQL mode so the real Flyway migrations exercise the repository queries, `@WebMvcTest` + MockMvc with @MockitoBean for controllers, plain unit tests for interceptors. No Testcontainers dependency.',
        },
      ],
    },
    stack: {
      eyebrow: 'Stack',
      title: 'Under the hood',
    },
    status: {
      eyebrow: 'Current status',
      title: 'Current status',
      body: 'v2.2 shipped and live on altforge.pages.dev — 4 tabs (single / batch / async / stats). Public repo on GitHub. v3 (auth + billing) is the next step if I turn this into a real public SaaS.',
    },
  },
  about: {
    eyebrow: 'About',
    titleLine1: 'From vision research',
    titleLine2: 'to product in prod.',
    subtitle:
      '10 years of coding at the intersection of research, industry and product.',
    bioBefore1: 'I started in 2015 with ',
    bioHighlight1: 'applied computer vision',
    bioAfter1:
      ' and deep learning at a research lab in La Rochelle. My first IEEE papers were on B&W image colorization and face recognition in the visible+infrared domain.',
    bioP2:
      "After 4 years, I gradually moved to web development — first out of curiosity, then because I particularly enjoy the product rhythm: watching a design become a commit, become a feature used by real people in a matter of weeks.",
    bioP3Before: 'Today I work at ',
    bioP3LinkLabel: 'Okeenea',
    bioP3Middle: ' on ',
    bioP3Highlight1: 'Evelity',
    bioP3Middle2:
      ", an urban accessibility app for visually impaired / deaf / mobility-restricted users, as well as on ",
    bioP3Highlight2: 'Evelity Vision',
    bioP3After:
      ', a visual SLAM indoor localization system that I designed and shipped in 8 months.',
    bioP4:
      "Technically, I'm as comfortable with industrial Java/Spring as with data-heavy Python or low-level C++. On the front side it's React, TypeScript, Vite. I value tested code, constructive reviews, demanding CI pipelines — not as dogma, but because they save time over the long run.",
    bioP5Before: 'Outside work, I do a lot of side-projects (see ',
    bioP5Link: '/en/projects',
    bioP5After:
      '), often as an excuse to learn a new technology or automate something tedious.',
    formation: {
      eyebrow: 'Education',
      title: 'Academic path',
      items: [
        {
          degree: "Master's in Computer Science — Images and Systems",
          institution: 'Aix-Marseille University',
          specialty: 'specialty Digital Imaging',
          period: '2013–2015',
        },
        {
          degree: "Vocational Bachelor's in Computer and Software Systems",
          institution: 'IUT Arles',
          specialty: 'specialty Digital Imaging',
          period: '2012–2013',
        },
        {
          degree: 'Two-Year Technical Degree in Computer Science',
          institution: 'École Supérieure de Technologie',
          specialty: 'specialty Database Administration',
          period: '2010–2012',
        },
      ],
    },
    publications: {
      eyebrow: 'Publications',
      title: 'Academic research',
      description:
        '4 computer-vision papers published in IEEE and EUVIP conferences between 2018 and 2020, co-authored with Bernard Besserer.',
      items: [
        {
          title: 'Improving CNN-based colorization of B&W photographs',
          venue: 'IEEE IPAS',
          year: 2020,
        },
        {
          title: 'Colour palette as support for CNN colorization',
          venue: 'IEEE MCNA',
          year: 2020,
        },
        {
          title: 'Convolutional autoencoder for discriminating handwriting styles',
          venue: 'EUVIP',
          year: 2019,
        },
        {
          title: 'Using Visible+NIR information for CNN face recognition',
          venue: 'EUVIP',
          year: 2018,
        },
      ],
    },
  },
}

export const dicts: Record<Lang, Dict> = { fr, en }

export function getDict(lang: Lang): Dict {
  return dicts[lang]
}

/**
 * Map a current path to its counterpart in the other language.
 *   "/" + lang=fr   → "/en/"
 *   "/en/" + lang=en → "/"
 *   "/about" + lang=fr → "/en/about"
 *   "/en/projects/applydesk" + lang=en → "/projects/applydesk"
 */
export function alternateLangPath(path: string, currentLang: Lang): string {
  const clean = path.replace(/\/+$/, '') || '/'
  if (currentLang === 'fr') {
    // Going to EN: prefix with /en
    if (clean === '/') return '/en/'
    return '/en' + clean
  }
  // Going to FR: strip leading /en
  if (clean === '/en') return '/'
  if (clean.startsWith('/en/')) return clean.slice(3) || '/'
  return clean
}
