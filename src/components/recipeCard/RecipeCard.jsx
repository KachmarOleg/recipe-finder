export default function RecipeCard({ recipe, selectedIngredients }) {
  function calculateRecipeMatch(recipe, mode = "missing") {
    const totalIngredients = recipe.ingredients.length;
    if (totalIngredients === 0) return 0;

    const selectedNames = selectedIngredients.map((i) => i.name);

    const ingredientsAmount =
      totalIngredients -
      recipe.ingredients.filter((ingredient) =>
        selectedNames.includes(ingredient),
      ).length;

    if (mode === "missing") {
      return ingredientsAmount;
    } else {
      const ingredientsPercent =
        ((totalIngredients - ingredientsAmount) * 100) / totalIngredients;

      return Math.trunc(ingredientsPercent);
    }
  }

  return (
    <div className="card">
      <div className="card-image">
        <img src={recipe.image} alt={recipe.name} />
        <div className="badge" style={{ backgroundColor: "#3cab5a" }}>
          {calculateRecipeMatch(recipe, "percent")}% match
        </div>
      </div>
      <div className="card-content">
        <h3>{recipe.name}</h3>
        {recipe.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))}

        <br />

        <p
          style={
            calculateRecipeMatch(recipe) === 0
              ? { color: "green" }
              : { color: "#be6000" }
          }
        >
          {calculateRecipeMatch(recipe) > 0
            ? "Missing ingredients: " + calculateRecipeMatch(recipe)
            : "You have all necessary ingredients"}
        </p>
      </div>
    </div>
  );
}
