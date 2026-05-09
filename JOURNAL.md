# Journal de bord du projet

**Site :** https://maths-sciences-lp.github.io/
**Dernière mise à jour :** 2026-05-07 (relectures Ch09 maths 2nde + château d'eau ICCER + formalisation format manuel scolaire dans prompt-activite.md)

---

## Travail récent

### Session 7 mai 2026 — Relectures, fixes et formalisation du format manuel scolaire

**Périmètre** : relecture systématique des 4 activités du chapitre 9 maths Seconde (Fonction affine), correction de bugs trouvés, relecture et complétion de l'activité 2 château d'eau (PC Term ICCER Ch05), formalisation du format « manuel scolaire complet » dans `prompts/prompt-activite.md`.

**Bugs corrigés sur Ch09 Maths 2nde** :
- `exercices-capacites.html` (PR #426) : exo 14b orphelin entre cap-sections C6 et C7 (sans `data-cap` → toujours visible) replacé dans la C6. 2 SVG dupliqués supprimés (C3 et C6 Ex 13).
- `activite.html` (PR #426) : SVG erroné — pentes des droites D(h)=45h+60 et M(h)=40h+90 mal calculées (`x2="330"` mais `y2="118"` correspondait à h=6). Recalcul des `y2` à 100 (D) et 102 (M) pour que les droites passent par le point d'intersection (290, 118). Ajout du timestamp manquant.
- `activite-4-salaire-variable.html` (PR #427) : 3 balises `<li</li>` malformées (lignes 208, 221, 235) corrigées.
- `activite-2-tarif-taxi.html` et `activite-3-couts-eclairage.html` : relus, aucun problème.

**Complétion de `physique-chimie/terminale-iccer/ch05/activite-2-chateau-eau.html`** :
- Activité créée précédemment au format manuel scolaire **incomplet** : 7 questions au lieu de 8, pas de bonus, pas de ref leçon finale, badge COM en jaune.
- Corrections : ajout d'une 8ᵉ question (ANA — pression au 9ᵉ étage et nécessité d'un suppresseur), ajout d'un encadré bonus (pression au fond d'une piscine et du lac Léman), ajout de la ref leçon `📚 §2 + §3 de la leçon Ch05`, passage du badge Q7 (devenue Q8 COM) en `badge-red`, ajout de la classe CSS `.bonus` au style inline, mise à jour du timestamp.

**Formalisation du format « manuel scolaire complet »** dans `prompts/prompt-activite.md` :
- Nouvelle section dédiée aux **activités secondaires** (`activite-2/3/4-...html`) qui suivent un format unifié et imprimable, distinct de l'activité de découverte principale plus libre.
- Spécifications obligatoires : timestamp, bouton imprimer, badge SITUATION PRO, persona avec prénom + métier réel, Doc 1 (SVG) + Doc 2 (données), problématique encadrée, **8 questions** APP/REA/ANA/VAL/COM, lignes-réponse imprimables (`<ul class="lignes-reponse">`), bonus encadré jaune (`.bonus`), À retenir avec ref leçon finale.
- Style CSS `.bonus` inline obligatoire documenté.
- Checklist spécifique ajoutée (incluant la vérification `grep '<li</li>'` pour les balises malformées récurrentes).

**Bilan des activités au format manuel scolaire** créées lors des sessions précédentes (récap pour traçabilité) :
- **PC Seconde Ch01–Ch14** : 42 activités secondaires (3 par chapitre)
- **Maths 1ère Ch01–Ch09** : 27 activités secondaires (3 par chapitre)
- **Maths CAP Ch01–Ch07** : 21 activités secondaires (3 par chapitre)
- Total : **90 activités secondaires** au format manuel scolaire complet

**PR** : #426 (mergée — fix Ch09 maths 2nde activite + exercices-capacites), #427 (mergée — fix activite-4 salaire-variable).

---

## État actuel du site

| Indicateur | Valeur |
|---|---|
| Pages HTML totales (recensement 2026-04-30) | **1 103** |
| Chapitres Bac Pro | 84 (8 fichiers/ch = **672 fichiers, 100 % complets**) |
| Chapitres CAP | 14 (8 fichiers/ch — structure complète) |
| Chapitres BTS | 25 (leçons + exercices partiels — **29 stubs** ch19–ch25 + DS) |
| Chapitres LGT Terminale | 15 (lecon + exercices-capacites uniquement) |
| Chapitres nouveaux groupements (PC gpt 2/4/5/6) | 14 (lecon + exercices + fiche + activite — **ds.html absent**) |
| Simulations interactives | **78** (recompté 2026-04-30, vs 70 documenté) + 12 inline LGT |
| Automatismes | 21 pages (24 exo/page) |
| Co-intervention | 38 pages |
| CCF LaTeX | 5 sujets + 5 corrections + 2 fiches |
| Programmes en markdown | 11/11 complets |
| Prompts de filière | 14 |

### Couverture par section

| Section | Chapitres | Fichiers/ch | Complétion |
|---|---|---|---|
| Maths 2nde | 14 | 8/8 | 100% |
| Maths 1ère | 9 | 8/8 (sauf activité) | 88% |
| Maths Term | 11 | 8/8 | 100% |
| Maths BTS | 25 | 1-3/8 | ~30% |
| Maths CAP | 7 | 4/8 | 50% |
| PC 2nde | 14 | 8/8 | 100% |
| PC 1ère ICCER | 10 | 8/8 | 100% |
| PC 1ère ERA | 10 | 8/8 | 100% |
| PC Term ICCER | 8 | 8/8 | 100% |
| PC Term ERA | 8 | 8/8 | 100% |
| PC CAP | 7 | 4/8 | 50% |
| PC gpt 2/4/5/6 | 14 | 1/8 (leçon) | 12% |
| Maths LGT Term spé | 15 | 2/8 (leçon + exo-cap) | 25% |

---

## Travail réalisé

### Session 2 mai 2026 — Ch06 ICCER : activités complémentaires + fix MathJax + nouveau prompt

**Périmètre** : enrichissement du chapitre 6 « Transport par un fluide » (Terminale ICCER, Grpt 1) avec 6 activités complémentaires de formats variés ; correction d'un bug MathJax sur 54 pages d'index générées ; rédaction d'un prompt de référence pour les activités supplémentaires.

**Bug MathJax sur les pages `index.html` (urgence signalée par l'utilisateur)** :
- Symptôme : les objectifs de chapitre contenant des formules `\(P=F/S\)`, `\(P_1V_1=P_2V_2\)`, etc. s'affichaient en texte brut sur 54 pages.
- Cause : `scripts/generate_chapter_index.py` ne chargeait pas le script MathJax dans le `<head>` HTML.
- Correction : ajout de la balise `<script async src="...mathjax-3...">` au template du script + patch des 54 pages déjà générées.

**Nouveau prompt** `prompts/prompt-activite-supplementaire-pc.md` :
- Différencie les activités supplémentaires de l'activité de découverte principale.
- Définit 6 formats types (situation pro / fiche technique / TP numérique / DM / diagnostic / projet ouvert).
- Convention de nommage `activite-N-slug.html`, structure HTML, mise à jour de l'`index.html`, checklist.

**6 activités complémentaires créées sur Ch06 ICCER** (effort visuel SVG important) :
| # | Titre | Format | Durée | SVG remarquable |
|---|---|---|---|---|
| 2 | Remplissage ballon ECS | A — situation pro | 25 min | Schéma ballon + tuyau + vanne |
| 3 | Mesure débit chez soi | D — DM | 30 min | Protocole : robinet, bouteille graduée, chronomètre |
| 4 | Effet Venturi (projet) | F — projet ouvert | 35 min | Coupe Venturi avec lignes de courant + 3 manomètres + réservoir engrais |
| 5 | TP tableur v(D) | C — TP numérique | 50 min | Interface tableur stylisée + graphique v(D) avec 3 lignes-limites colorées |
| 6 | Choisir une pompe Wilo | B — fiche technique | 40 min | 3 fiches techniques + graphique courbes pompes + courbe circuit + point de fonctionnement |
| 7 | Diagnostic d'une fuite | E — diagnostic | 35 min | 2 compteurs Itron à comparer + graphique conso mensuelle 12 mois |

**Mise à jour `index.html` ch06 ICCER** : nouvelle section « Activités complémentaires » avec 6 cartes (icônes, descriptions, tags compétences). Compteur 9 → 15 ressources.

**Mises à jour** : `audits/audit-log.md`, `JOURNAL.md`, `scripts/generate_chapter_index.py`, 54 pages `index.html`.

**PR** : #397 (mergée — fix MathJax + activités 2 et 3) puis #398 (mergée — activités 4 à 7 + index + audit-log).

---

### Session 30 avril 2026 — Audit total du site

**Périmètre** : recensement complet de l'ensemble du site, confrontation des audits existants à l'état réel, mise à jour des compteurs et identification des chantiers restants.

**Constats principaux** :
- **1 103 fichiers HTML** au total (vs ~992 documenté précédemment) ; structure Bac Pro **100 % complète** : 84 chapitres × 8 types = 672 fichiers (lecon, exercices, ds, fiche, qcm, interro, exercices-capacites, activite).
- **78 simulations** (vs 70 documenté) : 8 simulations bois/agencement créées le 24 avril (`presse-hydraulique`, `paroi-multicouche`, `escalier-blondel`, `eclairage-atelier`, `dilatation-parquet`, `comparateur-vitrages`, `calepinage`, `anisotropie-bois`) + 2 simulations CTN/PT100 le 7 avril.
- **0 chemin absolu résiduel** (`/nav.js`, `/nav.css`, `/diff.js`) ; nav.js + print.css présents à 100 % dans toutes les pages de cours testées.
- **diff.js** correctement absent des leçons ; présent dans 98/130 exercices, 98/116 ds, 84/98 qcm, 91/98 interro (les CAP/BTS sans diff.js sont conformes — pas de différenciation par design).
- **Sigles interdits dans contenu** : 1 seule occurrence détectée (`maths/terminale/ch10/qcm.html:529` « Contexte ICCER » — à reformuler).
- **Entités HTML résiduelles** : ~125 fichiers concernés, principalement CAP (28 maths + 28 PC), BTS (19), PC première-iccer (19), terminale-iccer/era (34), première-era (10), première maths (11). Seconde Bac Pro et LGT propres.
- **Timestamp `.maj`** (règle CLAUDE.md n°10) déployé dans seulement 82/1 103 fichiers (≈7 %) — 0 dans plusieurs sections (PC première/terminale, PC cap, maths première).
- **Mini-exo** présents dans 87/88 leçons des sections principales — un seul manquant : `physique-chimie/premiere-era/ch10/lecon.html`.

**Chantiers restants identifiés** :
- BTS : 7 chapitres ch19–ch25 sans exercices.html ni ds.html (+ 18 ds stubs antérieurs)
- LGT Terminale : 15 chapitres avec exercices/ds/fiche/qcm/interro à créer
- Groupements PC (gpt 2/4/5/6) : 14 chapitres sans ds.html, sans qcm/interro/exercices-capacites
- Conversion UTF-8 des entités HTML résiduelles dans les ~125 fichiers
- Déploiement du timestamp `.maj` dans les sections où il manque
- Audit Seconde Pro (2026-04-22) : ratio visuels insuffisant dans 11 chapitres (PC ch11 7 %, ch01 11 %, maths ch04 40 %, ch13 42 %…)

**Mises à jour** : `audit-global.md`, `audit-technique.md`, `audit-simulations.md`, `audit-log.md`, `JOURNAL.md`.

### Session 30 avril 2026 — Phase 1 (Quick wins post-audit)

**Périmètre** : corrections sûres et à fort levier identifiées dans l'audit total du jour même.

- **A. Sigle ICCER en contenu** : `maths/terminale/ch10/qcm.html` ligne 529 — « Impédance complexe – Contexte ICCER » → « Impédance complexe – Application en installation thermique ». 0 sigle interdit en contenu sur le site.
- **B. Mini-exo PC ERA ch10** : 3 mini-exo `.mini-exo` ajoutés dans `physique-chimie/premiere-era/ch10/lecon.html` (vitesse du son dans le bois — poutre chêne 8 m, longueur d'onde aspirateur à copeaux 250 Hz, addition de niveaux sonores +3 dB). Toutes les leçons Bac Pro ont désormais des mini-exo (88/88).
- **C. Référencement des 8 simulations bois/agencement (24 avril)** dans `simulations.html` : `presse-hydraulique` + `anisotropie-bois` (Mécanique), `paroi-multicouche` + `comparateur-vitrages` + `dilatation-parquet` (Thermique), `eclairage-atelier` (Signaux & Optique), `escalier-blondel` + `calepinage` (Mathématiques). Niveaux et chapitres affectés (badges 2nde MAMA / 1ère ERA). Liens depuis les leçons pour 3 sims clés : `paroi-multicouche` et `comparateur-vitrages` dans pc/premiere-era/ch05, `presse-hydraulique` dans pc/premiere-era/ch07.
- **Timestamp `.maj`** ajouté sur les 4 fichiers modifiés (compteur 82 → 86/1 103).
- **Audits mis à jour** : `audit-global.md`, `audit-technique.md`, `audit-simulations.md` — éléments cochés en « Corrections realisees » avec date.

**Reste à faire (Phase 2 visuels Seconde + finitions)** :
- Lier les 5 simulations bois/agencement non encore rattachées aux leçons (escalier-blondel, calepinage, dilatation-parquet, anisotropie-bois, eclairage-atelier) — principalement dans 2nde MAMA et 1ère ERA
- Enrichissement visuels Seconde Pro : maths ch04 + ch13 (priorité), puis PC ch11 + ch01

### Session 30 avril 2026 — Phase 2 (Visuels Seconde Pro)

**Périmètre** : enrichissement des chapitres Seconde Pro identifiés comme déficitaires en visuels par l'audit du 22 avril. Cible : ratio visuels/exos ≥ 40 %. Priorité aux 2 chapitres maths les plus dégradés.

- **E. `maths/seconde/ch04/exercices.html` — Probabilités et fluctuation**
  - 6 SVG ajoutés dans les corrections d'exercices : tableau 6×6 des sommes de 2 dés (Ex 13, somme 7 surlignée), courbe de convergence loi des grands nombres (Ex 22, basket f → p = 0,6), arbre de probabilités 2 niveaux fiabilité machine (Ex 23, découpe + ponçage), droite graduée intervalle de fluctuation (Ex 25 panneaux conformes f = 0,08 dans IC ; Ex 27 pièce truquée f = 0,57 hors IC), arbre 2 épreuves panneaux solaires (Ex 29).
  - Ratio visuels/exercices : 19 % → **39 %**.

- **F. `maths/seconde/ch13/exercices.html` — Théorème de Thalès**
  - 6 SVG ajoutés : ombre piquet/pylône avec rayons solaires parallèles (Ex 13, soleil + 2 triangles semblables), comparaison cas parallèle / non parallèle (Ex 14, 2 triangles côte à côte), configuration papillon (Ex 15, AB ∥ CD avec mesures OA=5, OC=10, etc.), triangle Thalès complet (Ex 19, AD/AB = AE/AC = DE/BC = 1/3), triangle après résolution équation x = 4 cm (Ex 23), triangle problème 2 étapes (Ex 22, AD=5, DB=3, etc., k=5/8).
  - Ratio visuels/exercices : 18 % → **31 %**.

- **Timestamp `.maj`** mis à jour sur les 2 fichiers (compteur 86 → 88/1 103).
- **Audits mis à jour** : `audit-global.md` (corrections + amelioration restantes cochées), `plan-amelioration-seconde.md` (Phase 4 progresse 1/15 → 3/15 chapitres traités), `JOURNAL.md`.

**Reste sur Phase 4 visuels** : 13 chapitres restants (8 maths : ch03, ch07, ch08, ch10, ch14 ; 9 PC : ch01, ch03, ch05, ch08, ch09, ch10, ch11, ch12, ch14). Les 2 plus critiques sont PC ch11 Transferts thermiques (ratio 7-15 %) et PC ch01 Sécurité (11 %).

### Session 1er mai 2026 — Phase 2 suite (Visuels PC Seconde Pro)

**Périmètre** : poursuite de la Phase 4 du plan d'amélioration Seconde sur les 2 chapitres PC les plus critiques en visuels.

- **H. `physique-chimie/seconde/ch11/exercices.html` — Transferts thermiques**
  - 6 SVG ajoutés dans les corrections : 3 schémas illustrés des modes (barre chauffée + flammes / radiateur + cellules d'air / soleil + rayons IR) (Ex 1), diagramme barres logarithmique des conductivités thermiques de 6 matériaux du quotidien (Ex 5), comparaison flux thermique panneau bois vs panneau verre à épaisseur égale (Ex 17), schéma atelier avant et après isolation avec flèches de flux thermique (Ex 19), comparaison cadre fenêtre bois (43 W) vs aluminium (83 kW, ×1900) (Ex 22), coupe transversale double vitrage + schéma équivalent en résistances série (Ex 25).
  - Ratio visuels/exercices : 10 % → **25 %** (cible atteinte).

- **I. `physique-chimie/seconde/ch01/exercices.html` — Sécurité**
  - 5 SVG ajoutés : 6 pictogrammes EPI illustrés avec libellés et code couleur ISO (Ex 2), échelle des niveaux sonores 0-130 dB avec seuils 85 dB et 120 dB et placement des machines d'atelier (Ex 8), 3 bacs de tri colorés DDS rouge / recyclage jaune / ordures gris (Ex 9), schéma de l'installation électrique compteur → DJ général 32 A → DDR 30 mA → DJ prise 16 A → meuleuse (Ex 14), tableau des 5 classes de laser de la classe 1 (sûr) à la classe 4 (danger maximal) avec progression du danger (Ex 17).
  - Ratio visuels/exercices : 16 % → **31 %**.

- **Timestamps `.maj`** mis à jour sur les 2 fichiers (compteur 88 → 90/1 103).
- **Audits mis à jour** : `audit-global.md`, `plan-amelioration-seconde.md` (Phase 4 progresse 3/15 → 5/15 chapitres), `audit-log.md`, `JOURNAL.md`.

**Bilan visuels Seconde Pro après 5 chapitres traités (sur 15 identifiés au 22/04)** : 35 SVG ajoutés au total (7 ch06 maths + 6 ch04 + 6 ch13 + 6 ch11 PC + 5 ch01 PC + ajustements). Reste 10 chapitres à enrichir (5 maths : ch03, ch07, ch08, ch10, ch14 ; 5 PC : ch03, ch05, ch08, ch09, ch10, ch12, ch14).

### Session 1er mai 2026 (vague 2) — Visuels Seconde Pro (ch03 PC, ch07 maths, ch05 PC)

**Périmètre** : poursuite Phase 4 du plan d'amélioration Seconde — 3 chapitres prioritaires supplémentaires (Loi d'Ohm, Notion de fonction, Mouvement).

- **K. `physique-chimie/seconde/ch03/exercices.html` — Loi d'Ohm**
  - 5 SVG ajoutés dans les corrections : 3 pistolets à colle en parallèle 230 V avec disjoncteur 2 A + I_tot = 1,3 A (Ex 6), 2 lampes 60 Ω en parallèle avec lois de Kirchhoff et division des courants (Ex 11), choix du fusible selon l'intensité avec 3 appareils (lampe LED, perceuse, scie) (Ex 13), schéma circuit mixte série+parallèle R₁ + (R₂ ∥ R₃) avec mesures U et I sur chaque branche (Ex 20), caractéristique U(I) non linéaire d'une lampe à incandescence comparée à la droite ohmique théorique (Ex 19).
  - Ratio visuels/exercices : 17 % → **31 %**.

- **L. `maths/seconde/ch07/exercices.html` — Notion de fonction**
  - 5 SVG ajoutés : graphe C(x)=8x+20 avec deux droites horizontales C=60 et C=100 et lecture des antécédents x=5 et x=10 sur l'axe (Ex 11), schéma correspondance image/antécédent par flèches entre 2 ensembles "départ → arrivée" (Ex 6), graphe avec lecture image (flèches vertes verticales f(2)=7) et antécédent (flèches rouges horizontales 9→x=3) (Ex 7), graphe facture d'eau f(x)=4x+10 avec 5 points alignés et ordonnée à l'origine = abonnement fixe (Ex 9), graphe E(t)=2t avec lecture antécédent E=7 → t≈3,5 h (Ex 16).
  - Ratio visuels/exercices : 12 % → **25 %**.

- **M. `physique-chimie/seconde/ch05/exercices.html` — Mouvement et trajectoire**
  - 3 SVG ajoutés : chronophotographie de 5 positions équidistantes (3 cm) avec vecteurs vitesse identiques au-dessus → mouvement uniforme (Ex 4), piste d'athlétisme 400 m vue de dessus avec lignes droites (rectiligne bleu) et virages en demi-cercle (circulaire rouge), trajectoire globale curviligne (Ex 11), comparaison de 3 chronophotographies (uniforme avec écarts égaux / accéléré avec écarts croissants 1,3,5,7 / décéléré avec écarts décroissants 7,5,3,1) (Ex 14).
  - Ratio visuels/exercices : 19 % → **28 %**.

- **Timestamps `.maj`** mis à jour sur les 3 fichiers (compteur 90 → 93/1 103).
- **Audits mis à jour** : `audit-global.md`, `plan-amelioration-seconde.md` (Phase 4 progresse 5/15 → 8/15 chapitres), `audit-log.md`, `JOURNAL.md`.

**Bilan Phase 4 après 8 chapitres** : 48 SVG ajoutés au total (7 ch06 maths + 6 ch04 maths + 6 ch13 maths + 5 ch07 maths + 6 ch11 PC + 5 ch01 PC + 5 ch03 PC + 3 ch05 PC + ajustements). Reste 7 chapitres : maths ch03, ch08, ch10, ch14 ; PC ch08, ch09, ch10, ch12, ch14.

### Session 1er mai 2026 (suite) — Relecture critique + Phase 2 vague 3

**Relecture critique des 33 SVG ajoutés** (vagues 1 et 2) :
- 7 SVG corrigés : alignement points/graduations dans ch07 Ex 7, échelles Y linéaires dans ch07 Ex 11 et ch04 Ex 22, droite étendue ch07 Ex 9, point E sur AC ch13 Ex 14 cas 2, longueurs OA/OC à l'échelle ch13 Ex 15 (papillon), graduations 30/60 dB et zones colorées ch01 Ex 8.
- 26 SVG validés sans correction.
- Méthode : recalcul des positions pixel à partir de l'échelle (1 unité = X px) et confrontation aux attributs `cx`/`cy`/`x`/`width`.

**Phase 2 vague 3 (3 nouveaux chapitres Seconde Pro)** :

- **P. `physique-chimie/seconde/ch10/exercices.html` — Température et capteurs**
  - 4 SVG ajoutés : double échelle Celsius/Kelvin avec 6 repères (zéro absolu, fusion eau, ambiante, étuve, ébullition) (Ex 1), placement de 5 températures sur l'échelle (azote -196, hiver -5, eau 15, corps 37, étuve 80 °C) (Ex 8), plages de fonctionnement des 6 capteurs (CTN, CTP, LM35, Pt100, thermocouple K, IR) sur axe -200 à 1200 °C (Ex 11), courbe R(T) d'une CTN avec seuil 8 kΩ « étuve froide » (Ex 14).
  - Ratio visuels/exercices : 11 % → **30 %**.

- **Q. `physique-chimie/seconde/ch12/exercices.html` — Changements d'état**
  - 3 SVG ajoutés : courbe T(t) annotée avec 3 phases colorées (montée 20→100°C, palier vaporisation, vapeur surchauffée) (Ex 3), schéma fusion glace E=m×L_f avec états avant/après (0 °C constants) (Ex 4), schéma vaporisation eau dans planche E=m×L_v avec L_v ≈ 7×L_f (Ex 5).
  - Ratio visuels/exercices : 12 % → **23 %**.

- **R. `maths/seconde/ch10/exercices.html` — Fonction carré**
  - 5 SVG ajoutés : parabole avec tableau de variations annoté (sens décroissant ↘ puis croissant ↗) (Ex 4), résolution graphique x²=k avec 4 droites (y=4 et y=16 → 2 solutions ; y=0 → 1 sol ; y=-5 → aucune sol) (Ex 7), comparaison aires de cadres 10 cm vs 20 cm illustrant (2x)²=4x² avec 4 petits carrés visibles (Ex 9), trajectoire ballon h(t)=−t²+4 avec sommet en haut et touche au sol à t=2s (Ex 11), courbe d(v)=0,006×v² distance de freinage avec effet quadratique (à 130 km/h ≈ 100 m) (Ex 14).
  - Ratio visuels/exercices : 19 % → **30 %**.

- **Timestamps `.maj`** mis à jour sur les 3 fichiers (compteur 93 → 96/1 103).
- **Audits mis à jour** : `audit-global.md`, `plan-amelioration-seconde.md` (Phase 4 progresse 8/15 → 11/15), `audit-log.md`, `JOURNAL.md`.

**Bilan Phase 4 après 11 chapitres (sur 15 ciblés)** : 60 SVG ajoutés au total (7 ch06 + 6 ch04 + 6 ch13 + 5 ch07 + 5 ch10 maths + 6 ch11 + 5 ch01 + 5 ch03 + 3 ch05 + 4 ch10 + 3 ch12 PC + corrections). **Reste 4 chapitres** : maths ch03 (Indicateurs stats), ch08 (Fonction linéaire), ch14 (Solides) ; PC ch08 (Solutions), ch09 (Son), ch14 (Lumière).

### Session 1er mai 2026 (clôture) — Phase 4 visuels Seconde TERMINÉE 🎉

**Périmètre** : 6 derniers chapitres pour clôturer la Phase 4 du plan d'amélioration Seconde Pro.

- **T. `maths/seconde/ch03/exercices.html` — Indicateurs statistiques** : 3 SVG ajoutés (comparaison étendue 2 séries A/B Ex 5, boîte à moustaches Q1/Me/Q3+IQR Ex 4, distribution avec fuseau ±σ Ex 7). Ratio 20 % → **30 %**.
- **U. `maths/seconde/ch08/exercices.html` — Fonction linéaire** : 1 SVG (droite f(x)=5x avec lecture antécédents Ex 13).
- **V. `maths/seconde/ch14/exercices.html` — Solides** : 1 SVG (agrandissement pavé en perspective k=2 → V × 2³ Ex 5).
- **W. `physique-chimie/seconde/ch08/exercices.html` — Solutions** : 1 SVG (échelle pH 0-14 colorée avec produits d'atelier et zones de danger Ex 5).
- **X. `physique-chimie/seconde/ch09/exercices.html` — Son** : 1 SVG (oscillogramme diapason 5 oscillations sur 11,4 ms avec mesure de période T=2,28 ms Ex 22).
- **Y. `physique-chimie/seconde/ch14/exercices.html` — Lumière** : 1 SVG (spectre visible 380-780 nm avec 6 couleurs placées et zones UV/IR invisibles Ex 7).

- **Timestamps `.maj`** mis à jour sur les 6 fichiers (compteur 96 → 102/1 103).
- **Audits mis à jour** : `audit-global.md`, `plan-amelioration-seconde.md` (Phase 4 → **complète**), `audit-log.md`, `JOURNAL.md`.

**🎯 Bilan final Phase 4 du plan d'amélioration Seconde** :
- **15/15 chapitres traités** (100 %)
- **68 SVG ajoutés** au total (32 maths + 36 PC) sur les 28 fichiers `exercices.html` Seconde Pro
- Total exercices Seconde Pro : ~390 ; nouveau ratio moyen visuels/exercices ≈ 28 % (vs ≈ 13 % au point de départ)
- 7 SVG corrigés après relecture critique (alignement points/graduations, échelles linéaires)

**Bilan global de toutes les sessions audit + Phase 1 + Phase 2** :
- **Phase 1 (quick wins, 30/04)** : sigle ICCER reformulé, 3 mini-exo PC ERA ch10, 8 simulations bois référencées.
- **Phase 2 (visuels, 30/04 et 01/05)** : 68 SVG ajoutés en Seconde Pro, Phase 4 du plan complète.
- **Fichiers modifiés au total** : 16 (1 qcm, 1 leçon, 1 simulations.html, 13 exercices Seconde Pro).
- **Timestamps `.maj`** : 96 → 102/1 103.

**Chantiers structurels restants** (relevé audit total 30/04) :
- BTS : 7 chapitres ch19-ch25 sans exercices ni DS + 18 DS stubs antérieurs
- LGT Terminale : 75 fichiers à créer (5 types × 15 chapitres)
- Groupements PC (gpt 2/4/5/6) : 56 fichiers à créer
- Conversion UTF-8 dans ~125 fichiers (CAP, BTS, PC première/terminale)
- Liaison des 5 simulations bois restantes (escalier-blondel, calepinage, dilatation-parquet, anisotropie-bois, eclairage-atelier) depuis les leçons

### Session 27-28 mars 2026
- Audit conformité programmes (Seconde, Première, Terminale)
- Création 9 exercices-capacités maths Première (~115 exercices)
- Fix 29 fichiers C6 hors conteneur, 41 toggle manquants, 26 data-cap→data-filtre
- Corrections erreurs scientifiques (vitesse son, indice eau, neon→sodium)
- Correction groupement B (ICCER/ERA/TMA)
- Création CCF maths (probas + polynômes) ERA-TMA + ICCER + corrections
- Création CCF PC ICCER (fluides + courant alternatif) + correction
- Création CCF PC ERA (électricité + acoustique) + correction + fiche
- 2 simulations interactives (debit-fluide.html, attenuation-sonore.html)
- CCF ERA-MA avec TP numérique acoustique

### Session 28-31 mars 2026
- Audit simulations : fix sci(0), variable morte, print.css, index
- Corrections LaTeX manquantes (ICCER maths + PC)
- Harmonisation + enrichissement 21 automatismes (15→24 exo chacun, +189 exercices)
- 19 figures SVG dans exercices PC Term ICCER (ch02, ch03, ch04, ch07)
- 68 activités de découverte créées (PC Seconde, maths 1ère, PC 1ère ICCER/ERA, PC Term ICCER/ERA)
- Fix liens cassés (6 retour sommaire, ~38 inter-chapitres Seconde)
- Création section CAP complète : 14 leçons + 14 exercices + 14 QCM + 14 fiches
- Pages sommaire CAP (maths-cap.html, pc-cap.html)
- 14 chapitres nouveaux groupements PC (gpt 2: champ magnétique, induction, triphasé; gpt 4: lentilles, image couleur, diffraction, transmission; gpt 5: pH, chimie organique, plastiques, savons, analyses; gpt 6: masse volumique, classification périodique)
- Extraction 9 programmes scolaires en markdown (Bac Pro maths 3 niveaux, PC 2nde + 1ère + Term 6 gpt, CAP maths + sciences, BTS maths)
- 7 prompts de filière (MEE, EEB/TGT, CAP MIT, CAP Ébéniste, CAP SDG + existants ICCER, ERA)
- Réorganisation page d'accueil (CAP, BTS, 6 groupements visibles)
- Mise à jour page groupements.html (liens vers chapitres existants)
- Fix corrections activités (83 fichiers onclick→toggle)
- Fix corrections CAP (7 fichiers toggle manquant)
- Bouton Imprimer sur 84 activités
- Ajout liens Activité dans 7 pages sommaire
- Fix capacité C5 manquante (ch12 Pythagore + ch13 Thalès) + 6 exercices + SVG
- SVG ajoutés dans exercices-capacités (ch01, ch03, ch05, ch06 — 8 figures)

### Session 3 avril 2026 (fin de journée)
- **Classe CSS `.mini-exo`** ajoutée dans `styles.css` — fond `var(--p-bg)`, bordure gauche `var(--p)`, label "Application" en petites capitales
- **`prompt-cours.md`** : section "Mini exercices" remplacée par la règle complète (format, position, fréquence, interdictions, checklist)
- **`CLAUDE.md`** : règle n°9 + entrée dans le tableau des classes CSS
- **Redistribution `.mini-exo` dans 28 leçons Seconde** (14 maths + 14 PC) :
  - Exercices groupés en fin de leçon → redistribués après les définitions/méthodes correspondantes
  - Format `.exo` + `exo-num` + `toggle()` → `.mini-exo` + `.bc` + `this.nextElementSibling`
  - `<details class="corr-wrap">` → `.bc` + `.corr` (maths seconde)
  - Résultat : 2 à 7 mini-exo distribués par leçon, 0 section groupée résiduelle

### Session 3 avril 2026 (Groupements PC)
- **42 nouveaux fichiers** pour les 14 chapitres gpt 2/4/5/6 : exercices.html + fiche.html + activite.html par chapitre
- **6 pages sommaire** créées : pc-1ere-gpt2, pc-term-gpt2, pc-1ere-gpt4, pc-term-gpt4, pc-term-gpt5, pc-1ere-gpt6
- **groupements.html** mis à jour avec liens vers les nouvelles pages sommaire

### Session 3 avril 2026 (CAP)
- **56 nouveaux fichiers CAP** : ds.html, interro.html, activite.html, exercices-capacites.html pour les 7 chapitres maths + 7 chapitres PC CAP → chaque chapitre passe à 8/8 fichiers
- **Leçons CAP améliorées** : mini-exo (3–4 par leçon) + erreurs fréquentes (3–4 items) dans les 14 leçons

### Session 3 avril 2026 (Terminale Bac Pro)
- **Mini-exercices** dans les 27 leçons Terminale (11 maths + 8 PC ICCER + 8 PC ERA) — 3 à 5 par leçon
- **Erreurs fréquentes** (`.erreur-item`) dans les 27 leçons — 4 à 5 erreurs par chapitre
- **`.situation`** dans les leçons qui en manquaient
- **Problématiques** ajoutées dans les 27 activités Terminale

### Session 3 avril 2026 (Première Bac Pro)
- **Mini-exercices** dans les 28 leçons Première (9 maths + 10 PC ICCER + 9 PC ERA) — 3 à 5 par leçon, distribués après chaque notion
- **Erreurs fréquentes** (`.erreur-item`) dans les 28 leçons — 4 à 5 erreurs par chapitre
- **`.situation`** dans les leçons maths + PC ERA qui en manquaient (ICCER déjà fait)
- **Problématiques** ajoutées dans les 28 activités Première (9 maths + 10 ICCER + 9 ERA)

### Session 3 avril 2026 (fin)
- **Diversification contextes PC Seconde** : +3 exercices sport/santé/énergie/environnement dans ch03, ch06, ch08, ch10, ch11, ch12 — ratio menuiserie réduit dans les 6 chapitres à 73–83%
- **`.situation` dans les 14 leçons PC Seconde** : 1 bloc par leçon ajouté (ch01–ch14), scénarios pro réels (menuisier, technicien, installateur)
- **Maths ch02 statistiques** : chapitre restructuré (372→561 lignes) — fréquences cumulées, tableau double entrée, histogramme ajoutés ; médiane/quartiles proprement renvoyés vers ch03
- **Erreurs fréquentes maths Seconde** : sections `.erreur-item` ajoutées dans ch02, ch03, ch09, ch10, ch11, ch12, ch13, ch14 (4–5 erreurs par chapitre)
- **Phase 2 plan-amelioration-seconde.md** : toutes les améliorations pédagogiques 2nde complètes

### Session 3 avril 2026 (suite)
- **Corrections techniques groupées 2nde MAMA** :
  - 13 titres `<title>` PC Seconde convertis en UTF-8
  - 80 fichiers PC Seconde (tous types, ch01–ch14) : 26 678 entités HTML → UTF-8
  - Labels ch04/ch05, lien ch12, badges niveaux maths → vérifiés conformes (rien à faire)
- **Audit + mise à jour problématiques** : bloc `Problématique` ajouté dans les 28 activités (14 maths + 14 PC Seconde) — critère rendu obligatoire par la mise à jour du prompt-activite.md
- **prompt-activite.md** : nouvelle section "Cohérence activité ↔ problématique (OBLIGATOIRE)" avec règles, interdictions, test de validation à 3 questions

### Session 2-3 avril 2026
- **Nouvelle section Maths Terminale générale spécialité (LGT)** : 15 chapitres complets (`maths/lgt-terminale/ch01..ch15`) — lecon.html + exercices-capacites.html pour chaque chapitre, 30 fichiers HTML créés
- Page sommaire `maths-lgt-terminale.html` + section "Lycée Général" sur `index.html`
- 16 figures SVG dans les cours LGT (géométrie, analyse, probabilités)
- 12 simulations interactives Canvas/JS intégrées dans les leçons (12/15 chapitres couverts) — +10 SVG supplémentaires ajoutés lors du renforcement de contenu (PRs #248, #250)
- Fix : liens Terminale PC manquants sur la page d'accueil
- Ajout bouton "Me contacter" (Google Form) dans la section À propos de `index.html`

### Session 1-2 avril 2026
- Sections "Erreurs fréquentes" (blocs `.erreur-item`) ajoutées dans 8 leçons maths Seconde : ch02 (statistiques), ch03 (médiane/IQR), ch09 (fonction affine), ch10 (fonction carré), ch11 (figures planes), ch12 (Pythagore), ch13 (Thalès), ch14 (solides)
- Phase 1 complète — conversion UTF-8 : ~17 000 entités HTML supprimées dans 42 fichiers PC Seconde (leçons, DS, exercices). Titres `<title>` uniformisés sur 13 leçons PC
- CLAUDE.md : règle n°9 ajoutée — UTF-8 obligatoire, entités HTML interdites sauf `&lt;` `&gt;` `&amp;` `&nbsp;`
- plan-amelioration-seconde.md : Phase 1 et Phase 2 clôturées (2026-04-02)
- Mise à jour mémoire filières (source ONISEP) : CAPs indépendants des Bac Pro 2nde, 3 Secondes pro, BTS en apprentissage, UPE2A, voie générale STI2D
- Source ajoutée dans `prompt-filiere-cap-sdg.md` (Arrêté du 16 octobre 2007)
- Copie `referentiel-cap-enseigne-signaletique-2007.pdf` dans `pdf/`
- Analyse des 3 PDFs BMA (BO n°28 du 15-7-2021 : maths, PC, épreuve)
- Copie des 3 PDFs BMA dans `pdf/` : `programme-bma-maths-2021.pdf`, `programme-bma-physique-chimie-2021.pdf`, `epreuve-bma-maths-pc-2021.pdf`
- Création 2 prompts de filière BMA : `prompt-filiere-bma-ebeniste.md`, `prompt-filiere-bma-arts-graphiques.md`
- CLAUDE.md : tableau des prompts complété (CAP MIT, CAP Ébéniste, CAP SDG, BMA Ébéniste, BMA Arts Graphiques, EEB/TGT, MEE)
- Création 2 extractions programme BMA en markdown : `programme_bma_maths.md` (9 modules, automatismes 1ère + 2ème année), `programme_bma_physique_chimie.md` (15 modules + transversaux)

### Session 31 mars 2026
- 15 SVG ajoutés dans exercices-capacités ch04/07/08/09/10 (arbres probas, courbes fonctions, paraboles)
- Audit exercices classiques maths Seconde : 517 exercices analysés
- Fix ch02 exercices.html : rééquilibrage appro (4→7) + 3 SVG
- Fix ch03 exercices.html : rééquilibrage appro (3→8) + 3 SVG, socle allégé (17→12)
- Fix ch09 exercices.html : +12 SVG intégrés (0→12, graphiques fonctions affines)
- **features.js** : barre de recherche (Ctrl+K), mode sombre (🌙), progression élève (✅ checkbox localStorage)
- JOURNAL.md créé (journal de bord du projet)
- 3 programmes extraits en markdown : PC 1ère 6 gpt, PC Term 6 gpt, BTS maths
- Ajout séries CAP dans nav.js (fil d'Ariane fonctionnel sur pages CAP)

---

## Prochaines priorités

> Mise à jour 2026-04-30 — voir aussi le récap consolidé en haut de section et les listes détaillées dans `audits/audit-global.md`, `audits/audit-technique.md`.

### Priorité 1 — Classes de cette année (2nde MAMA, Term ICCER, Term ERA-MA)
- [x] ~~Améliorer ch02, ch03 exercices.html (appro faible)~~ ✅ fait
- [x] ~~Ajouter SVG ch09 exercices.html~~ ✅ fait (12 SVG)
- [x] ~~Figures SVG PC Term ERA (ch02-08, comme fait pour ICCER)~~ ✅ fait (20 SVG : batteries, effet de serre, cinématique, corrosion, lumière, transmission, acoustique)

### Priorité 2 — CAP
- [x] ~~exercices-capacités (14 fichiers)~~ ✅ créés
- [x] ~~DS (14 fichiers)~~ ✅ créés
- [x] ~~Interro (14 fichiers)~~ ✅ créés
- [x] ~~Activités (14 fichiers)~~ ✅ créés

### Priorité 3 — 6 groupements PC
- [x] ~~Exercices pour 14 nouveaux chapitres (gpt 2/4/5/6)~~ ✅ exercices.html + fiche.html + activite.html créés
- [x] ~~Pages sommaire par groupement~~ ✅ 6 pages créées (pc-1ere/term-gpt2/4/5/6) + groupements.html mis à jour

### Priorité 4 — BTS
- [ ] Compléter ch19-25 (exercices, DS)
- [ ] Remplir les DS vides (ch01-18)

### Priorité 5 — Section CAPLP (nouveau)
- [ ] Créer `prompts/prompt-caplp.md` (format des leçons CAPLP)
- [ ] Créer section `caplp/maths/` + `caplp/pc/`
- [ ] A.1 maths commun (~14 chapitres) — Sonnet suffisant
- [ ] A.2 maths majeure (~8 chapitres) — Opus préférable
- [ ] B.1 + B.2 PC (~30 chapitres) — après

### Priorité 6 — Améliorations continues
- [ ] Enrichir exercices Première (maths ~13/ch, PC ~9/ch)
- [ ] Automatismes PC (pas encore créés)
- [ ] Co-intervention pour toutes les filières

### Priorité 7 — Hygiène et chantiers transverses (relevé 2026-04-30)
- [ ] Convertir entités HTML → UTF-8 dans les ~125 fichiers concernés (CAP, BTS, PC première/terminale, première maths)
- [x] ~~Reformuler le sigle dans `maths/terminale/ch10/qcm.html:529`~~ ✅ fait 30/04
- [ ] Déployer le timestamp `.maj` (règle #10) dans les sections où il manque (PC première/terminale, CAP, première maths) — 86/1 103 fichiers actuellement (vs 82 le 30/04 matin)
- [x] ~~Ajouter un mini-exo dans `physique-chimie/premiere-era/ch10/lecon.html`~~ ✅ fait 30/04 (3 mini-exo)
- [ ] LGT Terminale : créer exercices/ds/fiche/qcm/interro pour les 15 chapitres
- [ ] Groupements PC (gpt 2/4/5/6) : créer ds.html sur les 14 chapitres + qcm/interro/exercices-capacites
- [x] ~~Référencer les 8 nouvelles simulations bois/agencement (24 avril) + 2 simulations CTN/PT100 (7 avril) dans `simulations.html`~~ ✅ fait 30/04 — liaison aux chapitres partielle (3/8) à terminer

---

## Décisions et conventions

- **Groupements maths :** tous les Bac Pro du lycée sont en groupement B
- **Contextes pro :** mixer les filières (~25% chacune + quotidien + brut), ne pas cloisonner
- **Pas d'impression pour les simulations**
- **Bouton Imprimer sur les activités**
- **Amélioration :** ajouter, modifier OU remplacer — pas juste empiler du nouveau
- **Sigles interdits dans le contenu pédagogique** (ICCER, ERA, etc. → noms de métiers réels)
- **Un chapitre = un module** (pas de duplication entre groupements)
- **Programme en markdown** = référence obligatoire avant de créer du contenu

---

## Filières du lycée

| Formation | Sigle | Maths | PC | Sur le site |
|---|---|---|---|---|
| Bac Pro ICCER | ICCER | B | 1 | ✅ |
| Bac Pro MEE | MEE | B | 1 | ✅ (même prog) |
| Bac Pro ERA | ERA | B | 3 | ✅ |
| Bac Pro TMA | TMA | B | 3 | ✅ |
| Bac Pro EEB | EEB | B | 3 | ✅ (même prog) |
| Bac Pro Géomètre | ex-TGT | B | 6 | Leçons seules |
| CAP MIT | MIT | gpt 1 | commun | ✅ (4 fichiers/ch) |
| CAP Ébéniste | — | gpt 1 | commun | ✅ |
| CAP SDG | SDG | gpt 1 | commun | ✅ |
| BMA Ébéniste | — | — | — | ❌ |
| BMA Graphisme | — | — | — | ❌ |
| BTS MGTMN | — | — | — | Partiel |

**Classes 2025-2026 :** 2nde MAMA, Terminale ICCER, Terminale ERA-MA
