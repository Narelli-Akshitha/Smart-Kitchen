const vegPickles = [

    {
        name: "Mango Pickle",
        description: "Spicy and tangy traditional mango pickle.",
        time: "20 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/736x/5b/c5/03/5bc503480e92b5521ec3d03b674b81ec.jpg",
    },

    {
        name: "Lemon Pickle",
        description: "Tangy lemon pickle with a spicy flavour.",
        time: "20 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/736x/3b/40/29/3b4029da3f0a8d103d6c62dc66f7e633.jpg",
    },

    {
        name: "Gongura Pickle",
        description: "Popular Andhra-style pickle made with gongura leaves.",
        time: "30 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/71/c2/d4/71c2d4e9d41bcd62f8dba470175937a0.jpg",
    },

    {
        name: "Tomato Pickle",
        description: "Spicy tomato pickle that goes well with rice.",
        time: "25 min",
        difficulty: "Easy",
        image:"https://i.pinimg.com/736x/20/09/a8/2009a8f6131655c089aa87e66ec0b0fb.jpg",
    },

    {
        name: "Onion Pickle",
        description: "Spicy and flavorful pickle made with fresh Onions.",
        time: "20 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/736x/11/2b/0b/112b0bfe635e4b15556037bf86457e4a.jpg",
    },

    {
        name: "Amla Pickle",
        description: "Tangy and spicy pickle made with amla.",
        time: "25 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/736x/a7/dd/a8/a7dda840969ca1c2023bbc6bab5e5169.jpg"
    },

    {
        name: "Bitter gourd Pickle",
        description: "Hot and spicy bitter gourd pickle.",
        time: "20 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/1200x/d8/b5/7e/d8b57ecfcfc58686cb367ebf7a002f41.jpg"
    },

    {
        name: "Ginger Pickle",
        description: "Strong and tasty ginger pickle with spices.",
        time: "25 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/06/96/1b/06961b213f421f24428f9f6a8f869e68.jpg",
    },

    {
        name: "Carrot Pickle",
        description: "Crunchy and spicy carrot pickle.",
        time: "20 min",
        difficulty: "Easy",
        image: "https://i.pinimg.com/736x/99/8a/2d/998a2d2e3b458cc773cde414032d1233.jpg",
    }

];


const recipeGrid = document.getElementById("recipeGrid");


function displayRecipes(recipes) {

    recipeGrid.innerHTML = "";

    recipes.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        card.innerHTML = `

            ${
                recipe.image
                ? `<img src="${recipe.image}" alt="${recipe.name}" loading="lazy">`
                : `<div class="no-image">🥭</div>`
            }

            <div class="card-content">

                <span class="tag">VEG PICKLE</span>

                <h3>${recipe.name}</h3>

                <p>${recipe.description}</p>

                <div class="recipe-meta">

                    <span>⏱️ ${recipe.time}</span>

                    <span>⭐ ${recipe.difficulty}</span>

                </div>

                <button class="view-btn">
                    View Recipe →
                </button>

            </div>
        `;

        recipeGrid.appendChild(card);

    });

}


displayRecipes(vegPickles);


const searchInput = document.getElementById("vegPickleSearch");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredRecipes = vegPickles.filter(recipe => {

        return (

            recipe.name
                .toLowerCase()
                .includes(searchText)

            ||

            recipe.description
                .toLowerCase()
                .includes(searchText)

        );

    });


    displayRecipes(filteredRecipes);

});