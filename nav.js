/**
 * nav.js  —  Navigation automatique pour pages de cours / exercices / DS
 *
 * UTILISATION (ajouter à chaque page HTML) :
 *   Avant </body> : <script src="/nav.js"></script>
 *
 * Le script détecte automatiquement la page courante via le chemin URL,
 * puis injecte : fil d'Ariane, menu du chapitre, navigation ch. précédent/suivant,
 * bouton retour en haut.
 *
 * Structure attendue :
 *   /maths/seconde/ch01/lecon.html
 *   /physique-chimie/terminale-iccer/ch01/exercices.html
 *   /simulations/equations.html
 */
(function () {
  'use strict';

  /* ── Base de données des séries ────────────────────────────────────── */
  var SERIES = {

    /* Mathématiques — 2nde Pro MAMA */
    'maths/seconde': {
      summary:      'maths-2nde-mama.html',
      summaryLabel: '2nde Pro MAMA',
      subject:      'Mathématiques',
      types: { lecon: 'Cours', exercices: 'Exercices', ds: 'Devoir surveillé' },
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
        { id: '10', title: 'Aires et volumes' },
        { id: '11', title: 'Chapitre 11' },
        { id: '12', title: 'Chapitre 12' },
        { id: '13', title: 'Chapitre 13' },
        { id: '14', title: 'Chapitre 14' }
      ]
    },

    /* Mathématiques — Terminale Bac Pro (TICCER & TERA-TMA) */
    'maths/terminale': {
      summary:      'maths-term-iccer.html',
      summaryLabel: 'Terminale Bac Pro',
      subject:      'Mathématiques',
      types: { lecon: 'Cours', exercices: 'Exercices', ds: 'Devoir surveillé' },
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

    /* Physique-Chimie — 2nde Pro MAMA */
    'physique-chimie/seconde': {
      summary:      'pc-2nde-pro.html',
      summaryLabel: '2nde Pro MAMA',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours', exercices: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Sécurité en laboratoire et en atelier' },
        { id: '02', title: 'Grandeurs électriques et circuits' },
        { id: '03', title: 'Loi d\'Ohm et caractéristiques d\'un dipôle' },
        { id: '04', title: 'Signaux électriques alternatifs' },
        { id: '05', title: 'Mouvement et trajectoire' },
        { id: '06', title: 'Forces et équilibre' },
        { id: '07', title: 'Structure de la matière : atomes, ions et molécules' },
        { id: '08', title: 'Solutions chimiques et concentration' },
        { id: '09', title: 'Caractéristiques d\'un son' },
        { id: '10', title: 'Température et capteurs thermiques' },
        { id: '11', title: 'Transferts thermiques et équilibre thermique' },
        { id: '12', title: 'Changements d\'état et énergie thermique' },
        { id: '13', title: 'Réflexion, réfraction et signaux lumineux' },
        { id: '14', title: 'Lumière, couleurs et photodétecteurs' }
      ]
    },

    /* Physique-Chimie — Terminale ICCER */
    'physique-chimie/terminale-iccer': {
      summary:      'pc-term-iccer.html',
      summaryLabel: 'Terminale ICCER',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours', exercices: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Évaluer la puissance consommée' },
        { id: '02', title: 'Courant alternatif et courant continu' },
        { id: '03', title: 'Énergie mécanique et moteur électrique' },
        { id: '07', title: 'Rayonnement thermique et effet de serre' },
        { id: '08', title: 'Pression dans un fluide immobile' },
        { id: '09', title: 'Transport de masse par un fluide en mouvement' },
        { id: '10', title: 'Réaction d\'oxydoréduction et protection des métaux' },
        { id: '11', title: 'Propagation d\'un signal sonore' }
      ]
    },

    /* Physique-Chimie — Terminale ERA-MA */
    'physique-chimie/terminale-era': {
      summary:      'pc-term-erama.html',
      summaryLabel: 'Terminale ERA-MA',
      subject:      'Physique-Chimie',
      types: { lecon: 'Cours', exercices: 'Exercices', ds: 'Devoir surveillé' },
      chapters: [
        { id: '01', title: 'Transporter l\'énergie sous forme électrique' },
        { id: '02', title: 'Stocker l\'énergie — système électrochimique' },
        { id: '03', title: 'Rayonnement thermique et effet de serre' },
        { id: '04', title: 'Accélération et vitesse d\'un objet' },
        { id: '05', title: 'Oxydoréduction et protection des métaux' },
        { id: '06', title: 'Choisir une source lumineuse' },
        { id: '07', title: 'Transmettre l\'information' },
        { id: '08', title: 'Atténuer une onde sonore par transmission' }
      ]
    }
  };

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

  /* ── Détection du chemin courant ───────────────────────────────────── */
  var pathname = window.location.pathname;
  var parts    = pathname.split('/').filter(function (p) { return p !== ''; });

  if (!parts.length) return;

  /* Calcul du préfixe racine (ex : '../../../' depuis un chapitre depth 4) */
  var rootPrefix = parts.length > 1 ? '../'.repeat(parts.length - 1) : '';

  /* ── Helpers ───────────────────────────────────────────────────────── */
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function injectCss() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var j = 0; j < links.length; j++) {
      if (links[j].href && links[j].href.indexOf('nav.css') !== -1) return;
    }
    var cssLink  = document.createElement('link');
    cssLink.rel  = 'stylesheet';
    cssLink.href = rootPrefix + 'nav.css';
    document.head.appendChild(cssLink);
  }

  /* ── Cas 1 : page sommaire (à la racine) ───────────────────────────── */
  var filename = parts[parts.length - 1];
  if (SUMMARY_PAGES[filename]) {
    var info   = SUMMARY_PAGES[filename];
    var sumBC  = document.createElement('nav');
    sumBC.className = 'sn-breadcrumb';
    sumBC.setAttribute('aria-label', "Fil d'Ariane");
    sumBC.innerHTML =
      '<a href="' + rootPrefix + 'index.html">Accueil</a>' +
      '<span class="sn-sep">›</span>' +
      '<span class="sn-bc-current">' + esc(info.label) + '</span>';

    var wrap = document.querySelector('.container') ||
               document.querySelector('.c') ||
               document.body;
    wrap.insertBefore(sumBC, wrap.firstChild);
    injectCss();
    return;
  }

  /* ── Cas 2 : page chapitre ─────────────────────────────────────────── */
  /* Attendu : parts = ['matiere', 'niveau', 'chXX', 'type.html'] */
  if (parts.length < 4) return;

  var pageFile = parts[parts.length - 1];            /* lecon.html       */
  var chFolder = parts[parts.length - 2];            /* ch01             */
  var pageType = pageFile.replace('.html', '');       /* lecon            */
  var chId     = chFolder.replace('ch', '');          /* 01               */
  var serieKey = parts.slice(0, parts.length - 2).join('/'); /* maths/seconde */

  var serie = SERIES[serieKey];
  if (!serie) return;

  /* Vérifier que le type est valide */
  if (!serie.types[pageType]) return;

  /* Trouver le chapitre dans la liste */
  var chIndex = -1;
  for (var i = 0; i < serie.chapters.length; i++) {
    if (serie.chapters[i].id === chId) { chIndex = i; break; }
  }
  if (chIndex === -1) return;

  var chapter = serie.chapters[chIndex];

  function typeLabel(t) { return serie.types[t] || t; }

  /* ── Fil d'Ariane ──────────────────────────────────────────────────── */
  function buildBreadcrumb() {
    return [
      '<nav class="sn-breadcrumb" aria-label="Fil d\'Ariane">',
        '<a href="' + rootPrefix + 'index.html">Accueil</a>',
        '<span class="sn-sep">›</span>',
        '<a href="' + rootPrefix + serie.summary + '">' +
          esc(serie.subject) + ' — ' + esc(serie.summaryLabel) +
        '</a>',
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
      return '<a href="' + t + '.html" class="sn-tab' + active + '">' +
             esc(typeLabel(t)) + '</a>';
    }).join('');
    return '<div class="sn-ch-menu">' + tabs + '</div>';
  }

  /* ── Boutons Précédent / Sommaire / Suivant ─────────────────────────── */
  function buildChNav() {
    var prev = chIndex > 0 ? serie.chapters[chIndex - 1] : null;
    var next = chIndex < serie.chapters.length - 1 ? serie.chapters[chIndex + 1] : null;

    var prevBtn = prev
      ? '<a href="../ch' + prev.id + '/' + pageType + '.html" class="sn-btn sn-btn-prev" title="' + esc(prev.title) + '">' +
          '&#8592; Ch' + prev.id + ' — ' + esc(prev.title) +
        '</a>'
      : '<span class="sn-btn-disabled">&#8592; Premier chapitre</span>';

    var summaryBtn = '<a href="' + rootPrefix + serie.summary +
                    '" class="sn-btn sn-btn-summary">&#9783; Sommaire</a>';

    var nextBtn = next
      ? '<a href="../ch' + next.id + '/' + pageType + '.html" class="sn-btn sn-btn-next" title="' + esc(next.title) + '">' +
          'Ch' + next.id + ' — ' + esc(next.title) + ' &#8594;' +
        '</a>'
      : '<span class="sn-btn-disabled">Dernier chapitre &#8594;</span>';

    return '<div class="sn-ch-nav">' + prevBtn + summaryBtn + nextBtn + '</div>';
  }

  /* ── Bouton retour en haut ─────────────────────────────────────────── */
  function buildBackTop() {
    return '<a href="#" id="sn-back-top" class="sn-back-top" ' +
           'title="Retour en haut de la page" aria-label="Retour en haut">&#8679;</a>';
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

  /* ── Sommaire automatique (pages Cours uniquement) ─────────────────── */
  if (pageType === 'lecon') {
    var h2s = container.querySelectorAll('h2');
    if (h2s.length >= 3) {
      var tocItems = [];
      for (var k = 0; k < h2s.length; k++) {
        var h = h2s[k];
        if (!h.id) h.id = 'sn-sec-' + k;
        tocItems.push('<li><a href="#' + h.id + '">' + esc(h.textContent.trim()) + '</a></li>');
      }
      var tocEl = document.createElement('details');
      tocEl.className = 'sn-toc';
      tocEl.setAttribute('open', '');
      tocEl.innerHTML =
        '<summary class="sn-toc-title">&#9776;&nbsp; Sommaire</summary>' +
        '<ol class="sn-toc-list">' + tocItems.join('') + '</ol>';
      container.insertBefore(tocEl, topBlock.nextSibling);
    }
  }

  /* Masquer l'ancien lien "← Retour au sommaire" s'il existe */
  var oldBack = container.querySelector('.nb');
  if (oldBack) oldBack.style.display = 'none';

  /* Bloc inférieur */
  var footerBlock = document.createElement('div');
  footerBlock.className = 'sn-footer-block';
  footerBlock.innerHTML = buildChNav() +
    '<p style="text-align:center;margin-top:14px">' + buildBackTop() + '</p>';
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
