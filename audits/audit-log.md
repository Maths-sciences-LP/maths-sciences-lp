# Journal des audits
**Dernière mise à jour** : 2026-05-19 (/audit-chapter physique-chimie/seconde/ch09 — focus activités : 🟡 fichiers complets, mais incohérence numérique défonceuse/toupie entre activités (105/102/107 dB), Q4 activite-2 hors-programme (log), timestamps `.maj` mal formés sur activités 2-4, `.maj` absent sur activite.html, titre Activité 3 divergent index/fichier)
**Dernière mise à jour précédente** : 2026-05-10 (/check-quality physique-chimie/seconde/ch13 — confirmation 🟡 ds.html 0 visuel sur 13 questions Optique (réflexion/réfraction/fibre/prisme) alors que chapitre extrêmement visuel ; reste du chapitre globalement très bon (lecon riche en SVG/Chart.js/Canvas animé, exercices.html ratio 25 %, activité avec grand SVG pédagogique))

Ce fichier est mis à jour automatiquement à chaque exécution d'un skill d'audit.

## Sessions récentes (avril-mai 2026)

## 2026-05-02 — Ch06 ICCER : 6 activités complémentaires + fix MathJax 54 pages
- **Bug critique signalé** : pages `index.html` ne chargeaient pas MathJax → formules en texte brut sur 54 chapitres (ex. ch07 PC première ERA : `\(P=F/S\)` non rendu)
  - Correction du script `scripts/generate_chapter_index.py` (ajout MathJax dans le `<head>`)
  - Patch des 54 `index.html` existants concernés (script Python)
- **Nouveau prompt** `prompts/prompt-activite-supplementaire-pc.md` :
  - 6 formats types (situation pro / fiche technique / TP numérique / DM / diagnostic / projet ouvert)
  - Convention de nommage `activite-N-slug.html`
  - Structure HTML, mise à jour `index.html`, checklist
- **6 nouvelles activités créées sur le Ch06 ICCER** (transport par un fluide) :
  - `activite-2-remplissage-ballon-ecs.html` (format A, 25 min, APP/REA)
  - `activite-3-mesure-debit-domestique.html` (format D / DM, 30 min, REA)
  - `activite-4-effet-venturi.html` (format F / projet ouvert, 35 min, ANA/VAL — découverte loi de Bernoulli)
  - `activite-5-tp-simulateur-debit.html` (format C / TP tableur, 50 min, REA/VAL — courbes v(D), normes ECS)
  - `activite-6-choisir-pompe.html` (format B / fiche technique, 40 min, APP/ANA/COM — courbes constructeur Wilo, point de fonctionnement)
  - `activite-7-diagnostic-fuite.html` (format E, 35 min, ANA/VAL — enquête sur compteur d'eau)
- **Effort visuel important** : tous les SVG inline ambitieux (manomètres, courbes caractéristiques, compteurs d'eau, graphiques mensuels, tableurs stylisés). Conventions accessibilité respectées (role + aria-label).
- `index.html` du ch06 ICCER mis à jour avec une nouvelle section « Activités complémentaires »
- 2 PR : #397 (mergée — fix MathJax + activités 2 et 3) + branche `claude/ch06-iccer-activites-suite` (4 activités restantes)


### 2026-04-29 / 30 — Sessions globales (parallèle audit total)
- Audit qualité approfondi des 78 simulations (vérification manuelle Opus, recalculs)
- 5 bugs corrigés : 2 simulations non-autonomes, 2 fragments HTML (python.html, logique.html), 1 code mort
- 114 aria-label ajoutés sur canvas/SVG (accessibilité WCAG 2.1)
- Polish 27 simulations PC (gradients headers + refactor structure : atome, atome-couches, modeles-atome, liaisons-chimiques, melangeur)
- Polish 8 simulations Maths (gradients + intros pédagogiques : balance, derivee, vecteurs, integrale, etc.)
- 4 nouvelles simulations créées (calculs-numeriques, combinatoire, probabilites-conditionnelles, matrices)
- `securite-laboratoire.html` créé → 100% couverture lycée pro (98/98)
- 138 pages `index.html` par chapitre + sommaires cliquables (13 fichiers)
- Objectifs injectés sur 544 pages de ressources
- Page catalogue `simulations.html` régénérée (82 sims)
- Bug animation memory leak corrigé (modeles-atome.html, pattern génération)
- 17 fichiers HTML structure réparée (`<div class="c">` non fermé)
- 3 nouveaux breakpoints mobile (380/600/800 px) + 10 sims PC mobile-responsive
- 30 prompts revus, 0 référence cassée
- PR #377 mergée (liens Capacités + fix ch09)

### 2026-04-15 — Sessions ciblées
- Audit complet PC 1ère ICCER (10 ch · 80 fichiers) → 0 erreur scientifique, 2 typos « À retenir »
- Audit complet PC 1ère ERA (10 ch · 80 fichiers) → 0 erreur scientifique, 9 typos accents
- Audit complet PC Term ICCER (8 ch · 64 fichiers) → 0 erreur scientifique, 8 typos + encoding ch06
- Audit complet PC Term ERA (8 ch · 65 fichiers) → 0 erreur scientifique, 9 typos
- Audit complet Maths CAP (7 ch · 56 fichiers) → 0 erreur, 100% conforme
- Audit complet PC CAP (7 ch · 56 fichiers) → 31 typos QCM corrigés
- Audit Terminale leçons : ch03/ch04/ch09/ch10/ch11 (corrections somme géométrique, polynôme degré 3, ℜ→ℝ, accents)

## 2026-04-30 — Audit total + Phase 1 (sessions Claude Code locales)

Recensement complet du site : 1 103 fichiers HTML (avant ajout des 138 index.html par les sessions globales), 84 chapitres Bac Pro × 8 types = 672 fichiers conformes, 14 chapitres CAP, 25 chapitres BTS (29 stubs), 15 chapitres LGT (lecon + ex-capa seulement), 14 chapitres groupements PC (ds.html absents), 78 simulations, 21 automatismes, 38 co-interventions. Mise à jour de `audit-global.md`, `audit-technique.md`, `audit-simulations.md`, `JOURNAL.md`.

**Phase 1 (quick wins, même jour)** : sigle ICCER reformulé dans maths/terminale/ch10/qcm.html (0 sigle en contenu désormais) ; 3 mini-exo ajoutés dans pc/premiere-era/ch10/lecon.html (toutes leçons Bac Pro conformes) ; 8 simulations bois/agencement référencées dans `simulations.html` + 3 liens depuis pc/premiere-era/ch05 et ch07 ; timestamp `.maj` ajouté sur les 4 fichiers modifiés.

**Phase 2 (visuels Seconde Pro, même jour)** : 6 SVG ajoutés dans maths/seconde/ch04/exercices.html (Probabilités, ratio 19 % → 39 %) ; 6 SVG ajoutés dans maths/seconde/ch13/exercices.html (Thalès, ratio 18 % → 31 %). Total Phase 2 : 12 SVG. Timestamps mis à jour. Phase 4 du plan-amelioration-seconde progresse de 1/15 à 3/15 chapitres traités (ch04, ch06, ch13).

## 2026-05-01 — Phase 2 suite (PC Seconde)

6 SVG ajoutés dans physique-chimie/seconde/ch11/exercices.html (Transferts thermiques, ratio 10 % → 25 %) ; 5 SVG ajoutés dans physique-chimie/seconde/ch01/exercices.html (Sécurité, ratio 16 % → 31 %). Total : 11 SVG. Phase 4 du plan-amelioration-seconde progresse de 3/15 à 5/15 chapitres traités (maths ch04, ch06, ch13 + PC ch11, ch01). Timestamps mis à jour.

## 2026-05-01 — Phase 2 suite (vague 2 : ch03, ch07, ch05)

5 SVG ajoutés dans physique-chimie/seconde/ch03/exercices.html (Loi d'Ohm, ratio 17 % → 31 %) ; 5 SVG ajoutés dans maths/seconde/ch07/exercices.html (Notion de fonction, ratio 12 % → 25 %) ; 3 SVG ajoutés dans physique-chimie/seconde/ch05/exercices.html (Mouvement, ratio 19 % → 28 %). Total : 13 SVG. Phase 4 progresse de 5/15 à 8/15 chapitres traités. Timestamps mis à jour.

## 2026-05-01 — Relecture critique + Phase 2 vague 3

**Relecture critique** : sur les 33 SVG des vagues 1 et 2, 7 corrections appliquées (ch07 Ex 7/9/11, ch13 Ex 14/15, ch04 Ex 22, ch01 Ex 8) — alignement points/graduations, échelles linéaires, points sur les segments. 26 SVG validés sans correction.

**Vague 3 (3 nouveaux chapitres)** : 4 SVG dans physique-chimie/seconde/ch10/exercices.html (Température, ratio 11 % → 30 %) ; 3 SVG dans physique-chimie/seconde/ch12/exercices.html (Changements d'état, ratio 12 % → 23 %) ; 5 SVG dans maths/seconde/ch10/exercices.html (Fonction carré, ratio 19 % → 30 %). Total : 12 SVG. Phase 4 progresse de 8/15 à 11/15 chapitres traités. Timestamps mis à jour.

## 2026-05-01 — Phase 2 vague 4 (clôture Phase 4)

**6 derniers chapitres traités** : 3 SVG ch03 maths (boîte à moustaches Ex 4, comparaison étendues Ex 5, fuseau ±σ Ex 7) ; 1 SVG ch08 maths (lecture antécédents droite Ex 13) ; 1 SVG ch14 maths (agrandissement pavé k=2 Ex 5) ; 1 SVG ch08 PC (échelle pH Ex 5) ; 1 SVG ch09 PC (oscillogramme diapason Ex 22) ; 1 SVG ch14 PC (spectre visible Ex 7). Total : 8 SVG. **Phase 4 du plan d'amélioration Seconde maintenant complète : 15/15 chapitres**, **68 SVG ajoutés au total**. Timestamps mis à jour.

## 2026-05-10 — /check-quality maths/seconde/ch08 (Fonction linéaire et proportionnalité)

Confirmation 🔴 : `ds.html` ne contient **aucun visuel** sur les 9 exercices répartis sur 3 niveaux de différenciation, alors que le chapitre "Fonction linéaire et proportionnalité" devrait massivement s'appuyer sur droites passant par O, tableaux de proportionnalité et lecture graphique. `exercices.html` : ratio visuels 8/41 ≈ 19,5 % (en dessous du seuil 20 % attendu pour un chapitre fonctions/géométrie) — manque visuels en niveau Socle (Ex 1-18 : 0 visuel sauf 1 SVG méthode décoratif Ex 3 et 1 SVG antécédents Ex 13) ; Niveau Approfondissement (Ex 31-41) : aucune représentation graphique des comparaisons fournisseurs (Ex 35, Ex 41) qui s'y prêtent. `interro.html` : un seul SVG décoratif sur le Sujet A Socle (et représente une droite affine \(f(x)=ax+b\) ce qui est incohérent avec le sujet linéaire — possible erreur copié-collé) ; Sujet B Socle, Sujet A/B Standard, Sujet A/B Approfondissement : 0 visuel. **Données qui dévoilent le coefficient** : `exercices.html` Ex 7 énonce \(f(3)=12\), \(g(5)=20\), \(h(4)=10\) puis demande de "trouver \(a\)" — la réponse étant le simple quotient affiché, c'est juste la procédure mais acceptable. `interro.html` Sujet A Q3 Socle énonce le tableau (2,4,6,10) → (10,20,30,50) et la question demande le rapport, laquelle est triviale car l'énoncé peut faire deviner le coefficient. Pas d'animation interdite, pas de référence orpheline. nav.js, print.css, :root, MathJax, diff.js conformes sur tous les fichiers.

## 2026-05-10 — /check-quality maths/seconde/ch02 (Statistiques à une variable)

Confirmation 🔴 : `ds.html` ne contient aucun visuel pour 6 exercices répartis sur 3 niveaux de différenciation (chapitre statistiques → graphes/diagrammes attendus). Incohérence majeure de portée : `lecon.html` annonce que les indicateurs (moyenne, médiane, quartiles, boîte à moustaches) sont reportés au Ch03, mais `exercices.html` (Ex 2 à 33), `interro.html` et plusieurs questions de QCM les utilisent abondamment. Plusieurs SVG dans `exercices.html` et `activite.html` sont des illustrations génériques (étiquettes A-E, valeurs aléatoires) qui ne reflètent pas les données chiffrées de l'énoncé (ex. Ex 9 : SVG à 5 barres A-E pour un énoncé sur 6 mois Janvier-Juin). Données dévoilant la solution : `exercices.html` Ex 23 et Ex 28 (séries triées entièrement données dans la correction). Tableau récapitulatif des compétences (ligne 1869) cite des compétences (boîte à moustaches, moyenne pondérée) hors du périmètre annoncé du chapitre.

## 2026-05-10 — /check-quality physique-chimie/seconde/ch13 (Réflexion, réfraction et signaux lumineux)

Confirmation 🟡 ciblée sur `ds.html` : 0 visuel pour 13 questions sur les trois niveaux (5 socle + 5 standard + 5 appro) alors que toutes les notions du chapitre sont géométriques (rayons incident/réfléchi/réfracté, normale, dioptre air/verre, prisme, fibre optique, miroir galvanométrique). Aucun schéma de réflexion (Standard A.1, Socle A.5 miroir, Appro A.1 miroir CNC) ; aucun dioptre représenté pour les exercices air/verre, eau/air et fibre cœur/gaine ; pas de schéma du prisme (Appro A.2 - retour vers air à 55°), de la lame à faces parallèles (Appro A.3 vitre 5 mm), ni de la fibre CNC (Appro B.2 cœur 1,46 / gaine 1,40). Incohérence forte avec le reste du chapitre : `lecon.html` (4 SVG riches + Chart.js + Canvas animé Snell-Descartes), `exercices.html` (8 SVG, ratio ≈ 25 %), `activite.html` (1 grand SVG pédagogique 500×380 + tableau de mesures), `interro.html` (3 SVG) et `qcm.html` (1 SVG d'en-tête) sont tous bien dotés. Aucun problème détecté côté technique sur l'ensemble du chapitre : nav.js, print.css, :root (#6f42c1 conforme PC Seconde), MathJax, qcm.js, diff.js, sujet.js (interro), classes non redéfinies, pas d'animations interdites dans exos/DS/interro. lecon.html : 4 mini-exo bien répartis avec corrections, diff.js absent (conforme). Pas de données dévoilant la solution dans les tableaux. Pas de référence orpheline non couverte par un visuel adjacent.

## Log

| Chapitre | `/audit-chapter` | `/check-quality` | `/scientific-audit` | `/section-audit` | Résultat |
|---|---|---|---|---|---|
| maths/seconde/ch01 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch02 | 2026-04-06 | 2026-05-10 | — | 2026-05-10 | 🔴 |
| maths/seconde/ch03 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟡 |
| maths/seconde/ch04 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch05 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟡 |
| maths/seconde/ch06 | 2026-04-06 | 2026-05-10 | — | 2026-05-10 | 🔴 |
| maths/seconde/ch07 | 2026-04-06 | 2026-05-10 | — | 2026-05-10 | 🔴 |
| maths/seconde/ch08 | 2026-04-06 | 2026-05-10 | — | 2026-05-10 | 🔴 |
| maths/seconde/ch09 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch10 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch11 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch12 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch13 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| maths/seconde/ch14 | 2026-04-06 | 2026-04-06 | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch01 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch02 | 2026-04-06 | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch03 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch04 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch05 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch06 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch07 | — | 2026-05-10 | — | 2026-05-10 | 🟡 |
| physique-chimie/seconde/ch08 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch09 | 2026-05-19 | — | — | 2026-05-10 | 🟡 |
| physique-chimie/seconde/ch10 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch11 | — | — | 2026-04-06 | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch12 | — | — | — | 2026-05-10 | 🟢 |
| physique-chimie/seconde/ch13 | — | 2026-05-10 | — | 2026-05-10 | 🟡 |
| physique-chimie/seconde/ch14 | — | — | — | 2026-05-10 | 🟢 |
| maths/premiere/ch01 | — | — | — | 2026-04-07 | 🟡 |
| maths/premiere/ch02 | — | — | — | 2026-04-07 | 🟡 |
| maths/premiere/ch03 | — | — | — | 2026-04-07 | 🔴 |
| maths/premiere/ch04 | — | — | — | 2026-04-07 | 🟡 |
| maths/premiere/ch05 | — | — | — | 2026-04-07 | 🔴 |
| maths/premiere/ch06 | — | — | — | 2026-04-07 | 🔴 |
| maths/premiere/ch07 | — | — | — | 2026-04-07 | 🔴 |
| maths/premiere/ch08 | — | — | — | 2026-04-07 | 🔴 |
| maths/premiere/ch09 | — | — | — | 2026-04-07 | 🟢 |
