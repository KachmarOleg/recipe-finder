import React, { useMemo, useState } from "react";
import "./../../styles/general.css";
import { ingredients } from "../../data/ingredients";

export default function Home() {
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
    <>
      <div className="container">
        <div className="header">
          <h1>Recipe Finder</h1>
          <p>Find recipes based on ingredients you have</p>
        </div>

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

        <h2 className="section-title">Recipes for you</h2>

        <div className="recipes-grid">
          <div className="card">
            <div className="card-image">
              <img src="/images/recipe-1.jpg" alt="Pasta" />
              <div className="badge">90% match</div>
            </div>
            <div className="card-content">
              <h3>Tomato Basil Pasta</h3>
              <p>1 ingredient missing</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/images/recipe-2.jpg" alt="Salad" />
              <div className="badge" style={{ backgroundColor: "#e6a700" }}>
                75% match
              </div>
            </div>
            <div className="card-content">
              <h3>Fresh Avocado Salad</h3>
              <p>2 ingredients missing</p>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/images/recipe-3.jpg" alt="Chicken" />
              <div className="badge" style={{ background: "#d9534f" }}>
                60% match
              </div>
            </div>
            <div className="card-content">
              <h3>Grilled Lemon Chicken</h3>
              <p>3 ingredients missing</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
