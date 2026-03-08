/**
 * nav.js  —  Navigation automatique pour pages de cours / exercices / DS
 *
 * UTILISATION (ajouter à chaque page HTML) :
 *   1. Dans <head>    : <link rel="stylesheet" href="nav.css">
 *   2. Avant </body>  : <script src="nav.js"></script>
 *
 * Le script détecte automatiquement la page courante (filename),
 * puis injecte : fil d'Ariane, menu du chapitre, navigation ch. précédent/suivant,
 * bouton retour en haut.
 *
 * Aucune modification de structure de fichiers requise.
 */
(function () {
  'use strict';

  /* ── Base de données des séries ────────────────────────────────────── */
  var SERIES = {

    /* Mathématiques — Terminale Bac Pro (TICCER & TERA-TMA) */
    't-ch': {
      summary:      'maths-term-iccer.html',
      summaryLabel: 'Terminale Bac Pro',
      subject:      'Mathématiques',
      types: { lecon: 'Cours', exos: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Statistiques à deux variables' },
        { id: '02', title: 'Probabilités' },
        { id: '03', title: 'Suites numériques' },
        { id: '04', title: 'Fonctions polynômes de degré 3' },
        { id: '05', title: 'Fonctions exponentielles et logarithme décimal' },
        { id: '06', title: 'Vecteurs' },
        { id: '07', title: 'Trigonométrie' },
        { id: '08', title: 'Calcul intégral' },
        { id: '09', title: 'Fonctions logarithme népérien et exponentielle' },
        { id: '10', title: 'Nombres complexes' },
        { id: '11', title: 'Produit scalaire' }
      ]
    },

    /* Mathématiques — 2nde Pro MAMA */
    'ch': {
      summary:      'maths-2nde-mama.html',
      summaryLabel: '2nde Pro MAMA',
      subject:      'Mathématiques',
      types: { lecon: 'Cours', exos: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Proportionnalité et pourcentages' },
        { id: '02', title: 'Statistiques à une variable' },
        { id: '03', title: 'Indicateurs statistiques' },
        { id: '04', title: 'Fluctuations et probabilités' },
        { id: '05', title: 'Résolution de problèmes du 1er degré' },
        { id: '06', title: 'Notion de fonction' },
        { id: '07', title: 'Fonction affine' },
        { id: '08', title: 'Fonctions de référence' },
        { id: '09', title: 'Géométrie dans le triangle' },
        { id: '10', title: 'Aires et volumes' }
      ]
    },

    /* Physique-Chimie — Terminale ICCER */
    'pc-t-ch': {
      summary:      'pc-term-iccer.html',
      summaryLabel: 'Terminale ICCER',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours', exos: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Évaluer la puissance consommée' },
        { id: '02', title: 'Courant alternatif et courant continu' },
        { id: '03', title: 'Énergie mécanique et moteur électrique' },
        { id: '07', title: 'Rayonnement thermique et effet de serre' },
        { id: '08', title: 'Pression dans un fluide immobile' },
        { id: '09', title: 'Transport de masse par un fluide en mouvement' },
        { id: '10', title: "Réaction d'oxydoréduction et protection des métaux" },
        { id: '11', title: "Propagation d'un signal sonore" }
      ]
    },

    /* Physique-Chimie — 2nde Pro MAMA */
    'pc2-ch': {
      summary:      'pc-2nde-pro.html',
      summaryLabel: '2nde Pro MAMA',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours', exos: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Mouvement rectiligne' },
        { id: '02', title: 'Mouvement circulaire' },
        { id: '03', "title": 'Équilibre d\'un solide' },
        { id: '04', title: 'Composition chimique d\'un liquide' },
        { id: '05', title: 'Acidité et pH' },
        { id: '06', title: 'Caractéristiques et transmission d\'un son' },
        { id: '07', title: 'Température et chaleur' },
        { id: '08', title: 'Réflexion et réfraction' },
        { id: '09', title: 'Composition de la lumière' },
        { id: '10', title: 'Éclairement et photocomposants' }
      ]
    },

    /* Physique-Chimie — Terminale ERA-MA */
    'pc-era-ch': {
      summary:      'pc-term-erama.html',
      summaryLabel: 'Terminale ERA-MA',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours' },
      chapters: [
        { id: '01', title: "Transporter l'énergie sous forme électrique" },
        { id: '02', title: "Stocker l'énergie — système électrochimique" },
        { id: '03', title: 'Rayonnement thermique et effet de serre' },
        { id: '04', title: "Accélération et vitesse d'un objet" },
        { id: '05', title: 'Oxydoréduction et protection des métaux' },
        { id: '06', title: 'Choisir une source lumineuse' },
        { id: '07', title: "Transmettre l'information" },
        { id: '08', title: 'Atténuer une onde sonore par transmission' }
      ]
    }
  };

  /* ── Fonction utilitaire : chargement de nav.css ───────────────────── */
  function injectCss() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var j = 0; j < links.length; j++) {
      if (links[j].href && links[j].href.indexOf('nav.css') !== -1) return;
    }
    var cssLink = document.createElement('link');
    cssLink.rel  = 'stylesheet';
    cssLink.href = 'nav.css';
    document.head.appendChild(cssLink);
  }

  /* ── Pages sommaires (affichage simple ← Accueil) ──────────────────── */
  var SUMMARY_PAGES = {
    'maths-2nde-mama.html':  { label: 'Mathématiques — 2nde Pro MAMA' },
    'maths-term-iccer.html': { label: 'Mathématiques — Terminale ICCER' },
    'maths-term-erama.html': { label: 'Mathématiques — Terminale ERA-MA' },
    'pc-2nde-pro.html':      { label: 'Physique-Chimie — 2nde Pro' },
    'pc-term-iccer.html':    { label: 'Physique-Chimie — Terminale ICCER' },
    'pc-term-erama.html':    { label: 'Physique-Chimie — Terminale ERA-MA' },
    'simulations.html':      { label: 'Simulations interactives' }
  };

  /* ── Détection du fichier courant ──────────────────────────────────── */
  var filename = (window.location.pathname.split('/').pop() || '').replace(/\?.*$/, '');
  if (!filename) return;

  /* Cas 1 : page sommaire → fil d'Ariane minimal */
  if (SUMMARY_PAGES[filename]) {
    var info = SUMMARY_PAGES[filename];
    var sumBC = document.createElement('nav');
    sumBC.className = 'sn-breadcrumb';
    sumBC.setAttribute('aria-label', "Fil d'Ariane");
    sumBC.innerHTML =
      '<a href="index.html">Accueil</a>' +
      '<span class="sn-sep">›</span>' +
      '<span class="sn-bc-current">' + esc(info.label) + '</span>';

    /* Injecter au début du conteneur */
    var wrap = document.querySelector('.container') ||
               document.querySelector('.c') ||
               document.body;
    wrap.insertBefore(sumBC, wrap.firstChild);

    /* Charger nav.css si absent */
    injectCss();
    return;
  }

  /* Cas 2 : page chapitre */
  /* Regex : (prefix)(numéro)_(type).html
     Exemples : t-ch05_lecon.html  |  pc-era-ch03_lecon.html  |  ch01_exos.html */
  var m = filename.match(/^(pc-era-ch|pc-t-ch|pc2-ch|t-ch|ch)(\d+)_(lecon|exos|ds)\.html$/);
  if (!m) return;

  var prefix   = m[1];
  var chId     = m[2];
  var pageType = m[3];
  var serie    = SERIES[prefix];
  if (!serie) return;

  var chIndex = -1;
  for (var i = 0; i < serie.chapters.length; i++) {
    if (serie.chapters[i].id === chId) { chIndex = i; break; }
  }
  if (chIndex === -1) return;

  var chapter = serie.chapters[chIndex];

  /* ── Helpers ───────────────────────────────────────────────────────── */
  function typeLabel(t) { return serie.types[t] || t; }

  function esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  /* ── Fil d'Ariane ──────────────────────────────────────────────────── */
  function buildBreadcrumb() {
    return [
      '<nav class="sn-breadcrumb" aria-label="Fil d\'Ariane">',
        '<a href="index.html">Accueil</a>',
        '<span class="sn-sep">›</span>',
        '<a href="' + serie.summary + '">' + esc(serie.subject) + ' — ' + esc(serie.summaryLabel) + '</a>',
        '<span class="sn-sep">›</span>',
        '<span>Ch' + chId + ' — ' + esc(chapter.title) + '</span>',
        '<span class="sn-sep">›</span>',
        '<span class="sn-bc-current">' + esc(typeLabel(pageType)) + '</span>',
      '</nav>'
    ].join('');
  }

  /* ── Menu du chapitre (onglets Cours / Exercices / DS) ─────────────── */
  function buildChMenu() {
    var tabs = Object.keys(serie.types).map(function (t) {
      var active = (t === pageType) ? ' sn-tab-active' : '';
      var url    = prefix + chId + '_' + t + '.html';
      return '<a href="' + url + '" class="sn-tab' + active + '">' + esc(typeLabel(t)) + '</a>';
    }).join('');
    return '<div class="sn-ch-menu">' + tabs + '</div>';
  }

  /* ── Boutons Précédent / Sommaire / Suivant ─────────────────────────── */
  function buildChNav() {
    var prev = chIndex > 0 ? serie.chapters[chIndex - 1] : null;
    var next = chIndex < serie.chapters.length - 1 ? serie.chapters[chIndex + 1] : null;

    var prevBtn = prev
      ? '<a href="' + prefix + prev.id + '_' + pageType + '.html" class="sn-btn sn-btn-prev" title="' + esc(prev.title) + '">' +
          '&#8592; Ch' + prev.id + ' — ' + esc(prev.title) +
        '</a>'
      : '<span class="sn-btn-disabled">&#8592; Premier chapitre</span>';

    var summaryBtn = '<a href="' + serie.summary + '" class="sn-btn sn-btn-summary">&#9783; Sommaire</a>';

    var nextBtn = next
      ? '<a href="' + prefix + next.id + '_' + pageType + '.html" class="sn-btn sn-btn-next" title="' + esc(next.title) + '">' +
          'Ch' + next.id + ' — ' + esc(next.title) + ' &#8594;' +
        '</a>'
      : '<span class="sn-btn-disabled">Dernier chapitre &#8594;</span>';

    return '<div class="sn-ch-nav">' + prevBtn + summaryBtn + nextBtn + '</div>';
  }

  /* ── Bouton retour en haut ─────────────────────────────────────────── */
  function buildBackTop() {
    return '<a href="#" id="sn-back-top" class="sn-back-top" title="Retour en haut de la page" aria-label="Retour en haut">&#8679;</a>';
  }

  /* ── Injection dans la page ────────────────────────────────────────── */
  var container = document.querySelector('.c') ||
                  document.querySelector('.container') ||
                  document.body;

  /* Bloc supérieur */
  var topBlock = document.createElement('div');
  topBlock.className = 'sn-top-block';
  topBlock.innerHTML = buildBreadcrumb() + buildChMenu() + buildChNav();
  container.insertBefore(topBlock, container.firstChild);

  /* Masquer l'ancien lien "← Retour au sommaire" s'il existe */
  var oldBack = container.querySelector('.nb');
  if (oldBack) oldBack.style.display = 'none';

  /* Bloc inférieur */
  var footerBlock = document.createElement('div');
  footerBlock.className = 'sn-footer-block';
  footerBlock.innerHTML = buildChNav() +
    '<p style="text-align:center;margin-top:14px">' + buildBackTop() + '</p>';
  /* On insère avant le dernier enfant si c'est </div> ou à la fin */
  container.appendChild(footerBlock);

  /* ── Comportement du bouton retour en haut ─────────────────────────── */
  var btn = document.getElementById('sn-back-top');
  if (btn) {
    window.addEventListener('scroll', function () {
      var show = window.scrollY > 400;
      btn.style.opacity       = show ? '1'    : '0';
      btn.style.pointerEvents = show ? 'auto' : 'none';
    }, { passive: true });
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Chargement de nav.css ─────────────────────────────────────────── */
  injectCss();

})();
