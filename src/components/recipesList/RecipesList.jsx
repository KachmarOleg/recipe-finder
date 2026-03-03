import { recipes } from "./../../data/recipes.js";

export default function RecipesList({ selectedIngredients }) {
  const recipesFiltered = recipes.filter((recipe) => {
    return selectedIngredients.some((ingredient) =>
      recipe.ingredients.includes(ingredient.name),
    );
  });

  function missingIngredients(recipe) {
    const selectedNames = selectedIngredients.map((i) => i.name);
    let ingredientsAmount =
      recipe.ingredients.length -
      recipe.ingredients.filter((ingredient) =>
        selectedNames.includes(ingredient),
      ).length;

    return ingredientsAmount;
  }

  return (
    <>
      <h2 className="section-title">Recipes for you</h2>

      <div className="recipes-grid">
        {recipesFiltered.map((recipe) => {
          return (
            <div className="card">
              <div className="card-image">
                <img src={recipe.image} alt={recipe.name} />
                <div className="badge" style={{ backgroundColor: "#3cab5a" }}>
                  90% match
                </div>
              </div>
              <div className="card-content">
                <h3>{recipe.name}</h3>
                {recipe.ingredients.map((ingredient) => (
                  <p>{ingredient}</p>
                ))}

                <br />

                <p
                  style={
                    missingIngredients(recipe) === 0
                      ? { color: "green" }
                      : { color: "#777" }
                  }
                >
                  {missingIngredients(recipe) > 0
                    ? "Missing ingredients: " + missingIngredients(recipe)
                    : "You have all necessary ingredients"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
