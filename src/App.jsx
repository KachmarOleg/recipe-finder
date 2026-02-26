import React from "react";
import "./styles/general.css";
import RecipesList from "./components/recipesList/RecipesList";
import Header from "./components/header/Header";
import SearchIngredients from "./components/searchIngredients/SearchIngredients";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />

        <SearchIngredients />
        <RecipesList />
      </div>
    </>
  );
}
