import RecipeCard from "../recipeCard/RecipeCard.jsx";
import { recipes } from "./../../data/recipes.js";

export default function RecipesList({ selectedIngredients }) {
  function getIngredientMatchPercent(recipe) {
    const totalIngredients = recipe.ingredients.length;
    if (totalIngredients === 0) return 0;

    const selectedNames = selectedIngredients.map((i) => i.name);

    const ingredientsAmount =
      totalIngredients -
      recipe.ingredients.filter((ingredient) =>
        selectedNames.includes(ingredient),
      ).length;

    const ingredientsPercent =
      ((totalIngredients - ingredientsAmount) * 100) / totalIngredients;

    return Math.trunc(ingredientsPercent);
  }

  const recipesFiltered = recipes.filter((recipe) => {
    return selectedIngredients.some((ingredient) =>
      recipe.ingredients.includes(ingredient.name),
    );
  });

  const recipesSorted = [...recipesFiltered].sort((a, b) => {
    return getIngredientMatchPercent(b) - getIngredientMatchPercent(a);
  });

  return (
    <>
      {recipesSorted.length > 0 ? (
        <>
          <h2 className="section-title">Recipes for you</h2>

          <div className="recipes-grid">
            {recipesSorted.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  selectedIngredients={selectedIngredients}
                  getIngredientMatchPercent={() =>
                    getIngredientMatchPercent(recipe)
                  }
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="cta-msg">
          <h2>
            Select your available ingredients to see recipes you can cook.
          </h2>
        </div>
      )}
    </>
  );
}
