import { useState } from "react";
import "./styles/general.css";
import RecipesList from "./components/recipesList/RecipesList";
import Header from "./components/header/Header";
import SearchIngredients from "./components/searchIngredients/SearchIngredients";

export default function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <>
      <div className="container">
        <Header />

        <SearchIngredients
          selectedIngredients={selectedIngredients}
          setSelectedIngredients={setSelectedIngredients}
        />
        <RecipesList selectedIngredients={selectedIngredients} />
      </div>
    </>
  );
}
