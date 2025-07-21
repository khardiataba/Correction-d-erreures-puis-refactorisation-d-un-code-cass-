# Correction-d-erreures-puis-refactorisation-d-un-code-cassé
# 💳 Projet : Carte de Prix Responsive

## 📌 Objectif
Transformation d’un code de carte de prix défaillant en composant réutilisable via la correction et le refactoring assistés par l’IA.
---

## 🔍 Étape 1 : Problèmes initiaux constatés

Voici quelques erreurs ou points d’amélioration identifiés :

- ❌ `box-shadow` mal appliqué
- ❌ Titre `<h2>` mal fermé
- ❌ Bouton non accessible (absence d’attribut `aria-label`)
- ❌ Structure non réutilisable (composant codé en dur)
- ❌ Aucun effet d’animation visuelle à l’apparition

### 📸 Captures d’écran (avant)

---

## ✅ Étape 2 : Version corrigée

Le code a été nettoyé et amélioré :
- ✅ Fermeture correcte des balises HTML
- ✅ Accessibilité du bouton améliorée
- ✅ Structure CSS rendue plus cohérente
- ✅ Mise en page responsive avec `@media`

---

## 🛠️ Étape 3 : Refactorisation

Le composant a été réorganisé pour être réutilisable :
- 🧱 Fonction `createPricingCard(title, price, features)`
- 🔘 Fonction `createButton(text, url)`
- 💫 Animation d’apparition avec `@keyframes`
- ✨ Meilleure organisation : séparation du CSS et JS
  
---

## 🚀 Résultat final

Les cartes de prix apparaissent avec une animation fluide. Le code est :
- Réutilisable
- Sémantiquement correct
- Accessible
- Responsive

---

## 📦 Technologies

- HTML5
- CSS3 (Flexbox, animation)
- JavaScript ES6+

---

## 👩‍💻 Auteur

Projet réalisé dans le cadre d’un entraînement aux **meilleures pratiques de développement frontend assisté par l’IA**.
