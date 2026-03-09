import { useState, useRef } from "react";
import { ingredients } from "../../data/ingredients";
import TagsList from "../tagsList/TagsList";
import IngredientsList from "../ingredientsList/IngredientsList";
import classes from "./SearchIngredients.module.scss";
import SearchInput from "../searchInput/SearchInput";

export default function SearchIngredients({
  selectedIngredients,
  setSelectedIngredients,
}) {
  const [search, setSearch] = useState("");
  const [ingredientsList, setIngredientsList] = useState(ingredients);
  const listUI = useRef();

  function hideListUI() {
    setTimeout(() => {
      listUI.current.style.display = "none";
    }, 100);
  }

  return (
    <div className={classes.searchSection}>
      <SearchInput
        search={search}
        setSearch={setSearch}
        listUI={listUI}
        hideListUI={hideListUI}
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
