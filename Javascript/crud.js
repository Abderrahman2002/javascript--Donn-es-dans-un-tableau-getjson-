import { productsarray } from "./index.js"; // Assurez-vous que le chemin est correct
let lireProduits = () => {
    let container = document.getElementById('products-container');
    let productsHTML = productsarray.map(product => `
        <div class="col-md-3 d-inline-block"> 
            <div class="card mb-4 shadow-sm animated-card" style="width: 100%;"> <!-- Ajout de la classe d'animation -->
                <img src="${product.thumbnail}" class="card-img-top animated-image" alt="${product.title}" style="max-width: 100%; height: auto;">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">Price: ${product.price}</p>
                </div>
            </div>
        </div>
    `).join(''); // Join the array of HTML strings into a single string

    container.innerHTML = productsHTML; // Insert the HTML into the container
}


let lireUnProduit = (productId) => {
    let container = document.getElementById('products-container');
    let product = productsarray.find(p => p.id === productId);

    if (product) {
        let productHTML = `
            <div class="col-md-3 d-inline-block"> <!-- {{ edit_2 }} -->
                <div class="card mb-4 shadow-sm" style="width: 100%;"> <!-- Réduire la largeur de la carte -->
                    <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="max-width: 100%; height: auto;">
                    <div class="card-body">
                        <h5 class="card-title">${product.title}</h5>
                        <p class="card-text">Price: ${product.price}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML = productHTML; // Insert the HTML into the container
    } else {
        container.innerHTML = "<p class='text-danger'>Produit non trouvé</p>"; // Message if product not found
    }
}

// // Appeler la fonction pour afficher un produit spécifique
lireUnProduit(0); // Remplacez 1 par l'ID du produit que vous souhaitez afficher

// Appeler la fonction pour afficher les produits
lireProduits();

// ... existing code ...












// Fonction pour afficher un produit
let lireprodui = (produit) => {
    return `<div class='col-md-3'>
                <div class="card mb-4 shadow-sm" style="width: 100%;">
                    <img src="${produit.thumbnail}" class="card-img-top" alt="${produit.title}" style="max-width: 100%; height: auto;">
                    <div class="card-body">
                        <h5 class="card-title">${produit.title}</h5>
                        <p class="card-text">Price: ${produit.price}</p>
                    </div>
                </div>
            </div>`;
};

// Fonction pour charger et afficher tous les produits
let lireAllproduit = () => {
    $.getJSON("data.json", function(data) {
        // Vider le contenu existant
        document.getElementById('contenu').innerHTML = '';

        // Parcourir les données et les afficher
        data.forEach(element => {
            const item = lireprodui(element);
            document.getElementById('contenu').innerHTML += item;
        });
    })
    .fail(function(jqxhr, textStatus, error) {
        // Gestion des erreurs
        var err = textStatus + ", " + error;
        console.error("Request Failed: " + err);
    });
}

// Appeler la fonction pour charger et afficher les produits
lireAllproduit();