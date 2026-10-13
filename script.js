const vegRecipes = [

    // ==========================================
    // ORIGINAL 20 RECIPES — YOUR IMAGE LINKS
    // ==========================================

    {
        name: "Sambar",
        image: "https://www.playfulcooking.com/wp-content/uploads/2023/03/vegetable-sambar-01.jpg",
        description: "Tasty Sambar.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "🍚 Sambar Rice",
        image: "https://i.pinimg.com/originals/d6/ab/6c/d6ab6cf2dada196bcd2f79f9147caf66.jpg",
        description: "Easy Sambar rice for lunch or dinner.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "🍚 Tomato Rice",
        image: "https://i.ytimg.com/vi/C__UDXwC-kM/maxresdefault.jpg",
        description: "Easy tomato rice for lunch or dinner.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "🥔 Potato Fry",
        image: "https://vismaifood.com/storage/app/uploads/public/be9/618/974/thumb__1200_0_0_0_auto.jpg",
        description: "Simple crispy potato fry.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "🍜 Vegetable Noodles",
        image: "https://shwetainthekitchen.com/wp-content/uploads/2023/03/Indian-street-style-veg-noodles-720x1080.jpg",
        description: "Quick noodles with vegetables.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "🍋 Lemon Rice",
        image: "https://www.feastingathome.com/wp-content/uploads/2020/08/Indian-lemon-rice-6.jpg",
        description: "Fresh and simple lemon rice.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "🥣 Curd Rice",
        image: "https://healthyindianrecipes.com/wp-content/uploads/2025/10/curd-rice-dish-191025.jpg",
        description: "Cool and refreshing curd rice.",
        time: "10 min",
        difficulty: "Easy"
    },

    {
        name: "🍚 Vegetable Fried Rice",
        image: "https://thefamilycooking.com/wp-content/uploads/2025/06/15-Vegetable-Fried-Rice.png",
        description: "Colourful rice with fresh vegetables.",
        time: "25 min",
        difficulty: "Medium"
    },

    {
        name: "Maggi",
        image: "https://i.pinimg.com/originals/00/e6/d0/00e6d0678a79442071445a3c0c50d5ac.jpg",
        description: "Simple crispy Maggi.",
        time: "2 min",
        difficulty: "Easy"
    },

    {
        name: "Kichidi",
        image: "https://sapanarestaurant.com/wp-content/uploads/2019/11/chana_dal_khichdi-900x600.jpg",
        description: "Tasty rice.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "Ridge Gourd Curry",
        image: "potato.jpg",
        description: "Simple Ridge gourd curry.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "Bitter Gourd Fry",
        image: "YOUR_PREVIOUS_BITTER_GOURD_IMAGE_LINK",
        description: "Simple crispy Bitter gourd fry.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "Bottle Gourd Curry",
        image: "https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDI4NTMzODY5NzgyMzc2/how-to-make-lauki-curry-bottle-gourd-lentil-curry.jpg",
        description: "Easy to make Bottle gourd curry.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "Capsicum Curry",
        image: "https://hungryforever.net/wp-content/uploads/2018/07/capsicum-curry.jpg",
        description: "Easy to make Capsicum curry.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "Ladies Finger Fry",
        image: "https://i.ytimg.com/vi/H-DRmCuwBpg/maxresdefault.jpg",
        description: "Simple ladies finger fry with spices.",
        time: "25 min",
        difficulty: "Easy"
    },

    {
        name: "Stuffed Eggplant",
        image: "https://www.chaipakodi.com/wp-content/uploads/2023/09/gutti-vankaya-curry.jpg",
        description: "Simple Stuffed Eggplant with spices.",
        time: "25 min",
        difficulty: "Easy"
    },

    {
        name: "Ivy Gourd",
        image: "https://i.ytimg.com/vi/IadJ0b9dlmM/maxresdefault.jpg",
        description: "Simple Ivy gourd with spices.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "Broad Beans",
        image: "https://i.ytimg.com/vi/7OGwYR_7y1w/maxresdefault.jpg",
        description: "Simple Broad Beans.",
        time: "20 min",
        difficulty: "Easy"
    },

    {
        name: "🥕 Carrot Fry",
        image: "https://1.bp.blogspot.com/-G8AmUt2F3TI/X2RLuetdt3I/AAAAAAAADSw/bcSvL42__qYsKLC-t8G5l6tDDL5as_KSACPcBGAYYCw/s16000/IMG_20200910_141350_compress14.jpg",
        description: "Simple carrot fry with spices.",
        time: "15 min",
        difficulty: "Easy"
    },

    {
        name: "🥕 Carrot Curry",
        image: "egg.webp",
        description: "Simple carrot curry with spices.",
        time: "25 min",
        difficulty: "Easy"
    },


    // ==========================================
    // NEW 30 RECIPES — IMAGE LEFT BLANK
    // ==========================================

    {
        name: "Aloo Matar Curry",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA21Hdi9.img?w=1440&h=810&m=4&q=70",
        description: "Simple potato and green peas curry.",
        time: "25 min",
        difficulty: "Easy"
    },
];


// ==========================================
// DISPLAY RECIPE CARDS
// ==========================================

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

                <span class="tag">VEG</span>

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
// SHOW ALL 80 RECIPES
// ==========================================

displayRecipes(vegRecipes);


// ==========================================
// SEARCH RECIPES
// ==========================================

const searchInput = document.getElementById("vegSearch");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value
        .toLowerCase()
        .trim();

    const filteredRecipes = vegRecipes.filter(recipe => {

        return (
            recipe.name.toLowerCase().includes(searchText) ||
            recipe.description.toLowerCase().includes(searchText)
        );

    });

    displayRecipes(filteredRecipes);

});