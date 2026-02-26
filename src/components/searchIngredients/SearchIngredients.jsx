import React, { useState, useMemo, useRef } from "react";
import { ingredients } from "../../data/ingredients";

export default function SearchIngredients() {
  const [search, setSearch] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const ingredientList = useRef();

  const sortedIngredients = useMemo(() => {
    return [...ingredients].sort((a, b) => a.name.localeCompare(b.name));
  }, [ingredients]);

  const filteredIngredients = sortedIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSearchFocus() {
    ingredientList.current.style.display = "flex";
  }

  function hideIngredientList() {
    setTimeout(() => {
      ingredientList.current.style.display = "none";
    }, 100);
  }

  function handleSearchBlur() {
    hideIngredientList();
  }

  function handleIngredientClick(event) {
    console.log(event.target.value);
    setSelectedIngredients([]);
  }

  function handleAddIngredient(title) {
    const thebiggerID =
      selectedIngredients.length > 0
        ? selectedIngredients.slice(-1)[0]
        : { id: 0 };

    setSelectedIngredients([
      ...selectedIngredients,
      {
        id: thebiggerID.id + 1,
        name: title,
      },
    ]);

    hideIngredientList();
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

      <ul className="ingredient-list" ref={ingredientList}>
        {filteredIngredients.map((ingredient) => (
          <li
            key={ingredient.id}
            onClick={(e) => handleAddIngredient(ingredient.name)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>

      <div className="tags">
        {selectedIngredients.map((ingredient) => (
          <div className="tag" key={ingredient.id}>
            {ingredient.name} <span>×</span>
          </div>
        ))}
      </div>
    </div>
  );
}
