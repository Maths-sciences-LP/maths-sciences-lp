/**
 * diff.js — Différenciation pédagogique (insertion pro / poursuite d'études)
 *
 * UTILISATION : ajouter avant </body> sur les pages différenciées :
 *   <script src="../../../diff.js"></script>
 *
 * Le script :
 *  1. Détecte si la page contient des blocs .diff-insert ou .diff-appro
 *  2. Si oui, injecte un toggle en haut du conteneur .c
 *  3. Mémorise le choix en localStorage (persistant entre les pages)
 *  4. Applique la classe body.mode-insert ou body.mode-appro
 *
 * Sans blocs différenciés, le script ne fait rien.
 */
(function () {
  'use strict';

  var KEY = 'diff-mode';
  var MODES = {
    insert: { label: 'Insertion professionnelle', cls: 'mode-insert' },
    appro:  { label: 'Poursuite d\u2019\u00e9tudes',    cls: 'mode-appro'  }
  };

  // Ne rien faire si aucun bloc différencié n'existe sur la page
  var hasInsert = document.querySelector('.diff-insert');
  var hasAppro  = document.querySelector('.diff-appro');
  if (!hasInsert && !hasAppro) return;

  // Mode sauvegardé ou "tous" par défaut (rien masqué)
  var saved = localStorage.getItem(KEY);
  if (saved && MODES[saved]) {
    applyMode(saved);
  }
  // Si pas de choix sauvegardé, tout reste visible (pas de classe sur body)

  // Créer le toggle
  var wrapper = document.createElement('div');
  wrapper.className = 'diff-toggle';

  var btnInsert = makeBtn('insert');
  var btnAppro  = makeBtn('appro');
  var btnAll    = document.createElement('button');
  btnAll.textContent = 'Tout voir';
  btnAll.addEventListener('click', function () { setMode(null); });

  wrapper.appendChild(btnInsert);
  wrapper.appendChild(btnAppro);
  wrapper.appendChild(btnAll);

  updateActive(saved);

  // Injecter après le header (ou en début de .c)
  var container = document.querySelector('.c');
  if (container) {
    var header = container.querySelector('header');
    if (header && header.nextSibling) {
      container.insertBefore(wrapper, header.nextSibling);
    } else {
      container.insertBefore(wrapper, container.firstChild);
    }
  }

  function makeBtn(mode) {
    var btn = document.createElement('button');
    btn.textContent = MODES[mode].label;
    btn.addEventListener('click', function () { setMode(mode); });
    return btn;
  }

  function setMode(mode) {
    if (mode) {
      localStorage.setItem(KEY, mode);
    } else {
      localStorage.removeItem(KEY);
    }
    applyMode(mode);
    updateActive(mode);
  }

  function applyMode(mode) {
    document.body.classList.remove(MODES.insert.cls, MODES.appro.cls);
    if (mode && MODES[mode]) {
      document.body.classList.add(MODES[mode].cls);
    }
  }

  function updateActive(mode) {
    btnInsert.classList.toggle('active', mode === 'insert');
    btnAppro.classList.toggle('active', mode === 'appro');
    btnAll.classList.toggle('active', !mode);
  }
})();
