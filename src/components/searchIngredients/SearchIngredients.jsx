import React, { useState, useMemo, useRef } from "react";
import { ingredients } from "../../data/ingredients";
import TagsList from "../tagsList/TagsList";
import IngredientsList from "../ingredientsList/IngredientsList";

export default function SearchIngredients() {
  const [search, setSearch] = useState("");
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const listUI = useRef();

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

      <IngredientsList
        ref={listUI}
        search={search}
        ingredientsList={ingredientsList}
        setIngredientsList={setIngredientsList}
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        hideListUI={hideListUI}
      />

      <TagsList
        selectedIngredients={selectedIngredients}
        setSelectedIngredients={setSelectedIngredients}
        setIngredientsList={setIngredientsList}
      />
    </div>
  );
}
