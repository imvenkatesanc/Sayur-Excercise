// Problem #1
// Write the dictionaty structure for storing recipes for food.
// Hardcode your own data.
// Get user input for the name of the recipe, and then print the recipe. 
// Eg: Input : Idli
// Output : Here is the recipe for idli. 
// You need ingrediants Rice and Dal.
//  The procedure to cook is grind rice and dal, ferment and steam.
// Input : Yogurt rice
// Output :  Here is the recipe for Yogurt rice. 
// You need ingrediants Rice and yogurt.
// The procedure to cook is cook rice first and then add yogurt.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//Hardcode data for recipes

const Recipes = {
    "Idli": {
        ingredients: ["Rice", "Dal"],
        procedure: "Grind rice and dal, ferment, and steam."
    },
    "Yogurt rice": {
        ingredients: ["Rice", "Yogurt"],
        procedure: "Cook rice first and then add yogurt."
    },
    "Biryani": {
        ingredients: ["Basmati rice", "Chicken or Vegetables", "Spices", "Yogurt", "Saffron"],
        procedure: "Layer rice and marinated meat or vegetables, cook with spices and saffron."
    },
    "Masala Dosa": {
        ingredients: ["Rice and Urad dal batter", "Potatoes", "Onions", "Spices", "Ghee"],
        procedure: "Spread thin batter on a hot griddle, add potato filling, fold, and serve."
    },
    "Tandoori Chicken": {
        ingredients: ["Chicken", "Yogurt", "Spices", "Tandoor oven", "Lemon juice"],
        procedure: "Marinate chicken in yogurt and spices, cook in a tandoor, and serve with lemon."
    },
    "Butter Chicken": {
        ingredients: ["Chicken", "Tomato gravy", "Butter", "Cream", "Kasuri Methi"],
        procedure: "Cook chicken in tomato gravy, finish with butter, cream, and dried fenugreek leaves."
    },
    "Paratha": {
        ingredients: ["Potatoes", "Whole wheat dough", "Spices", "Ghee", "Pickles"],
        procedure: "Stuff dough with spiced potatoes, cook on a griddle, and serve with ghee and pickles."
    },
    "Rasgulla": {
        ingredients: ["Milk", "Sugar", "Rosewater", "Cardamom", "Saffron"],
        procedure: "Make cheese balls from milk, cook in sugar syrup, and flavor with rosewater and spices."
    },
    "Pani Puri": {
        ingredients: ["Puri shells", "Spiced water", "Tamarind chutney", "Potatoes", "Chickpeas"],
        procedure: "Fill puri shells with potatoes, chickpeas, and flavored water, and top with chutney."
    }
};

// Get the recipe name from user
rl.question("Enter the recipe name: ",(RecipeName)=>{
    let recipeName = RecipeName;

    if(recipeName in Recipes){
        const recipe = Recipes[recipeName];
        const ingredients = recipe.ingredients.join(",");
        const procedure = recipe.procedure;

        console.log(`Here is the recipe for ${recipeName}.`);
        console.log(`You need ingredients: ${ingredients}.`);
        console.log(`The procedure to cook is ${procedure}.`);
    }else{
        console.log(`Recipe for ${recipeName} not found.`);
    }


rl.close()
});