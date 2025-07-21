// 🔘 Bouton réutilisable
function createButton(text, url) {
  const btn = document.createElement('a');
  btn.className = 'btn';
  btn.href = url;
  btn.textContent = text;
  btn.setAttribute('aria-label', text);
  return btn;
}

// 📦 Composant carte
function createCard(title, price, features, buttonText, buttonUrl) {
  const card = document.createElement('section');
  card.className = 'pricing-card';
  card.setAttribute('role', 'region');
  card.setAttribute('aria-label', title);

  const h2 = document.createElement('h2');
  h2.className = 'pricing-title';
  h2.textContent = title;

  const p = document.createElement('p');
  p.className = 'pricing-price';
  p.textContent = price;

  const ul = document.createElement('ul');
  ul.className = 'features';
  features.forEach(feat => {
    const li = document.createElement('li');
    li.textContent = feat;
    ul.appendChild(li);
  });

  const btn = createButton(buttonText, buttonUrl);

  card.append(h2, p, ul, btn);
  return card;
}

// 📄 Données (français et anglais)
const cardsData = {
  fr: [
    {
      title: 'Forfait de base',
      price: '9,99 € / mois',
      features: ['1 Go de stockage', 'Assistance de base', 'Toutes les fonctionnalités principales'],
      buttonText: 'Démarrer l’essai',
      buttonUrl: '#'
    },
    {
      title: 'Forfait Pro',
      price: '19,99 € / mois',
      features: ['10 Go de stockage', 'Support premium', 'Analytique avancée'],
      buttonText: 'Choisir le Pro',
      buttonUrl: '#'
    }
  ],
  en: [
    {
      title: 'Basic Plan',
      price: '$9.99 / month',
      features: ['1 GB storage', 'Basic support', 'Core features included'],
      buttonText: 'Start Free Trial',
      buttonUrl: '#'
    },
    {
      title: 'Pro Plan',
      price: '$19.99 / month',
      features: ['10 GB storage', 'Premium support', 'Advanced analytics'],
      buttonText: 'Choose Pro',
      buttonUrl: '#'
    }
  ]
};

// 🧩 Création des cartes dynamiques
let currentLang = 'fr';
const container = document.getElementById('cards-container');

function renderCards(lang) {
  container.innerHTML = '';
  cardsData[lang].forEach(data => {
    const card = createCard(data.title, data.price, data.features, data.buttonText, data.buttonUrl);
    container.appendChild(card);
  });
}

// 🌙 Basculer le thème
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const mode = document.body.classList.contains('dark') ? '☀️ Mode clair' : '🌙 Mode sombre';
  document.getElementById('themeToggle').textContent = mode;
});

// 🌍 Basculer la langue
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  document.getElementById('langToggle').textContent = currentLang === 'fr' ? '🌍 Traduire' : '🌐 Translate';
  renderCards(currentLang);
});

// 🔃 Afficher au chargement
renderCards(currentLang);
