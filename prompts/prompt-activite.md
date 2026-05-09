# Prompt de référence — Activités de découverte (`activite.html`)

Guide de référence pour la création des pages `activite.html` dans chaque chapitre du site.

---

## Philosophie générale

### Rôle pédagogique

L'activité de découverte est une **situation-problème** : l'élève rencontre une situation professionnelle concrète et, en la questionnant pas à pas, **construit lui-même la notion** à partir de ses observations.

Ce n'est pas un cours — c'est l'antichambre du cours. L'activité précède `lecon.html` ou l'accompagne en parallèle.

| Page | Rôle | Durée | Quand l'utiliser |
|---|---|---|---|
| `activite.html` | **Faire découvrir** une notion par investigation | 25–40 min | Avant ou pendant la leçon |
| `lecon.html` | Transmettre le savoir formalisé | — | Après l'activité |
| `exercices.html` | S'entraîner | Variable | Après la leçon |
| `ds.html` | Évaluer | 1h | Fin de chapitre |

### Ce que l'activité n'est PAS

- **Pas un cours déguisé** : on ne donne pas la définition au départ
- **Pas un exercice d'application** : l'élève ne connaît pas encore la méthode
- **Pas un TP numérique** : pas d'expérience en laboratoire — c'est une activité documentaire ou graphique

### Principe de construction

**Toute activité est construite autour d'une problématique centrale.** Cette problématique donne du sens à l'ensemble des questions : chaque étape rapproche l'élève de la réponse, et la synthèse finale y répond explicitement.

La problématique peut être issue :
- d'une **situation professionnelle** (contexte métier)
- d'une **situation du quotidien**
- d'un **contexte scientifique ou technique**

Elle n'est pas systématiquement professionnelle, mais elle doit toujours être **concrète, contextualisée et porteuse de sens** pour l'élève.

L'activité suit la progression narrative suivante :

```
Contexte (situation d'accroche)
        ↓
Problématique (question centrale posée à l'élève)
        ↓
Questions de compréhension — APP (S'approprier)
        ↓
Questions d'analyse — ANA (Analyser)
        ↓
Questions de calcul / manipulation — REA (Réaliser)
        ↓
Questions d'interprétation — VAL (Valider)
        ↓
Synthèse — COM (Communiquer)
        ↓
Réponse explicite à la problématique + notion formalisée (À retenir)
```

---

## Cohérence activité ↔ problématique (OBLIGATOIRE)

### Exigence principale

Une activité est **valide uniquement si** :
1. La problématique est clairement posée dès le début
2. Chaque question contribue à y répondre
3. La synthèse finale répond **explicitement** à la problématique

**Interdictions :**
- Problématique décorative, posée mais jamais exploitée
- Suite de questions sans lien entre elles
- Questions hors sujet ou décoratives
- Synthèse qui n'apporte pas de réponse claire
- Calculs isolés sans interprétation

### Règles de cohérence

- Chaque question a un **rôle dans la progression** vers la réponse
- Les calculs servent une interprétation — pas l'inverse
- Si on supprime la problématique, l'activité doit perdre son sens (sinon elle n'en avait pas)

### Exigence sur la synthèse "À retenir"

L'encadré `.retenir` doit :
- Répondre explicitement à la problématique
- Reformuler la réponse de manière claire et accessible
- Faire apparaître la notion du chapitre comme **conséquence naturelle** du travail de l'élève

### Test de validation (obligatoire avant publication)

Avant de finaliser une activité, vérifier :

| Question | Réponse attendue |
|---|---|
| Peut-on répondre à la problématique uniquement avec les résultats obtenus ? | OUI |
| Si on supprime la problématique, l'activité perd-elle son sens ? | OUI |
| Toutes les questions sont-elles utiles pour répondre à la problématique ? | OUI |

Si la réponse est **NON** à l'une de ces questions, l'activité doit être corrigée.

---

## Nombre de questions

**Le nombre de questions est libre.** Il est déterminé par ce qu'il faut faire découvrir, pas par un quota.

- Une notion simple peut se découvrir en 4-5 questions
- Une notion complexe peut nécessiter 8-12 questions
- Des sous-questions (a, b, c) peuvent subdiviser une étape sans alourdir la progression

**Calibrage par type de question :**

| Type de question | Durée estimée |
|---|---|
| Lecture, extraction d'info, identification | 1–2 min |
| Calcul guidé, compléter un tableau | 3–5 min |
| Analyse, interprétation, rédaction | 5–8 min |
| Synthèse, "À retenir" | 3–5 min |

La **durée totale cible** est de 25 à 40 minutes. Elle est indiquée en haut de la page pour le professeur.

---

## Compétences (badges)

Les compétences du référentiel bac pro sont indiquées sur les **questions structurantes**, pas nécessairement sur toutes.

| Compétence | Abréviation | Couleur | Usage |
|---|---|---|---|
| S'approprier | `APP` | vert | Questions de lecture, compréhension du contexte |
| Analyser / Raisonner | `ANA` | bleu | Questions d'analyse, identification des relations |
| Réaliser | `REA` | orange | Calculs, constructions, manipulations |
| Valider | `VAL` | violet | Vérification, cohérence, interprétation |
| Communiquer | `COM` | rouge | Rédaction, synthèse, "À retenir" |

**Règle :** au minimum une compétence par grande étape travaillée. Les questions de pur calcul intermédiaire n'ont pas besoin de badge.

---

## Structure d'une activité

### 1. En-tête

- Titre de l'activité (contexte + notion)
- Sous-titre : niveau, matière, durée estimée
- Objectifs : "À l'issue de cette activité, tu sauras..."

### 2. Document d'accroche — Situation professionnelle

Le document peut être :
- Un texte de mise en situation (facture, rapport, fiche technique)
- Un tableau de données (mesures, relevés, tarifs)
- Un graphique à analyser
- Une photo ou un schéma légendé
- Un extrait de notice ou de devis

**Règles du document :**
- Ancré dans un métier réel (voir règles des filières dans CLAUDE.md)
- Contient toutes les données nécessaires pour répondre aux questions
- Suffisamment riche pour générer 4 à 12 questions
- Lisible : pas surchargé de données inutiles

**Figures dans le document d'accroche :** si le document est un graphique, un schéma ou un plan, il DOIT être fourni en SVG inline — ne jamais le décrire uniquement par du texte.

### 3. Questions progressives

Les questions sont numérotées (1, 2, 3...) avec des sous-questions si besoin (a, b, c).

Chaque question :
- Est auto-suffisante (ne dépend pas d'une réponse précédente non guidée)
- Utilise un verbe de consigne précis : *identifier, calculer, compléter, expliquer, déduire, conclure*
- Porte le badge de compétence quand c'est pertinent
- Dispose d'une correction cachée (bouton "Voir la correction")

### 4. Synthèse — "À retenir"

La dernière question (ou un encadré dédié) formalise la notion :
- L'élève rédige la définition ou la propriété à partir de ce qu'il a découvert
- Ou l'encadré `.retenir` est donné à compléter (blancs à remplir)
- Ou la synthèse est affichée directement (si l'activité précède immédiatement le cours)

---

## Format « manuel scolaire complet » (activités secondaires `activite-N-...html`)

Pour les activités **secondaires** d'un chapitre (nommées `activite-2-slug.html`, `activite-3-slug.html`, `activite-4-slug.html`), le format de référence est plus rigide que pour `activite.html`. Il s'agit d'un format unifié, imprimable, calibré pour 30 min de travail élève en classe.

### Caractéristiques obligatoires

| Élément | Spécification |
|---|---|
| **Timestamp** | `<p class="maj">Dernière mise à jour : J mois AAAA, format manuel scolaire</p>` dans le `<header>` |
| **Bouton imprimer** | `<button onclick="window.print()">🖨️ Imprimer cette activité</button>` après le header |
| **Badge SITUATION PRO** | `<span style="font-size:.55em;color:VAR;font-weight:600">SITUATION PRO</span>` dans le `<h1>` |
| **Sous-titre** | `Chapitre X — Titre | Niveau Bac Pro | Matière | ⏱ 30 min` |
| **Objectifs** | bloc `.objectifs` avec 3 items (verbes d'action : utiliser, calculer, comprendre…) |
| **Encart leçon** | `<p style="background:#fef3c7;border-left:3px solid #b45309">💡 Notions centrales : <a href="lecon.html">leçon</a> §X. [Formule centrale en MathJax]</p>` (PC uniquement, optionnel maths) |
| **Situation pro** | Persona réaliste **avec prénom et métier réel** (jamais de sigle filière). Filière : MAMA pour 2nde, ICCER/ERA-MA pour 1ère/Term, MIT/Ébéniste/SDG pour CAP |
| **Documents structurés** | Doc 1 = SVG inline (schéma/graphique), Doc 2 = données numériques (`<ul>` avec `<strong>`) |
| **Problématique** | Encadrée dans `<div class="objectifs" style="border-left:4px solid var(--p);background:var(--p-bg);padding:14px 18px;border-radius:0 8px 8px 0">` |
| **8 questions** | Réparties APP (1-2) + REA (2-3) + ANA (1-2) + VAL (1) + COM (1, badge **rouge**) |
| **Lignes-réponse imprimables** | `<ul class="lignes-reponse"><li></li>×5</ul>` après chaque question (5 lignes par défaut, 4 pour COM si rédaction longue) |
| **Bonus** | `<div class="bonus">` (encadré jaune `#fef3c7` avec `border-left:4px solid #f59e0b`) — 1 question d'extension avec correction |
| **À retenir** | `<div class="retenir">` avec 3-5 items synthèse + ref leçon finale : `<p><em>📚 Cette activité s'appuie sur §X (...) et §Y (...) de la leçon ChXX.</em></p>` |

### Style CSS inline obligatoire

```html
<style>:root{--p:COULEUR;--p-bg:COULEUR-BG;--p-border:COULEUR-BORDER}
.bonus{background:#fef3c7;border-left:4px solid #f59e0b;padding:14px 18px;border-radius:0 8px 8px 0;margin:16px 0}</style>
```

### Badges compétences (rappel pour ce format)

- APP : `<span class="badge-green">APP</span>`
- REA : `<span class="badge-yellow">REA</span>`
- ANA : `<span class="badge-blue">ANA</span>`
- VAL : `<span class="badge-blue">VAL</span>` ou `<span class="badge-green">VAL</span>`
- COM : `<span class="badge-red">COM</span>` (toujours rouge dans ce format)

### Checklist spécifique « format manuel scolaire »

- [ ] Timestamp `class="maj"` présent dans le `<header>`
- [ ] Bouton imprimer après le header
- [ ] Badge SITUATION PRO dans `<h1>`
- [ ] Persona avec prénom + métier réel (pas de sigle filière)
- [ ] Documents 1 et 2 séparés (SVG + données)
- [ ] Problématique dans un encadré couleur primaire
- [ ] **Exactement 8 questions** numérotées de 1 à 8
- [ ] **Lignes-réponse imprimables** sous chaque question (`<ul class="lignes-reponse">`)
- [ ] Section bonus avec encadré jaune `.bonus`
- [ ] Ref leçon `📚 §X de la leçon ChXX` à la fin du À retenir
- [ ] Badge COM en rouge (`badge-red`)
- [ ] Aucune balise malformée `<li</li>` (vérifier avec `grep '<li</li>'`)

---

## Différenciation pédagogique

L'activité est en général **une base commune** (pas de différenciation par défaut).

Si la différenciation est activée :
- **Socle** : des aides sont intégrées dans les questions (rappels, calculs amorcés)
- **Standard** : les questions sont données sans aide supplémentaire
- **Approfondissement** : questions bonus à la fin (au-delà de la notion cible)

Utiliser les classes `.diff-socle`, `.diff-standard`, `.diff-appro` et `diff.js` (voir CLAUDE.md).

---

## Spécifications techniques

### Template `activite.html`

```html
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>ChXX – Activité – Titre – Classe</title>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
<link rel="stylesheet" href="../../../styles.css">
<link rel="stylesheet" href="../../../print.css" media="print">
<style>:root{--p:COULEUR;--p-bg:COULEUR-BG;--p-border:COULEUR-BORDER}</style>
</head>
<body>
<div class="c">
<a href="../../sommaire.html" class="nb">← Retour au sommaire</a>
<header>
  <h1>Activité – Titre de la notion</h1>
  <p class="sous-titre">Chapitre X | Niveau | Matière | ⏱ 30 min</p>
</header>

<div class="objectifs">
  <strong>Objectifs :</strong>
  <ul>
    <li>Découvrir [notion 1]</li>
    <li>Comprendre [notion 2]</li>
  </ul>
</div>

<!-- DOCUMENT D'ACCROCHE -->
<div class="situation">
  <h2>Situation</h2>
  <p><em>Contexte : [métier réel ou quotidien ou scientifique], [entreprise/lieu fictif].</em></p>
  <!-- Tableau, texte, données, schéma SVG... -->
</div>

<!-- PROBLÉMATIQUE -->
<div class="objectifs" style="border-left:4px solid var(--p);background:var(--p-bg);padding:12px 16px;margin:16px 0">
  <strong>Problématique :</strong>
  <p style="margin:6px 0 0;font-style:italic">[Question centrale à laquelle l'activité va répondre — concrète, contextualisée]</p>
</div>

<!-- QUESTIONS -->
<div class="exo">
<h2>Question 1 <span class="badge-blue">APP</span></h2>
<p>Consigne...</p>
<button class="bc" onclick="this.nextElementSibling.style.display='block'">Voir la correction</button>
<div class="corr">Correction...</div>
</div>

<div class="exo">
<h2>Question 2 <span class="badge-blue">ANA</span></h2>
<p>Consigne...</p>
<button class="bc" onclick="this.nextElementSibling.style.display='block'">Voir la correction</button>
<div class="corr">Correction...</div>
</div>

<!-- ... autant de questions que nécessaire -->

<!-- SYNTHÈSE — doit répondre explicitement à la problématique -->
<div class="retenir">
  <strong>À retenir</strong>
  <p><strong>Réponse à la problématique :</strong> [Réponse directe à la question posée en ouverture]</p>
  <p>[Définition / Propriété construite à partir de l'activité]</p>
</div>

</div>
<script src="../../../nav.js"></script>
<!-- Ajouter diff.js seulement si différenciation activée -->
<!-- <script src="../../../diff.js"></script> -->
</body>
</html>
```

### Classes CSS disponibles pour les questions

| Classe | Usage |
|---|---|
| `.situation` | Bloc document d'accroche (fond violet pointillé) |
| `.objectifs` | Bloc objectifs de l'activité |
| `.exo` | Bloc question |
| `.corr` | Correction cachée (display:none) |
| `.bc` | Bouton "Voir la correction" |
| `.retenir` | Encadré synthèse finale |
| `.meth` | Rappel de méthode (aide pour le socle) |
| `.att` | Attention / erreur fréquente |
| `.badge-blue` | Badge compétence APP ou ANA |
| `.badge-green` | Badge compétence REA ou VAL |
| `.badge-yellow` | Badge compétence COM |
| `.grid2` / `.deux-col` | Tableau à 2 colonnes |

---

## Règles de rédaction

### Ancrage pédagogique

1. **Lire `lecon.html`** avant de créer l'activité — la notion cible doit être clairement identifiée
2. **Vérifier le programme officiel** dans `/pdf/` — ne pas introduire du hors-programme
3. **L'activité mène à la notion** du cours, pas au-delà

### Contextes professionnels

- Utiliser des **métiers réels** (voir CLAUDE.md — jamais les sigles ICCER, ERA-MA, MAMA)
- Varier les contextes : professionnel + quotidien + scientifique
- Le contexte doit être **cohérent** : les données numériques doivent être réalistes

### Données et calculs

- Les données fournies dans le document doivent suffire à répondre à toutes les questions
- Ne pas demander à l'élève de chercher des informations extérieures
- Les calculs doivent être **accessibles** au niveau de la classe (pas de hors-programme)
- Les valeurs numériques doivent être réalistes (unités, ordres de grandeur)

### Corrections

- Chaque question a une correction complète (bouton "Voir la correction")
- La correction explique le **raisonnement**, pas juste le résultat
- Pour le socle : corrections très détaillées, étape par étape
- L'encadré "À retenir" reprend exactement la formulation du cours

---

## Figures et schémas dans les activités

### Règle absolue

**Si une question demande à l'élève de lire, analyser ou exploiter un élément visuel, cet élément DOIT être présent en SVG inline.** Ne jamais écrire "observe le graphique ci-dessous" sans fournir le graphique.

### Quand une figure est OBLIGATOIRE

**Mathématiques :**
- Activité sur les fonctions : courbe SVG à analyser (lecture d'extremums, de variations, d'images)
- Activité sur la géométrie : figure cotée SVG (triangles, parallélogrammes, solides avec dimensions)
- Activité sur les statistiques : diagramme SVG à lire (bâtons, circulaire, boîte à moustaches)
- Activité sur les probabilités : arbre de probabilités SVG ou tableau à double entrée
- Activité sur les suites : nuage de points SVG \((n ; u_n)\)

**Physique-Chimie :**
- Activité sur l'électricité : schéma de circuit SVG (symboles normalisés)
- Activité sur la mécanique : schéma de la situation avec forces SVG
- Activité sur l'optique : schéma rayon/miroir/dioptre SVG
- Activité sur la thermique : courbe de changement d'état T(t) SVG ou schéma de transfert
- Activité sur l'acoustique : oscillogramme SVG
- Activité sur la chimie : schéma de verrerie SVG si protocole de dilution/dosage

### Quand une figure est RECOMMANDÉE

- Plan coté d'une pièce ou d'un local (contexte professionnel)
- Croquis d'une installation (chauffage, agencement, menuiserie)
- Graphique illustrant les données du tableau d'accroche
- Tout document d'accroche qui serait plus clair avec un visuel

### Style SVG

Mêmes conventions que pour les exercices :
```html
<figure class="schema" style="text-align:center;margin:12px 0">
  <svg width="300" height="200" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
    <!-- Contenu -->
  </svg>
  <figcaption style="font-size:0.88em;color:#555;margin-top:4px">Légende</figcaption>
</figure>
```
Conventions : fill `#ebf5ff`, stroke `#0056b3`, labels `#555`, axes `#333`, inconnues `#c53030` en pointillés.

---

## Adaptation par matière

### Mathématiques

**Types de documents d'accroche privilégiés :**
- Tableau de valeurs (suites, fonctions, statistiques)
- **Graphique SVG à analyser** (courbe, nuage de points, diagramme statistique)
- Situation de proportionnalité (devis, tarifs, vitesse)
- **Données géométriques avec figure SVG** (plan coté, croquis d'une pièce, figure géométrique)

**Progression type :**
1. Lire et extraire des données — **depuis un tableau ou un graphique SVG** (APP)
2. Calculer des valeurs manquantes (REA)
3. Observer un pattern ou une régularité (ANA)
4. Formuler une conjecture (ANA/VAL)
5. Vérifier sur un autre exemple (VAL)
6. Formuler la propriété (COM → À retenir)

### Physique-Chimie

**Types de documents d'accroche privilégiés :**
- Relevé de mesures (températures, puissances, débits)
- Fiche technique d'un appareil (pompe à chaleur, radiateur, luminaire)
- Extrait de notice ou de norme
- **Schéma SVG de circuit ou d'installation** (obligatoire si le chapitre porte sur l'électricité)
- **Oscillogramme SVG** (obligatoire si le chapitre porte sur les signaux)

**Progression type :**
1. Identifier les grandeurs et unités — **en lisant le schéma ou le graphique** (APP)
2. Lire ou extraire des valeurs (APP)
3. Appliquer une relation entre grandeurs (REA)
4. Interpréter un résultat physiquement (ANA/VAL)
5. Conclure sur le comportement du système (VAL/COM)
6. Formuler la loi ou la propriété (À retenir)

---

## Checklist avant publication

### Cohérence problématique (OBLIGATOIRE)
- [ ] **Problématique clairement posée** après le document d'accroche
- [ ] **Toutes les questions contribuent** à répondre à la problématique
- [ ] **La synthèse répond explicitement** à la problématique
- [ ] Test de validation passé (3 OUI)

### Contenu pédagogique
- [ ] Contexte réel et concret (professionnel, quotidien ou scientifique) avec un lieu/métier nommé
- [ ] Toutes les données utiles présentes dans le document d'accroche
- [ ] Durée estimée indiquée dans le sous-titre
- [ ] Objectifs formulés
- [ ] Questions numérotées, progressives, avec verbe de consigne précis
- [ ] Badges de compétence sur les questions structurantes
- [ ] Correction complète pour chaque question (bouton "Voir la correction")
- [ ] Encadré "À retenir" aligné avec `lecon.html`
- [ ] Aucun sigle de filière dans le contenu (voir CLAUDE.md)
- [ ] Données numériques réalistes et cohérentes
- [ ] Contenu dans le programme officiel

### Technique
- [ ] MathJax inclus si formules
- [ ] print.css inclus
- [ ] nav.js inclus
- [ ] Couleurs CSS conformes au thème matière/niveau
- [ ] **Figures SVG présentes pour toutes les notions visuelles** (graphiques, schémas, figures géométriques, oscillogrammes, circuits)
- [ ] **Conventions SVG respectées** (fill #ebf5ff, stroke #0056b3, labels #555)
- [ ] Aucun élément visuel décrit uniquement par du texte quand un schéma est nécessaire
