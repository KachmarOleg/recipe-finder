import React, { useState, useMemo, useRef } from "react";
import { ingredients } from "../../data/ingredients";
import TagsList from "../tagsList/TagsList";

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

      <TagsList
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        setIngredientsList={setIngredientsList}
      />
    </div>
  );
}
