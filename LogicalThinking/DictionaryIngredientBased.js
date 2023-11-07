// Problem #2
// Write the dictionaty structure for storing recipes for food.
// Hardcode your own data.
// User input is any ingredient. List all the recipes that include the ingredient
// Input : Rice
// Output : You can make Idli and Yogurt rice with rice.

const readl = require('readline');
const rl = readl.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// Hardcode data for recipes
const Recipes ={
    "Rice":{  
        ingredients: ["Rice", "Yogurt"],
        procedure: "Cook rice first and then add yogurt."
    },
    "Biryani": {
        ingredients: ["Basmati rice", "Chicken or Vegetables", "Spices", "Yogurt", "Saffron"],
        procedure: "Layer rice and marinated meat or vegetables, cook with spices and saffron."
    },
}

rl.question("Give any ingredient: ", (ing)=>{
    let ingredient = ing;

    if(ingredient in Recipes[ingredient]){
        let ingName = Recipes[ingredient];
        let ingPro = ingName.procedure;

        console.log(`${ingName}`);
        console.log(`${ingPro}`);
    }
rl.close();
});
