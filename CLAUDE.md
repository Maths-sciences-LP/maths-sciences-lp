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
├── diff.js                     ← Toggle différenciation pédagogique (socle/standard/appro)
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

### Philosophie

La différenciation s'applique **uniquement aux exercices (exercices.html) et aux DS (ds.html)**.
Les cours (lecon.html) restent **identiques pour tous** : le programme est le même, c'est le socle commun de savoir. La différenciation ne porte pas sur le savoir transmis mais sur le **niveau de pratique** :
- On ne simplifie pas le cours pour les élèves en difficulté — on leur donne un cours identique avec des exercices plus guidés.
- On n'ajoute pas de théorie supplémentaire pour les élèves en poursuite — on leur donne des exercices plus ouverts et formalisés.
- Ne jamais créer de « cours au rabais » : un élève socle doit avoir accès au même savoir pour pouvoir progresser.

### Les 3 niveaux

| Niveau | Profil cible | Contenu (exercices & DS) |
|---|---|---|
| **Socle** | Élèves en difficulté | Exercices très guidés, étape par étape, calculs amorcés, tableaux pré-remplis |
| **Standard** | Majorité de la classe | Exercices du programme, contextes pro variés, rédaction attendue |
| **Approfondissement** | Poursuite BTS/MC | Problèmes ouverts, mise en équation autonome, questions type BTS |

### Mise en place sur une page

1. Ajouter `<script src="../../../diff.js"></script>` avant `</body>` (après nav.js)
2. Tagger les blocs avec les classes CSS :

```html
<!-- Visible par tous (pas de classe diff) = tronc commun -->
<div class="exo">Exercice commun</div>

<!-- Seulement niveau Socle -->
<div class="exo diff-socle">
  <span class="tag-socle">Socle</span>
  Exercice très guidé, étape par étape...
</div>

<!-- Seulement niveau Standard -->
<div class="exo diff-standard">
  <span class="tag-standard">Standard</span>
  Exercice classique du programme...
</div>

<!-- Seulement niveau Approfondissement -->
<div class="exo diff-appro">
  <span class="tag-appro">Approfondissement</span>
  Exercice ouvert type BTS...
</div>
```

**Ne PAS utiliser diff.js ni les classes diff-* sur les pages lecon.html.**

### Classes CSS disponibles

| Classe | Usage |
|---|---|
| `.diff-socle` | Bloc visible uniquement en mode Socle |
| `.diff-standard` | Bloc visible uniquement en mode Standard |
| `.diff-appro` | Bloc visible uniquement en mode Approfondissement |
| `.tag-socle` | Badge vert "Socle" |
| `.tag-standard` | Badge bleu "Standard" |
| `.tag-appro` | Badge violet "Approfondissement" |

### Comportement
- Le toggle apparaît automatiquement si la page contient des blocs `.diff-socle`, `.diff-standard` ou `.diff-appro`
- Le choix est mémorisé en `localStorage` (persistant entre les pages)
- Le bouton "Tout voir" affiche tous les blocs (mode prof)
- Sans `diff.js`, tous les blocs restent visibles (dégradation gracieuse)

### Principes de rédaction par niveau
- **Socle** : consignes décomposées, calculs intermédiaires donnés, tableaux pré-remplis, contextes du quotidien
- **Standard** : consignes complètes, contextes professionnels variés, rédaction attendue
- **Approfondissement** : mise en équation autonome, problèmes à étapes, questions ouvertes, vocabulaire BTS

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

**RÈGLE ABSOLUE : Ne JAMAIS utiliser les sigles de filière (ICCER, ERA, MA, ERA-MA, MAMA) comme noms de métiers dans le contenu.**

Ces sigles sont des noms de formations scolaires, pas des métiers réels. Ils ne doivent apparaître que dans :
- les titres de pages (`<title>`, `<h1>`)
- les sous-titres identifiant la classe (`<p class="sous-titre">`)
- les liens de navigation (`← RETOUR SOMMAIRE`)
- les badges visuels (`<span class="ticcer-badge">`, `<span class="erama-badge">`)

**Interdit dans le contenu pédagogique :**
- ~~"Un technicien ICCER installe..."~~ → **"Un installateur thermique installe..."**
- ~~"Un technicien ERA-MA effectue..."~~ → **"Un menuisier agenceur effectue..."**
- ~~"Vous êtes technicien ERA-MA dans..."~~ → **"Vous êtes technicien d'agencement dans..."**
- ~~"Un technicien MAMA prépare un devis..."~~ → **"Un métreur prépare un devis..."**
- ~~"Contexte ERA-MA"~~ → **"Contexte professionnel"** ou **"Contexte menuiserie"**
- ~~"Application ERA-MA"~~ → **"Application en agencement"**
- ~~"Utilisations en ERA-MA"~~ → **"Utilisations en agencement"**
- ~~"Exemple ERA-MA"~~ → **"Exemple professionnel"**
- ~~"Lien ERA-MA"~~ → **"Application professionnelle"** ou **"Lien métier"**

**Métiers réels à utiliser :**

| Filière | Métiers à utiliser |
|---|---|
| ICCER | plombier chauffagiste, installateur thermique, technicien chauffagiste, technicien climatisation, technicien CVC, technicien de maintenance énergétique, installateur de pompes à chaleur, technicien en énergies renouvelables |
| ERA / MA | menuisier, menuisier agenceur, ébéniste, fabricant de meubles, installateur d'agencement, poseur de cuisines, artisan menuisier, aménageur d'intérieur, technicien d'agencement |
| MAMA (Seconde) | menuisier, métreur, artisan menuisier, fabricant de mobilier |

**Autres règles :**
- Varier les contextes : professionnel + sport + science + quotidien + énergie + santé + climat
- On peut aussi utiliser des métiers plus qualifiés : ingénieur thermicien, architecte d'intérieur, chef de chantier, conducteur de travaux, etc.

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
