import CheckIcon from "../../icons/checkIcon";
import CloseIcon from "../../icons/CloseIcon";
import InfoIcon from "../../icons/InfoIcon";
import classes from "./ModalContent.module.scss";

export default function ModalCard({ recipe, setModal, selectedIngredients }) {
  const selectedNames = selectedIngredients.map((i) => i.name);

  const recipeIngredients = recipe.ingredients.map((ingredient) => {
    if (selectedNames.includes(ingredient)) {
      return (
        <li style={{ color: "#2cb879" }}>
          <CheckIcon size={16} />
          {ingredient}
        </li>
      );
    } else {
      return (
        <li style={{ color: "#e74c3c" }}>
          <InfoIcon size={16} color={"#e74c3c"} />
          {ingredient}
        </li>
      );
    }
  });

  return (
    <div className={classes.modalContent}>
      <button
        className={classes.closeBtn}
        onClick={(e) => {
          e.stopPropagation();
          setModal(false);
        }}
      >
        <CloseIcon size={30} />
      </button>

      <figure>
        <img src={recipe.image} alt={recipe.name} />
      </figure>

      <div className={classes.recipeContent}>
        <h2>{recipe.name}</h2>

        <h3>Ingredients</h3>
        <ul className={classes.recipeIngredients}>{recipeIngredients}</ul>

        <h3>Instructions</h3>
        <p>{recipe.instruction}</p>
      </div>
    </div>
  );
}
