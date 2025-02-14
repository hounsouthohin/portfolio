// Tableau de descriptions
const descriptions = [
    "Salut! je m'appelle Arthur, étudiant en technique de l'informatique.",
    "Je suis passionné par la création de solutions innovantes.",
    "Je m'intéresse particulièrement au développement web et mobile.",
    "Je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences."
  ];
  
  // Fonction pour afficher le texte progressivement
  function typeText(elementId, text, speed = 50) { // Augmenter la vitesse
    const element = document.getElementById(elementId);
    let i = 0;
  
    function type() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }
  
  // Appel initial pour afficher le premier texte
  let currentIndex = 0;
  typeText('dynamicDescription', descriptions[currentIndex]);
  
  // Si vous souhaitez changer le texte à intervalles réguliers
  setInterval(() => {
    const descriptionElement = document.getElementById('dynamicDescription');
    descriptionElement.textContent = ''; // Effacer le texte actuel
    currentIndex = (currentIndex + 1) % descriptions.length; // Passer à la phrase suivante
    typeText('dynamicDescription', descriptions[currentIndex]);
  }, 5000); // Changer le texte toutes les 5 secondes
  