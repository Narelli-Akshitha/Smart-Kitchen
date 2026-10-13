const snackRecipe = [
    {
        name: "Palak Pakoda",
        image: "https://i.pinimg.com/736x/7b/7a/27/7b7a277c2f71152d6e96b794bcad7846.jpg",
        description: "Crispy homemade snack made with gram flour and onions.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Onion Pakoda",
        image: "https://i.pinimg.com/736x/58/29/c7/5829c79a901716ce539984bde225c4d1.jpg",
        description: "Crispy onion fritters made with gram flour and spices.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Punugulu",
        image: "https://i.pinimg.com/736x/43/ac/e8/43ace8a5f06dc909270c687ddc35098e.jpg",
        description: "Crispy fried snack made with dosa or idli batter.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Bajji",
        image: "https://i.pinimg.com/736x/29/06/2d/29062da5318ad4b667ad6e6626c63ce9.jpg",
        description: "Crispy vegetable fritters coated with gram flour batter.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Mirchi Bajji",
        image: "https://i.pinimg.com/1200x/32/df/20/32df2012c0ad9a170e2a54be99cc6649.jpg",
        description: "Spicy green chillies coated with gram flour batter and fried.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Aloo Bajji",
        image: "https://i.pinimg.com/736x/55/d9/f1/55d9f175ec5c75dc07e9568ecb71979b.jpg",
        description: "Potato slices coated with spiced gram flour batter and fried.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Bread Pakoda",
        image: "https://i.pinimg.com/736x/4e/f0/52/4ef0525ccd5a2ef92a55925c601d5742.jpg",
        description: "Bread coated with gram flour batter and fried until crispy.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Vada",
        image: "",
        description: "Crispy deep-fried snack made with urad dal.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Masala Vada",
        image: "",
        description: "Crispy dal fritters made with chana dal, onions and spices.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Mysore Bonda",
        image: "",
        description: "Soft and crispy fried snack made with maida and spices.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Garelu",
        image: "",
        description: "Crispy traditional South Indian snack made with urad dal.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Boondi",
        image: "",
        description: "Small crispy gram flour balls fried and seasoned with spices.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Chakli",
        image: "",
        description: "Crispy spiral-shaped homemade snack made with rice flour.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Murukku",
        image: "",
        description: "Crunchy South Indian snack made with rice flour and spices.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Chekkalu",
        image: "",
        description: "Crispy flat snack made with rice flour, dal and spices.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Nippattu",
        image: "",
        description: "Crunchy flat snack made with rice flour and peanuts.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Atukula Mixture",
        image: "",
        description: "Crispy poha mixed with peanuts, curry leaves and spices.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Peanut Chaat",
        image: "",
        description: "Boiled peanuts mixed with onion, tomato, chilli and lemon.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Corn Chaat",
        image: "",
        description: "Sweet corn mixed with vegetables, spices and lemon.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Potato Chips",
        image: "",
        description: "Thin crispy potato slices seasoned with salt and spices.",
        time: "20 min",
        difficulty: "Easy"
    }
];


const recipeGrid = document.getElementById("recipeGrid");


function displayRecipes(recipes) {

    recipeGrid.innerHTML = "";

    recipes.forEach(recipe => {

        const card = document.createElement("article");

        card.className = "recipe-card";

        card.innerHTML = `

            ${recipe.image
                ? `<img src="${recipe.image}" alt="${recipe.name}" loading="lazy">`
                : `<div class="no-image">🍽️</div>`
            }

            <div class="card-content">

                <span class="tag">SNACK</span>

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


// ==========================================
// SHOW ALL SNACK RECIPES
// ==========================================

displayRecipes(snackRecipe);


// ==========================================
// SEARCH RECIPES
// ==========================================

const searchInput = document.getElementById("snackSearch");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        const filteredRecipes = snackRecipe.filter(recipe => {

            return (
                recipe.name.toLowerCase().includes(searchText) ||
                recipe.description.toLowerCase().includes(searchText)
            );

        });

        displayRecipes(filteredRecipes);

    });

}