import React from "react";
import "./../../styles/general.css";
import RecipesList from "../recipesList/RecipesList";
import Header from "../header/Header";
import SearchIngredients from "../searchIngredients/SearchIngredients";

export default function Home() {
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
