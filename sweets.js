const sweetRecipe = [
    {
        name: "Gulab Jamun",
        image: "https://i.pinimg.com/736x/3d/b8/e1/3db8e1741bd68b1023d5000060410198.jpg",
        description: "Soft and delicious sweet balls soaked in sugar syrup.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Rava Kesari",
        image: "https://i.pinimg.com/1200x/86/b9/f0/86b9f0153e272e380e9b50181ddfc93e.jpg",
        description: "Traditional South Indian sweet made with rava, sugar and ghee.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Payasam",
        image: "https://i.pinimg.com/1200x/f0/d0/39/f0d039154bbb67518331f7cd71a495c7.jpg",
        description: "Creamy traditional dessert made with milk, rice and sugar.",
        time: "30 min",
        difficulty: "Easy"
    },
    {
        name: "Carrot Halwa",
        image: "https://i.pinimg.com/736x/fc/ab/4b/fcab4bb6c964cf2bfc4e7ebbcdfc9beb.jpg",
        description: "Sweet dessert made with grated carrots, milk, sugar and ghee.",
        time: "35 min",
        difficulty: "Medium"
    },
    {
        name: "Coconut Laddu",
        image: "https://i.pinimg.com/1200x/39/95/e4/3995e4d51c0bda37f3caf76ff72eaea9.jpg",
        description: "Easy homemade laddus made with coconut, sugar and milk.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Besan Laddu",
        image: "https://i.pinimg.com/736x/4e/65/3e/4e653eade20cc6dcb52372ffdc6fd45c.jpg",
        description: "Traditional laddus made with gram flour, sugar and ghee.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Poha Laddu",
        image: "https://i.pinimg.com/736x/a2/0b/3f/a20b3fd677752e735ad1f70b8e5fb20d.jpg",
        description: "Simple and tasty laddus made with poha, sugar and ghee.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "kalakand",
        image: "https://i.pinimg.com/736x/9f/38/e1/9f38e14d385ed38c974fad0abf2da9db.jpg",
        description: "Creamy vermicelli dessert made with milk, sugar and dry fruits.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Sweet Pongal",
        image: "https://i.pinimg.com/736x/be/5e/61/be5e610363f4e970fc0c2401229d2548.jpg",
        description: "Traditional sweet made with rice, moong dal, jaggery and ghee.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Ariselu",
        image: "https://i.pinimg.com/736x/15/b7/45/15b7453f31ab2392128a2cf144244c20.jpg",
        description: "Traditional Telangana sweet made with rice flour and jaggery.",
        time: "40 min",
        difficulty: "Medium"
    },
    {
        name: "Boondi Laddu",
        image: "https://i.pinimg.com/236x/a5/6e/8b/a56e8b0d86aaa233fc2b83cc67b75c64.jpg",
        description: "Sweet round laddus made from gram flour boondi and sugar syrup.",
        time: "35 min",
        difficulty: "Medium"
    },
    {
        name: "Mysore Pak",
        image: "https://i.pinimg.com/736x/9d/45/9b/9d459b73620a1193ad7a36393d316c01.jpg",
        description: "Rich traditional sweet made with gram flour, ghee and sugar.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "Kova",
        image: "https://i.pinimg.com/1200x/20/7e/dc/207edcee290b332a0e3a94baef0eeda0.jpg",
        description: "Milk-based sweet with a rich and creamy texture.",
        time: "40 min",
        difficulty: "Medium"
    },
    {
        name: "Puran Poli",
        image: "https://i.pinimg.com/1200x/bb/1e/4e/bb1e4eaead86a97a9624fa861559206b.jpg",
        description: "Soft sweet flatbread stuffed with jaggery and dal filling.",
        time: "40 min",
        difficulty: "Medium"
    },
    {
        name: "Double Ka Meetha",
        image: "https://i.pinimg.com/736x/0a/f8/3b/0af83bf1d5d1843a7c83e800916f1998.jpg",
        description: "Hyderabadi dessert made with bread, milk, sugar and dry fruits.",
        time: "30 min",
        difficulty: "Medium"
    },
    {
        name: "putharakulu",
         image: "https://i.pinimg.com/1200x/d0/36/80/d03680e94c544e8bab2be5eb676711c8.jpg",
        description: "Bread dessert prepared with sweetened milk and dry fruits.",
        time: "25 min",
        difficulty: "Easy"
    },
    {
        name: "Rice Kheer",
        image: "https://i.pinimg.com/736x/27/73/e4/2773e40e0789c8c8a66ce5c9e7a828a3.jpg",
        description: "Creamy rice pudding made with milk, sugar and cardamom.",
        time: "30 min",
        difficulty: "Easy"
    },
    {
        name: "Sesame Laddu",
        image: "https://i.pinimg.com/736x/e3/14/b3/e314b3f8fbd62ca155dba0924baaf56d.jpg",
        description: "Healthy traditional laddus made with sesame seeds and jaggery.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Peanut Laddu",
        image: "https://i.pinimg.com/736x/9a/c9/7a/9ac97a1bee818a4bbc85df7aef45fda5.jpg",
        description: "Simple laddus made with roasted peanuts and jaggery.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Milk Peda",
        image: "https://i.pinimg.com/736x/a4/b6/83/a4b683690e6c3c5d9b43b668f2ef19e9.jpg",
        description: "Soft and creamy milk sweet flavored with cardamom.",
        time: "25 min",
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
                : `<div class="no-image">🍬</div>`
            }

            <div class="card-content">

                <span class="tag">SWEET</span>

                <h3>${recipe.name}</h3>

                <p>${recipe.description}</p>

                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time}</span>
                    <span>⭐ ${recipe.difficulty}</span>
                </div>

                <button class="view-btn" onclick="viewRecipe('Gulab Jamun')">
                 View Recipe →
                </button>

            </div>
        `;

        recipeGrid.appendChild(card);

    });
}


// ==========================================
// SHOW ALL SWEET RECIPES
// ==========================================

displayRecipes(sweetRecipe);


// ==========================================
// SEARCH RECIPES
// ==========================================

const searchInput = document.getElementById("sweetSearch");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        const filteredRecipes = sweetRecipe.filter(recipe => {

            return (
                recipe.name.toLowerCase().includes(searchText) ||
                recipe.description.toLowerCase().includes(searchText)
            );

        });

        displayRecipes(filteredRecipes);

    });

}function viewRecipe(name) {

    const recipe = recipeDetails[name];

    if (!recipe) {
        alert("Recipe details not available.");
        return;
    }

    const ingredients = recipe.ingredients
        .map(item => `<li>${item}</li>`)
        .join("");

    const steps = recipe.steps
        .map((step, index) => `<li>${step}</li>`)
        .join("");

    const recipeWindow = window.open("", "_blank");

    recipeWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>${name} - Student Kitchen</title>

            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #E8F5E9;
                    margin: 0;
                    padding: 40px;
                }

                .recipe-box {
                    max-width: 700px;
                    margin: auto;
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                }

                h1 {
                    color: #1B5E20;
                    text-align: center;
                }

                h2 {
                    color: #2E7D32;
                    margin-top: 25px;
                }

                li {
                    margin: 10px 0;
                }
            </style>
        </head>

        <body>

            <div class="recipe-box">

                <h1>🍬 ${name}</h1>

                <h2>Ingredients</h2>

                <ul>
                    ${ingredients}
                </ul>

                <h2>Preparation</h2>

                <ol>
                    ${steps}
                </ol>

            </div>

        </body>
        </html>
    `);

    recipeWindow.document.close();
}const recipeDetails = {
    "Gulab Jamun": {
        ingredients: [
            "1 cup milk powder",
            "1/4 cup maida",
            "2 tbsp milk",
            "1/2 tsp baking powder",
            "Oil for frying",
            "1 cup sugar",
            "1 cup water",
            "2 cardamom"
        ],

        steps: [
            "Mix milk powder, maida and baking powder.",
            "Add milk little by little and make a soft dough.",
            "Make small round balls from the dough.",
            "Heat oil and fry the balls until golden brown.",
            "Prepare sugar syrup using sugar, water and cardamom.",
            "Put the fried balls into the warm sugar syrup.",
            "Let them soak for 1–2 hours and serve."
        ]
    }
};