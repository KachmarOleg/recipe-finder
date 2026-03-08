import classes from "./ModalContent.module.scss";

export default function ModalCard({ recipe, setModal }) {
  return (
    <>
      <button
        className={classes.closeBtn}
        onClick={(e) => {
          e.stopPropagation();
          setModal(false);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-x h-3.5 w-3.5"
        >
          <path d="M18 6 6 18"></path>
          <path d="m6 6 12 12"></path>
        </svg>
      </button>

      <figure>
        <img src={recipe.image} alt={recipe.name} />
      </figure>

      <h3>{recipe.name}</h3>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>

      <p>{recipe.instruction}</p>
    </>
  );
}
