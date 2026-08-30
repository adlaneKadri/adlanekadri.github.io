/* ==========================================================================
   Adlane Kadri — CV
   Language toggle (EN in the markup, FR applied from here), program modals,
   nav scroll-spy, print. No dependencies.
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------- French -- */
/* Keys match data-i18n attributes in index.html. English lives in the markup
   so the page still reads correctly with JavaScript disabled.               */

var FR = {
  skip: 'Aller au contenu',
  role_slug: 'ingenieur-donnees',
  role: 'Ingénieur Données',
  nav_exp: 'expérience',
  nav_edu: 'formation',
  nav_skills: 'compétences',
  nav_projects: 'projets',
  nav_more: 'plus',
  download: 'CV.PDF',
  present: 'aujourd’hui',
  program: 'Programme',
  coursework: 'Enseignements',
  view_prog: 'voir le programme',
  official: 'Page officielle de l’université',
  esc: 'Appuyez sur Échap pour fermer',
  algiers: 'Alger',
  demo: 'démo',

  bio: 'Sept années à concevoir et exploiter des plateformes de données de bout en bout — extraction web et automatisation à grande échelle, l’infrastructure cloud et on-premise en dessous, les bases de données au milieu, et les pipelines qui transforment tout cela en quelque chose d’exploitable par l’entreprise.',

  spec_loc: 'Localisation',
  spec_loc_v: 'Île-de-France, France',
  spec_cur: 'Actuellement',
  spec_stack: 'Stack principale',
  spec_contact: 'Contact',

  s_exp: 'Expérience',
  s_edu: 'Formation',
  s_skills: 'Compétences',
  s_projects: 'Projets et contributions',
  s_extra: 'Périscolaire',
  s_langs: 'Langues',
  s_os: 'Systèmes d’exploitation',
  s_interests: 'Centres d’intérêt',

  exp1_t: 'Ingénieur Données',
  exp1_sub: 'extraction massive d’open data · market intelligence RetailTech',
  exp1_d1: 'Conception, développement et maintenance de scrapers web sur plusieurs sites e-commerce concurrents du secteur du bricolage et de l’aménagement de la maison, en France et à l’international, en m’adaptant en continu aux protections anti-bot et aux évolutions des sites.',
  exp1_d2: 'Développement de robots d’automatisation qui extraient les données de plateformes partenaires via des sessions authentifiées et des exports de fichiers (CSV/Excel), puis les traitent et les chargent dans le pipeline.',
  exp1_d3: 'Gestion complète du parc de serveurs Linux — AWS EC2 et on-premise — exécutant les traitements de collecte planifiés (quotidiens, hebdomadaires et mensuels) sur des dizaines de projets.',
  exp1_d4: 'Administration complète de la couche AWS RDS : schéma, tables et vues, utilisateurs et privilèges, ainsi qu’une fenêtre de rétention glissante avec scripts de sauvegarde et de purge automatisés.',
  exp1_d5: 'Création des vues SQL sur lesquelles l’équipe BI s’appuie pour construire ses rapports, et exécution de requêtes de pré-validation sur MySQL pour détecter tôt les problèmes de qualité de données.',
  exp1_d6: 'Pilotage de la migration des pipelines historiques Hadoop / Spark / Scala — auparavant orchestrés et supervisés via Kylo — vers Microsoft Fabric : portage des traitements existants vers des notebooks Fabric, transfert des données de S3 vers le Lakehouse Fabric, et conception de nouveaux pipelines from scratch pour les projets suivants.',

  exp2_t: 'Intelligence artificielle — stage de fin de cycle',
  exp2_d: 'Développement d’une application de prédiction de l’apparition de liens dans un réseau de services web à l’aide de l’apprentissage supervisé.',
  exp3_t: 'Développement d’applications desktop — stage',
  exp3_d: 'Développement d’une application de gestion des investissements.',

  edu1_t: 'Master — Big Data',
  edu1_grade: 'diplômé avec 16/20',
  edu1_intern: 'Stage chez <b>Innoscape</b> — machine learning et big data.',
  edu2_t: 'Master — Exploration des données et décisionnel',
  edu2_intern: 'Stage chez <b>Innoscape</b> — machine learning et big data ; c’est là qu’a commencé mon parcours dans l’entreprise.',
  edu3_t: 'Master 1 — Systèmes informatiques intelligents (SII)',
  edu3_note: 'première année validée',
  edu4_t: 'Licence — Ingénierie des systèmes d’information et du logiciel',
  edu4_note: 'première année en tronc commun Mathématiques-Informatique',
  edu5_t: 'Baccalauréat scientifique — mention',
  edu5_sub: 'Lycée Chahid Si-Elhouasse, Algérie',

  sk_lang: 'Langages',
  sk_collect: 'Collecte et automatisation',
  sk_platform: 'Plateforme et infrastructure',
  sk_db: 'Bases de données',
  sk_ml: 'Data science et ML',
  sk_other: 'Autres',

  pr1_t: 'Internet des objets',
  pr1_d: 'Système de reconnaissance faciale et de notification pour un objet connecté — SmartDoor',
  pr2_t: 'Machine learning',
  pr2_a: 'Application de génération musicale aléatoire fondée sur des réseaux de neurones récurrents',
  pr2_b: 'Détection des défauts de paiement de clients par carte de crédit, en comparant plusieurs algorithmes d’apprentissage automatique',
  pr2_c: 'Implémentation et comparaison de trois algorithmes de réduction de dimensionnalité : ACP, factorisation matricielle non négative (NMF) et NMF projective',
  pr3_t: 'Optimisation et méta-heuristiques',
  pr3_d: 'Implémentation de l’optimisation par essaim d’abeilles pour résoudre le problème 3-SAT',
  pr4_t: 'Systèmes multi-agents',
  pr4_d: 'Système expert multi-agents en Java simulant un environnement de vente',
  pr5_t: 'Réseaux',
  pr5_d: 'Mise en œuvre de réseaux IP commutés et sécurisés.',

  ex1_t: 'Hackathon HackUPC, Barcelone',
  ex1_d: 'Développement d’un assistant à commande vocale pour générer des modèles imprimables en 3D.',
  ex2_t: 'Comic Con Djazaïr — concours de développement de jeux',
  ex2_d: 'Participation au concours de développement de jeux vidéo du Comic Con Djazaïr.',
  award_game: 'Prix du meilleur jeu',
  award_story: 'Prix du meilleur scénario',
  ex3_d: 'Développement d’un jeu sur le thème de la transmission à travers le temps',

  lang_ar: '<b>Arabe</b> — langue maternelle',
  lang_fr: '<b>Français</b> — bilingue',
  lang_en: '<b>Anglais</b> — technique (documentation et usage quotidien)',
  os_linux: 'poste de travail quotidien et administration serveur',

  i1: 'Contribution open source',
  i2: 'Logiciels libres et open source',
  i3: 'Bénévolat',
  i4: 'Engagement associatif',
  i5: 'Vie de club',
  i6: 'Sport',
  i7: 'Culture pop',

  foot_built: 'Développé de zéro — sans framework, sans traceurs.',

  /* Paris 8 — Master Big Data */
  p8_1: 'Fouille de données et word embedding',
  p8_2: 'Apprentissage automatique',
  p8_3: 'Bases de données réparties',
  p8_4: 'Algorithmes distribués pour le big data',
  p8_5: 'Indexation de données à grande échelle',
  p8_6: 'Modèles formels pour le big data',
  p8_7: 'Internet des objets et big data',
  p8_8: 'Sécurité informatique',
  p8_10: 'Séminaire de méthodologie de conception',
  p8_11: 'Projet de recherche et développement',
  p8_12: 'Séminaire numérique et conférences industrielles',
  p8_after: 'Complété par un stage de 5 à 6 mois en entreprise ou en laboratoire de recherche (700 heures), effectué chez Innoscape.',

  /* Sorbonne Paris Nord — EID2 */
  y1_core: 'Première année — tronc commun',
  y2_aasd: 'Deuxième année — apprentissage automatique et science des données',
  y2_idid: 'Deuxième année — ingénierie des données et informatique décisionnelle',
  electives: 'Options',
  eid_1: 'Fondements de la programmation',
  eid_2: 'Ingénierie des bases de données',
  eid_3: 'Structures de données avancées',
  eid_4: 'Compilation',
  eid_5: 'Programmation avancée Java',
  eid_6: 'Analyse exploratoire des données',
  eid_7: 'Méthodes matricielles pour le data mining',
  eid_8: 'Systèmes distribués',
  eid_9: 'Conduite et gestion de projet',
  eid_10: 'Apprentissage statistique',
  eid_11: 'Réseaux de neurones artificiels et apprentissage profond',
  eid_12: 'Science des données numériques',
  eid_13: 'Statistique exploratoire multidimensionnelle',
  eid_14: 'Bases de données avancées',
  eid_15: 'Data mining',
  eid_16: 'Data warehouse',
  eid_17: 'Informatique décisionnelle',
  eid_18: 'Apprentissage de représentations visuelles',
  eid_19: 'Traitement de données textuelles et text mining',
  eid_20: 'Analyse des réseaux sociaux',
  eid_21: 'Grilles et cloud computing',
  eid_22: 'Aide à la décision',
  eid_23: 'Flux de données et programmation',
  eid_after: 'Complété par un stage de fin d’études en entreprise ou en laboratoire (24 ECTS), effectué chez Innoscape.',

  /* USTHB — Master SII */
  sem1: 'Semestre 1',
  sem2: 'Semestre 2',
  sii_1: 'Algorithmique avancée et complexité',
  sii_2: 'Résolution de problèmes',
  sii_3: 'Compilation : génération de code et optimisation',
  sii_4: 'Systèmes d’exploitation',
  sii_5: 'Modélisation et évaluation des performances des systèmes',
  sii_6: 'Architecture et administration des réseaux',
  sii_7: 'Réseaux de neurones et apprentissage automatique',
  sii_8: 'Méta-heuristiques et algorithmes évolutionnaires',
  sii_9: 'Représentation des connaissances et raisonnement',
  sii_10: 'Technologie des agents',
  sii_11: 'Commerce électronique et services web',
  sii_12: 'Bases de données avancées',
  sii_13: 'Sécurité informatique',
  sii_after: 'Première année du master ; je n’ai pas poursuivi en deuxième année.',

  /* USTHB — Licence ISIL */
  isil_y1: 'Première année — tronc commun Mathématiques-Informatique',
  isil_y2: 'Deuxième année — spécialité ISIL',
  isil_y3: 'Troisième année — spécialité ISIL',
  isil_1: 'Algorithmique I',
  isil_2: 'Programmation et structures de données',
  isil_3: 'Codage et représentation de l’information',
  isil_4: 'Structure machine',
  isil_5: 'Programmation fonctionnelle',
  isil_6: 'Systèmes d’information I',
  isil_7: 'Architecture des ordinateurs',
  isil_8: 'Algorithmique et structures de données',
  isil_9: 'Bases de données I',
  isil_10: 'Génie logiciel I',
  isil_11: 'Systèmes d’exploitation',
  isil_12: 'Programmation orientée objet',
  isil_13: 'Théorie des graphes',
  isil_14: 'Analyse numérique',
  isil_15: 'Logique mathématique',
  isil_16: 'Probabilités et statistiques',
  isil_17: 'Bases de données II',
  isil_18: 'Génie logiciel II',
  isil_19: 'Systèmes d’information II',
  isil_20: 'Réseaux',
  isil_21: 'Compilation',
  isil_22: 'Management',
  isil_after: 'Complété par un projet de fin d’études réalisé en entreprise ou en laboratoire de recherche (20 crédits) — le mien portait sur la prédiction de liens, en collaboration USTHB / University of Michigan (voir Expérience).'
};

/* ------------------------------------------------------------- language -- */

var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));

// Snapshot the English already in the markup, so switching back is lossless.
var EN = Object.create(null);
nodes.forEach(function (el) {
  EN[el.getAttribute('data-i18n')] = el.innerHTML;
});

function applyLang(lang) {
  var dict = lang === 'fr' ? FR : EN;
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var val = dict[key];
    if (val === undefined && lang === 'fr') return; // no translation: keep English
    if (val !== undefined) el.innerHTML = val;
  });

  document.documentElement.lang = lang;
  document.title = lang === 'fr'
    ? 'Adlane Kadri — Ingénieur Données'
    : 'Adlane Kadri — Data Engineer';

  Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (b) {
    b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
  });

  try { localStorage.setItem('cv-lang', lang); } catch (e) { /* private mode */ }
}

Array.prototype.forEach.call(document.querySelectorAll('.lang button'), function (btn) {
  btn.addEventListener('click', function () {
    applyLang(btn.getAttribute('data-lang'));
  });
});

// Restore a previous choice, else follow the browser's preferred language.
(function initLang() {
  var saved = null;
  try { saved = localStorage.getItem('cv-lang'); } catch (e) { /* ignore */ }
  if (saved !== 'en' && saved !== 'fr') {
    saved = (navigator.language || 'en').toLowerCase().indexOf('fr') === 0 ? 'fr' : 'en';
  }
  if (saved === 'fr') applyLang('fr');
}());

/* --------------------------------------------------------------- modals -- */

var lastFocus = null;

function openModal(id) {
  var m = document.getElementById(id);
  if (!m) return;
  lastFocus = document.activeElement;
  m.setAttribute('open', '');
  document.body.classList.add('is-locked');
  var target = m.querySelector('.modal__x');
  if (target) target.focus();
}

function closeModal(m) {
  if (!m) return;
  m.removeAttribute('open');
  document.body.classList.remove('is-locked');
  if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  lastFocus = null;
}

function openModals() {
  return Array.prototype.slice.call(document.querySelectorAll('.modal[open]'));
}

document.addEventListener('click', function (e) {
  var opener = e.target.closest('[data-modal]');
  if (opener) {
    e.preventDefault();
    openModal(opener.getAttribute('data-modal'));
    return;
  }
  if (e.target.closest('[data-close]')) {
    closeModal(e.target.closest('.modal'));
  }
});

document.addEventListener('keydown', function (e) {
  var open = openModals()[0];
  if (!open) return;

  if (e.key === 'Escape') {
    closeModal(open);
    return;
  }

  // Keep tabbing inside the dialog while it is open.
  if (e.key !== 'Tab') return;
  var focusables = open.querySelectorAll('a[href], button:not([disabled])');
  if (!focusables.length) return;
  var first = focusables[0];
  var last = focusables[focusables.length - 1];

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});

/* ---------------------------------------------------------------- print -- */

var printBtn = document.getElementById('print-cv');
if (printBtn) {
  printBtn.addEventListener('click', function () {
    openModals().forEach(closeModal);
    window.print();
  });
}

/* ------------------------------------------------------------ scroll-spy -- */

var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
var sections = navLinks
  .map(function (a) { return document.querySelector(a.getAttribute('href')); })
  .filter(Boolean);

if (sections.length && 'IntersectionObserver' in window) {
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (a) {
        a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
      });
    });
  }, { rootMargin: '-25% 0px -70% 0px' });

  sections.forEach(function (s) { spy.observe(s); });
}

/* ----------------------------------------------------------------- misc -- */

var year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
