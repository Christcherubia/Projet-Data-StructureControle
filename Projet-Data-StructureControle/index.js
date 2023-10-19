// Tableau, contenant des objets, avec index 
let table = [
    {
        name: "Daniel",
        age: 25,
        admin: false,
    },

    {
        name: "Jesus",
        age: 33,
        admin: true,
    },

    {
        name: "Samia",
        age: 24,
        admin: false,
      },

      {
        name: "Nikolas",
        age: 42,
        admin: true,
      },
];

const resultElement = document.getElementById('result');

// Structures de contrôle
if (table[0].age > table[1].age) { // les if sont suivi de "()" et ensuite de "{}" c'est comme ça qu'on déclare.
   resultElement.textContent = table[0].name + " est plus âgé que " + table[1].name;
} else if (table[1].age > table[2].age) {
    resultElement.textContent = table[1].name + " est plus âgé que " + table[2].name;
  } else if (table[2].age > table[3].age) {
    resultElement.textContent = table[2].name + " est plus âgé que " + table[3].name;
  } else {
    resultElement.textContent = "Tous les âges sont égaux ou dans un autre arrangement.";
  }


// Le code ci-dessus récupère l'élément HTML avec l'id "result" en utilisant 
// document.getElementById("result") et stocke une référence à cet élément dans la variable resultElement. 
// Ensuite, en fonction de la comparaison d'âge, il définit le contenu de cet élément en utilisant la propriété textContent.