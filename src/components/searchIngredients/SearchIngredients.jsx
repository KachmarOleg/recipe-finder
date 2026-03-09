import { useState, useRef } from "react";
import { ingredients } from "../../data/ingredients";
import TagsList from "../tagsList/TagsList";
import IngredientsList from "../ingredientsList/IngredientsList";
import classes from "./SearchIngredients.module.scss";

export default function SearchIngredients({
  selectedIngredients,
  setSelectedIngredients,
}) {
  const [search, setSearch] = useState("");
  const [ingredientsList, setIngredientsList] = useState(ingredients);
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
    <div className={classes.searchSection}>
      <input
        type="text"
        className={classes.searchInput}
        placeholder="Type an ingredient (e.g. potato, salt, tomato...)"
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
