const nonVegPickles = [

    {
        name: "Chicken Pickle",
        description: "Spicy and flavorful chicken pickle.",
        time: "40 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/a9/44/01/a94401f93360821daf8601e90a9536fb.jpg"
    },

    {
        name: "Mutton Pickle",
        description: "Traditional spicy pickle made with mutton.",
        time: "50 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/736x/45/ba/b8/45bab84c6275c39de96608149be808a5.jpg"
    },

    {
        name: "Fish Pickle",
        description: "Spicy fish pickle with a tangy flavour.",
        time: "40 min",
        difficulty: "Medium",
        image:"https://i.pinimg.com/1200x/a7/22/86/a72286a8cb5eec50462ba78274cdcaab.jpg"
    },

    {
        name: "Prawn Pickle",
        description: "Tasty and spicy pickle made with prawns.",
        time: "35 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/11/af/f6/11aff6ab1c4c2a0c9c7ad8956ce513da.jpg"
    },

    {
        name: "Chicken Gongura Pickle",
        description: "Spicy chicken pickle combined with gongura.",
        time: "45 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/6e/18/ee/6e18eed919884f3f32967a93d8af90aa.jpg"
    },

    {
        name: "Mutton Gongura Pickle",
        description: "Flavorful mutton pickle with tangy gongura.",
        time: "50 min",
        difficulty: "Hard",
        image: "https://i.pinimg.com/736x/71/f4/44/71f444824e192187ced4d64b5a4b0250.jpg"
    },

    {
        name: "Fish Gongura Pickle",
        description: "Tangy and spicy fish pickle with gongura.",
        time: "40 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/736x/f5/e4/de/f5e4de5db9eb5c144e334a624f825d10.jpg"
    },

    {
        name: "Prawn Gongura Pickle",
        description: "Spicy prawns cooked with gongura and spices.",
        time: "40 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/14/26/83/1426834c9022956d9e1a3e8bce1381ad.jpg"
    },

    {
        name: "Chicken Garlic Pickle",
        description: "Spicy chicken pickle with garlic and Indian spices.",
        time: "45 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/1200x/ce/f5/8d/cef58dcfaaabda8ec53026999ee5a4c2.jpg"
    },

    {
        name: "Fish Garlic Pickle",
        description: "Tasty fish pickle prepared with garlic and spices.",
        time: "40 min",
        difficulty: "Medium",
        image: "https://i.pinimg.com/736x/fa/33/d4/fa33d419b82a754c3cc5840dc064e095.jpg"
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
                : `<div class="no-image">🍗</div>`
            }

            <div class="card-content">

                <span class="tag nonveg-tag">NON-VEG PICKLE</span>

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


displayRecipes(nonVegPickles);


const searchInput =
    document.getElementById("nonVegPickleSearch");


searchInput.addEventListener("input", function () {

    const searchText =
        searchInput.value.toLowerCase().trim();


    const filteredRecipes =
        nonVegPickles.filter(recipe => {

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