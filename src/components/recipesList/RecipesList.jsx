import { useState } from "react";
import { recipes } from "./../../data/recipes.js";
import RecipeCard from "../recipeCard/RecipeCard.jsx";
import Modal from "../modal/Modal";
import ModalContent from "../modalContent/ModalContent.jsx";
import classes from "./RecipesList.module.scss";

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

  const [modal, setModal] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState(null);

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
          <h2 className={classes.recipesTitle}>Recipes for you</h2>

          <div className={classes.recipesGrid}>
            {recipesSorted.map((recipe) => {
              return (
                <>
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    selectedIngredients={selectedIngredients}
                    getIngredientMatchPercent={() =>
                      getIngredientMatchPercent(recipe)
                    }
                    setModal={setModal}
                    setActiveRecipe={setActiveRecipe}
                  />
                </>
              );
            })}

            {activeRecipe !== null && (
              <Modal open={modal} setModal={setModal}>
                <ModalContent
                  recipe={activeRecipe}
                  setModal={setModal}
                  selectedIngredients={selectedIngredients}
                />
              </Modal>
            )}
          </div>
        </>
      ) : (
        <div className={classes.ctaMsg}>
          <h2>
            Select your available ingredients to see recipes you can cook.
          </h2>
        </div>
      )}
    </>
  );
}
