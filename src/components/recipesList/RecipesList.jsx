import { useState } from "react";
import { recipes } from "./../../data/recipes.js";

export default function RecipesList({ selectedIngredients }) {
  const recipesFiltered = recipes.filter((recipe) => {
    return selectedIngredients.some((ingredient) =>
      recipe.ingredients.includes(ingredient.name),
    );
  });

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
                <p>1 ingredient missing</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
