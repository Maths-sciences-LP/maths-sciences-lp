# CLAUDE.md — Site pédagogique Maths & Sciences LP

Espace pédagogique pour les classes de Bac Professionnel (Seconde et Terminale).
Ce fichier est lu automatiquement par Claude Code à chaque session.

---

## STRUCTURE DU DÉPÔT

```
/
├── styles.css                  ← Feuille de style partagée (NE PAS supprimer)
├── nav.js                      ← Navigation auto-générée (NE PAS modifier sans raison)
├── nav.css                     ← Styles de navigation
├── diff.js                     ← Toggle différenciation pédagogique (insertion/poursuite)
├── index.html                  ← Page d'accueil
├── maths/
│   ├── seconde/ch01..ch14/     ← lecon.html, exercices.html, ds.html
│   └── terminale/ch01..ch11/   ← lecon.html, exercices.html, ds.html
├── physique-chimie/
│   ├── seconde/ch01..ch14/
│   ├── terminale-iccer/ch01..ch11/
│   └── terminale-era/ch01..ch08/
├── simulations/                ← Pages interactives (Canvas/SVG/JS)
├── prompts/                    ← Prompts pédagogiques de référence
├── pdf/                        ← Programmes officiels Bac Pro
└── scripts/extract_css.py      ← Outil de maintenance CSS
```

---

## CLASSES CSS — RÈGLES IMPORTANTES

**`styles.css` est la feuille de style centrale.** Toutes les classes communes y sont définies.

Chaque page de cours utilise :
```html
<link rel="stylesheet" href="../../../styles.css">
<style>:root{--p:#0056b3;--p-bg:#ebf5ff;--p-border:#bee3f8}</style>
```

### Thèmes couleur par matière/niveau

| Dossier | `--p` | `--p-bg` | `--p-border` |
|---|---|---|---|
| `maths/seconde` | `#0056b3` | `#ebf5ff` | `#bee3f8` |
| `maths/terminale` | `#0969da` | `#dbeafe` | `#93c5fd` |
| `physique-chimie/seconde` | `#6f42c1` | `#f5f0ff` | `#c4b5fd` |
| `physique-chimie/terminale-iccer` | `#0969da` | `#dbeafe` | `#93c5fd` |
| `physique-chimie/terminale-era` | `#2da44e` | `#f0fff4` | `#86efac` + `--s:#0ea5e9` |

### Classes pédagogiques disponibles dans styles.css

| Classe | Usage |
|---|---|
| `.def` | Définition (fond bleu/couleur primaire) |
| `.prop` | Propriété (fond vert) |
| `.att` | Attention/erreur fréquente (fond rouge) |
| `.meth` | Méthode (fond orange) |
| `.retenir` | Encadré "À retenir" (bordure verte) |
| `.ex` | Exemple expliqué |
| `.exo` | Exercice |
| `.corr` | Correction cachée (display:none) |
| `.bc` | Bouton "Voir la correction" |
| `.label-def/prop/att/meth` | Badge de type de bloc |
| `.situation` | Situation professionnelle (fond violet pointillé) |
| `.objectifs` | Objectifs du chapitre |
| `.formule-box` / `.formula-box` | Encadré formule |
| `.niveau-header .niv1/2/3/4` | En-tête de niveau de difficulté |
| `.chart-wrap` | Conteneur graphique Chart.js |
| `.svg-wrap` | Conteneur SVG centré |
| `.anim-wrap` | Conteneur animation/Canvas |
| `.grid2` / `.deux-col` | Grille 2 colonnes |
| `.badge-green/blue/yellow/red` | Badges colorés |

**Ne jamais redéfinir ces classes dans un `<style>` inline** — elles sont déjà dans styles.css.
Seules les classes vraiment spécifiques à une page peuvent rester inline.

---

## CRÉATION D'UNE NOUVELLE PAGE

### Template HTML minimal

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Ch0X – Titre – Classe</title>
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<link rel="stylesheet" href="../../../styles.css">
<style>:root{--p:COULEUR;--p-bg:COULEUR-BG;--p-border:COULEUR-BORDER}</style>
</head>
<body>
<div class="c">
<a href="../../sommaire.html" class="nb">← Retour au sommaire</a>
<header>
  <h1>Chapitre X – Titre</h1>
  <p class="sous-titre">Niveau | Matière | Module</p>
</header>
<!-- contenu -->
</div>
<script src="../../../nav.js"></script>
</body>
</html>
```

### Chemin vers styles.css selon la profondeur
- Pages dans `subject/level/chNN/` → `../../../styles.css`
- Pages dans `simulations/` → `../styles.css`
- Pages à la racine → `styles.css`

---

## DIFFÉRENCIATION PÉDAGOGIQUE (Terminale)

Le système de différenciation permet d'adapter le contenu selon le profil de l'élève :
- **Insertion professionnelle** : exercices guidés, contextes 100% métier, calculs directs
- **Poursuite d'études** : exercices ouverts, problèmes à étapes, formalisme BTS

### Mise en place sur une page

1. Ajouter `<script src="../../../diff.js"></script>` avant `</body>` (après nav.js)
2. Tagger les blocs avec les classes CSS :

```html
<!-- Visible par tous (pas de classe diff) -->
<div class="exo">Exercice commun</div>

<!-- Seulement insertion professionnelle -->
<div class="exo diff-insert">
  <span class="tag-insert">Insertion pro</span>
  Exercice guidé, contexte métier...
</div>

<!-- Seulement poursuite d'études -->
<div class="exo diff-appro">
  <span class="tag-appro">Poursuite d'études</span>
  Exercice approfondi type BTS...
</div>

<!-- Encadré "Pour aller plus loin" dans les cours -->
<div class="plus-loin diff-appro">
  <strong>Pour aller plus loin</strong>
  Contenu complémentaire pour la poursuite d'études...
</div>
```

### Classes CSS disponibles

| Classe | Usage |
|---|---|
| `.diff-insert` | Bloc visible uniquement en mode Insertion |
| `.diff-appro` | Bloc visible uniquement en mode Poursuite |
| `.tag-insert` | Badge bleu "Insertion pro" |
| `.tag-appro` | Badge violet "Poursuite d'études" |
| `.plus-loin` | Encadré violet pour contenu complémentaire |

### Comportement
- Le toggle apparaît automatiquement si la page contient des blocs `.diff-insert` ou `.diff-appro`
- Le choix est mémorisé en `localStorage` (persistant entre les pages)
- Le bouton "Tout voir" affiche tous les blocs (mode prof)
- Sans `diff.js`, tous les blocs restent visibles (dégradation gracieuse)

---

## PROMPTS PÉDAGOGIQUES DE RÉFÉRENCE

Avant de générer du contenu, consulter les fichiers dans `/prompts/` :

| Fichier | Usage |
|---|---|
| `prompts/prompt-cours.md` | Structure d'une page de cours |
| `prompts/prompt-exercices.md` | Structure d'une page d'exercices |
| `prompts/prompt-filiere-2mama.md` | Contextes pro Seconde MAMA (menuiserie/agencement) |
| `prompts/prompt-filiere-era-ma.md` | Contextes pro Terminale ERA/MA (agencement/bois) |
| `prompts/prompt-filiere-ticcer.md` | Contextes pro Terminale ICCER (chauffage/énergie) |

### Règles contextes professionnels
- Ne jamais écrire "élève de MAMA/ICCER/ERA" — utiliser des noms de métiers réels
- Varier les contextes : pro + sport + science + quotidien + énergie
- Exemples : "Un technicien chauffagiste...", "Un menuisier agenceur..."

---

## PROGRAMMES OFFICIELS

Les PDF des programmes Bac Pro sont dans `/pdf/`.
Vérifier les notions avant de créer du contenu : respecter les capacités attendues et ne pas introduire de hors-programme.

---

## RÈGLES DE DÉVELOPPEMENT

1. **Ne jamais modifier `nav.js`** sans raison explicite — il gère toute la navigation
2. **Ne jamais redéfinir les classes de `styles.css`** dans les pages
3. **Respecter la structure des dossiers** : `subject/level/chNN/pagetype.html`
4. **Ajouter `<script src="../../../nav.js"></script>`** en fin de `<body>` sur toutes les pages de cours
5. **Chart.js** : `<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>` si graphiques
6. **MathJax** : inclure le script si la page contient des formules mathématiques

### Maintenance CSS
Si de nouvelles classes communes sont ajoutées à plusieurs pages, les centraliser dans `styles.css` et lancer `python3 scripts/extract_css.py` pour nettoyer les doublons.
