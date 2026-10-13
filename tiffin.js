const tiffinRecipie=[
{
        name: "Idli",
        image: "https://i.pinimg.com/1200x/ef/2f/cb/ef2fcbf03d24969cc9277990d6363b24.jpg",
        description: "Soft steamed rice cakes served with chutney and Sambar.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Bonda",
        image: "https://i.pinimg.com/736x/97/70/70/97707021e0152d1d8536155711074510.jpg",
        description: "Soft and fiffy fried snacks.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Rava Bonda",
        image: "https://i.pinimg.com/736x/66/b8/4e/66b84ec46033172e095f7c5f27593848.jpg",
        description: "Crispy Bonda made with Rava.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Dosa",
        image: "https://i.pinimg.com/1200x/7f/6d/3e/7f6d3ebdca842e61864b698a277c5418.jpg",
        description: "Thin and Crispy rice Dosa.",
        time: "5 min",
        difficulty: "Easy"
    },
    {
        name: "Masala Dosa",
        image: "https://i.pinimg.com/1200x/40/ec/70/40ec703990a64b9c275cdfd273c7f154.jpg",
        description: "crispy Dosa filled with flavorful Potatos and Onion Masala.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Onion Dosa",
        image: "https://i.pinimg.com/736x/40/44/96/404496f23a3460b0c5e77cc833a181d0.jpg",
        description: "Dosa topped with Onion.",
        time: "10 min",
        difficulty: "Easy"
    },
     {
        name: "Rava Dosa",
        image: "https://i.pinimg.com/1200x/51/f8/7f/51f87f5951a0d37152ecf3ac03115124.jpg",
        description: " Crispy Dosa made with Rava.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Egg Dosa",
        image: "https://i.pinimg.com/736x/e3/44/bf/e344bf2c5a0f800487bd9672aada2d0c.jpg",
        description: " Crispy egg Dosa made with Eggs.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Poori",
        image: "https://i.pinimg.com/1200x/d2/6a/c4/d26ac4f45a0ea7cab4af8f0849000498.jpg    ",
        description: "Puffed fried wheat bread.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Poha",
        image: "https://i.pinimg.com/1200x/00/d9/8a/00d98aef2c9b70f75e92ebcdcc44289a.jpg",
        description: "Light breakfast made with fluttened rice and spicies.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Upma",
        image: "https://i.pinimg.com/736x/f4/1b/7a/f41b7a150159fc9fc516f7a3cdacdda6.jpg",
        description: "Soft dish made with rava and vegetables.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Uttapam",
        image: "https://i.pinimg.com/1200x/8e/02/ce/8e02ceee44f6213f1657c5ba0d8bd2dc.jpg",
        description: "Thick ans soft dosa.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Pongal",
        image: "https://i.pinimg.com/1200x/b6/b7/f0/b6b7f056042477fc6341e96782d7f803.jpg",
        description: "soft rice and dal dish.",
        time: "15 min",
        difficulty: "Easy"
    },
    {
        name: "Chapathi",
        image: "https://i.pinimg.com/736x/e2/e4/52/e2e4529067bb01560c3c4362338a0885.jpg",
        description: "soft flatbread made with wheat flour.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Pesarattu",
        image: "https://i.pinimg.com/1200x/31/b5/ee/31b5eea6f4636d2611b4fbbbca4b22bf.jpg",
        description: "Dosa made with greengram.",
        time: "10 min",
        difficulty: "Easy"
    },
    {
        name: "Vada",
        image: "https://i.pinimg.com/736x/13/41/48/13414815c353794be7be4bff14a49a6d.jpg",
        description: "Crispy fried dal.",
        time: "20 min",
        difficulty: "Easy"
    },
    {
        name: "Ragi Dosa",
        image: "https://i.pinimg.com/236x/16/5a/ef/165aefd31abf129ad8f086795e1a9f66.jpg",
        description: "Crispy ans healthy Dosa made with ragi flour.",
        time: "10 min",
        difficulty: "Easy"
    },
]
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
        <span class="tag">TIFFIN</span>

        <h3>${recipe.name}</h3>

        <p>${recipe.description}</p>

        <div class="recipe-meta">
            <span>⏱️ ${recipe.time}</span>
            <span>⭐ ${recipe.difficulty}</span>
        </div>

        <button class="view-recipe-btn" type="button">
            View Recipe
        </button>
    </div>
            </div>
        `;
        
const viewButton = card.querySelector(".view-recipe-btn");
viewButton.addEventListener("click", function () {
    window.location.href = "./viewrecipe.html";
});


        recipeGrid.appendChild(card);

    });
    
}


// ==========================================
// SHOW ALL 80 RECIPES
// ==========================================

displayRecipes(tiffinRecipie);


// ==========================================
// SEARCH RECIPES
// ==========================================

const searchInput = document.getElementById("tiffinSearch");

if (searchInput) {
    searchInput.addEventListener("input", function () {

        const searchText = searchInput.value
            .toLowerCase()
            .trim();

        const filteredRecipes = tiffinRecipie.filter(recipe => {
            return (
                recipe.name.toLowerCase().includes(searchText) ||
                recipe.description.toLowerCase().includes(searchText)
            );
        });

        displayRecipes(filteredRecipes);
    });
}