export default function RecipeCard({
  recipe,
  selectedIngredients,
  getIngredientMatchPercent,
}) {
  function calculateRecipeMatch(recipe) {
    const totalIngredients = recipe.ingredients.length;
    if (totalIngredients === 0) return 0;

    const selectedNames = selectedIngredients.map((i) => i.name);

    const ingredientsAmount =
      totalIngredients -
      recipe.ingredients.filter((ingredient) =>
        selectedNames.includes(ingredient),
      ).length;

    return ingredientsAmount;
  }

  function getMatchColor(percent) {
    if (percent >= 80) return "#3cab5a";
    if (percent >= 45) return "#ebcf34";
    return "#e74c3c";
  }

  return (
    <div
      className="card"
      style={{
        boxShadow:
          getIngredientMatchPercent(recipe) === 0 &&
          "0 6px 18px rgb(0 255 6 / 35%)",
      }}
    >
      <div className="card-image">
        <img src={recipe.image} alt={recipe.name} />
        <div
          className="badge"
          style={{
            backgroundColor: getMatchColor(getIngredientMatchPercent(recipe)),
          }}
        >
          {getIngredientMatchPercent(recipe)}% match
        </div>
      </div>
      <div className="card-content">
        <h3>{recipe.name}</h3>
        {recipe.ingredients.map((ingredient) => (
          <p key={ingredient}>{ingredient}</p>
        ))}

        <br />

        {calculateRecipeMatch(recipe) > 0 ? (
          <p style={{ color: "#be6000" }}>
            Missing ingredients: {calculateRecipeMatch(recipe)}
          </p>
        ) : (
          <p style={{ color: "#3cab5a" }}>You have all necessary ingredients</p>
        )}
      </div>
    </div>
  );
}
