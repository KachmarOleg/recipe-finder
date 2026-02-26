import React, { useState, useMemo } from "react";
import { ingredients } from "../../data/ingredients";

export default function SearchIngredients() {
  const [search, setSearch] = useState("");

  const sortedIngredients = useMemo(() => {
    return [...ingredients].sort((a, b) => a.name.localeCompare(b.name));
  }, [ingredients]);

  const filteredIngredients = sortedIngredients.filter((ingredient) =>
    ingredient.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="search-section">
      <input
        type="text"
        className="search-input"
        placeholder="Type an ingredient (e.g. carrot, onion, potato...)"
        value={search}
        onChange={handleSearchChange}
      />

      <ul className="ingredient-list">
        {filteredIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul>
    </div>
  );
}
