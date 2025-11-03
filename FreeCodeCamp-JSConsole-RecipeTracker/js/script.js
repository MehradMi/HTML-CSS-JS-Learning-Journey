const recipes = [];

let recipe1 = {
    name: "Spaghetti Carbonara",
    ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
    ratings: [4, 5, 4, 5],
    cookingTime: 22,
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
};

let recipe2 = {
    name: "Chicken Curry",
    ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
    ratings: [4, 5, 5, 5],
    cookingTime: 42,    
    totalIngredients: null,
    difficultyLevel: "",
    averageRating: null
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);


function getAverageRating(ratingsArray) {
    let average = 0;
    for (let rate of ratingsArray) {
        average += rate; 
    }
    average = average / ratingsArray.length;

    return average;
};

const getTotalIngredients = (ingredientsArray) => ingredientsArray.length;

const getDifficultyLevel = (cookingTime) => {
    if (cookingTime <= 30) 
        return "easy";
    else if (cookingTime <= 60) 
        return "medium";
    else
        return "hard";
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);

console.log(recipe1AverageRating);
console.log(recipe1TotalIngredients);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients);
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

console.log(recipes);