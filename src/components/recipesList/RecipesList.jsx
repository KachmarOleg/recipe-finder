import RecipeCard from "../recipeCard/RecipeCard.jsx";
import { recipes } from "./../../data/recipes.js";

export default function RecipesList({ selectedIngredients }) {
  const recipesFiltered = recipes.filter((recipe) => {
    return selectedIngredients.some((ingredient) =>
      recipe.ingredients.includes(ingredient.name),
    );
  });

  return (
    <>
      {recipesFiltered.length > 0 && (
        <>
          <h2 className="section-title">Recipes for you</h2>

          <div className="recipes-grid">
            {recipesFiltered.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  selectedIngredients={selectedIngredients}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
