# Caramblagues

Bienvenue sur **Caramblagues**, la page la plus sucrée du web pour déguster des blagues façon Carambar.  
Cette landing page simple et statique permet de générer des blagues aléatoires… sans risquer une carie !

## 🎯 Objectif

Afficher aléatoirement des blagues (format devinette) issues d’une base de données, via une API backend dédiée.  
Une interface simple et amusante, dans l’esprit des fameux emballages de bonbons.

## 🚀 Démo en ligne

👉 [Achapeau.github.io](https://Achapeau.github.io) _(GitHub Pages)_  
👉 [Voir la documentation API (Swagger)](https://ton-back/api-docs)

## ⚙️ Fonctionnement

- Interface statique (HTML/CSS/JS Vanilla)
- Un bouton unique pour générer une blague aléatoire
- Les blagues sont récupérées via `fetch` sur l’endpoint `/jokes/random` de l'API backend
- Un lien vers la documentation Swagger est accessible en bas de page

## 📁 Arborescence minimale

    ```bash
    caramblagues-front/
    ├── index.html
    ├── style.css
    ├── README.md
    ├── services/
    │   └── fetch.js
    └── img/
        └── carambar-homepage.webp
    ```

## 🔗 À propos du backend

Le backend est développé en Express.js et exposé via une API REST.  
La documentation des routes est disponible via Swagger à l’adresse mentionnée dans le footer.

---

**🥳 Merci de votre visite et bonne blague !**
