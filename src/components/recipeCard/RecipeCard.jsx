import classes from "./RecipeCard.module.scss";

export default function RecipeCard({
  recipe,
  matchInfo = true,
  selectedIngredients,
  getIngredientMatchPercent,
  setActiveRecipe,
  setModal,
}) {
  function calculateMissingIngredients(recipe) {
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
      className={classes.card}
      onClick={() => {
        setActiveRecipe(recipe);
        setModal(true);
      }}
      style={{
        boxShadow:
          getIngredientMatchPercent(recipe) === 100 &&
          "rgb(0 255 6 / 25%) 0px 5px 15px 0",
      }}
    >
      <div className={classes.cardImageWrapper}>
        <img
          className={classes.cardImage}
          src={recipe.image}
          alt={recipe.name}
        />

        {matchInfo && (
          <div
            className={classes.badge}
            style={{
              backgroundColor: getMatchColor(getIngredientMatchPercent(recipe)),
            }}
          >
            {getIngredientMatchPercent(recipe)}% match
          </div>
        )}
      </div>
      <div className={classes.cardContent}>
        <h3 className={classes.cardTitle}>{recipe.name}</h3>

        {matchInfo && (
          <>
            {calculateMissingIngredients(recipe) > 0 ? (
              <p style={{ color: "#be6000" }}>
                Missing ingredients: {calculateMissingIngredients(recipe)}
              </p>
            ) : (
              <p style={{ color: "#3cab5a" }}>
                You have all necessary ingredients
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
