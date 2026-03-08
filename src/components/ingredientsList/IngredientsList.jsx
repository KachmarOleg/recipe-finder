import { useMemo } from "react";
import classes from "./IngredientsList.module.scss";

export default function IngredientsList({
  ref,
  search,
  ingredientsList,
  setIngredientsList,
  selectedIngredients,
  setSelectedIngredients,
  hideListUI,
}) {
  const sortedIngredients = useMemo(() => {
    return [...ingredientsList].sort((a, b) => a.name.localeCompare(b.name));
  }, [ingredientsList]);

  const filteredIngredients = sortedIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleAddIngredient(id, title) {
    setIngredientsList(
      ingredientsList.filter((ingr) => {
        return ingr.id !== id;
      }),
    );

    setSelectedIngredients([
      ...selectedIngredients,
      {
        id: id,
        name: title,
      },
    ]);

    hideListUI();
  }

  return (
    <>
      <ul className={classes.ingredientsList} ref={ref}>
        {filteredIngredients.map((ingredient) => (
          <li
            key={ingredient.id}
            className={classes.ingredientItem}
            onClick={(e) => handleAddIngredient(ingredient.id, ingredient.name)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  );
}
