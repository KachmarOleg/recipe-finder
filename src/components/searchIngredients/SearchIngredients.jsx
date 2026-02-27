import React, { useState, useMemo, useRef } from "react";
import { ingredients } from "../../data/ingredients";

export default function SearchIngredients() {
  const [search, setSearch] = useState("");
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const listUI = useRef();

  const sortedIngredients = useMemo(() => {
    return [...ingredientsList].sort((a, b) => a.name.localeCompare(b.name));
  }, [ingredientsList]);

  const filteredIngredients = sortedIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSearchFocus() {
    listUI.current.style.display = "flex";
  }

  function hideListUI() {
    setTimeout(() => {
      listUI.current.style.display = "none";
    }, 100);
  }

  function handleSearchBlur() {
    hideListUI();
  }

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

  function handleTagRemove(ingredientId, ingredientTitle) {
    setSelectedIngredients(
      selectedIngredients.filter((ingr) => {
        return ingr.id !== ingredientId;
      }),
    );

    setIngredientsList([
      ...ingredientsList,
      {
        id: ingredientId,
        name: ingredientTitle,
      },
    ]);
  }

  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Type an ingredient (e.g. carrot, onion, potato...)"
        value={search}
        onChange={handleSearchChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
      />

      <ul className="ingredient-list" ref={listUI}>
        {filteredIngredients.map((ingredient) => (
          <li
            key={ingredient.id}
            onClick={(e) => handleAddIngredient(ingredient.id, ingredient.name)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>

      <div className="tags">
        {selectedIngredients.map((ingredient) => (
          <div className="tag" key={ingredient.id}>
            {ingredient.name}{" "}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x h-3.5 w-3.5"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
