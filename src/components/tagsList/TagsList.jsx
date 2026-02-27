import React from "react";

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
    <div className="tags">
      {selectedIngredients.map((ingredient) => (
        <div className="tag" key={ingredient.id}>
          <button
            onClick={() => handleTagRemove(ingredient.id, ingredient.name)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x h-3.5 w-3.5"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
          {ingredient.name}{" "}
        </div>
      ))}
    </div>
  );
}
