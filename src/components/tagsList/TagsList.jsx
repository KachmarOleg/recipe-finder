import CloseIcon from "../../icons/CloseIcon";
import classes from "./TagsList.module.scss";

export default function TagsList({
  selectedIngredients,
  setSelectedIngredients,
  setIngredientsList,
}) {
  function handleTagRemove(ingredientId, ingredientTitle) {
    setSelectedIngredients((prev) =>
      prev.filter((ingr) => ingr.id !== ingredientId),
    );

    setIngredientsList((prev) => [
      ...prev,
      {
        id: ingredientId,
        name: ingredientTitle,
      },
    ]);
  }

  return (
    <div className={classes.tags}>
      {selectedIngredients.map((ingredient) => (
        <div className={classes.tag} key={ingredient.id}>
          <button
            className={classes.tagButton}
            onClick={() => handleTagRemove(ingredient.id, ingredient.name)}
          >
            <CloseIcon />
          </button>
          {ingredient.name}{" "}
        </div>
      ))}
    </div>
  );
}
