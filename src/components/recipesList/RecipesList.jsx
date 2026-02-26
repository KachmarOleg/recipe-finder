import React from "react";

export default function RecipesList() {
  return (
    <>
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
    </>
  );
}
