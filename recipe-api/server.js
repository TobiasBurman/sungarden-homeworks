import express from "express";

const app = express();
app.use(express.json());

const PORT = 3000;

let recipes = [
    { id: 1, name: "Pizza", cuisine: "Italian", prepTime: "15 mins" },
    { id: 2, name: "Carbonara", cuisine: "Italian", prepTime: "20 mins" },
    { id: 3, name: "Salsa", cuisine: "Mexican", prepTime: "10 mins" }
];

app.get("/recipes", (req, res) => {
    res.json(recipes);
});

app.get("/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) {

        return res.json({ message: "Recipe not found :(" });
    }
    res.json(recipe);
});

app.post("/recipes", (req, res) => {
    const newRecipe = {
        id: recipes.length + 1,
        name: req.body.name,
        cuisine: req.body.cuisine,
        prepTime: req.body.prepTime
    };
    recipes.push(newRecipe);
    res.json(newRecipe);
});

app.put("/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id);
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe){
        return res.json({ message: "Recipe not found" });
    } else{

        recipe.name = req.body.name || recipe.name;
        recipe.cuisine = req.body.cuisine || recipe.cuisine;
        recipe.prepTime = req.body.prepTime || recipe.prepTime;
        res.json(recipe);
    }
});

app.delete("/recipes/:id", (req, res) => {
    const recipeId = parseInt(req.params.id);
    recipes = recipes.filter(r => r.id !== recipeId);
    res.json({ message: "Recipe deleted!!", recipeId });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});