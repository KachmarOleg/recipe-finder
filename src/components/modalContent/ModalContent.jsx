export default function ModalCard({ recipe, setModal }) {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setModal(false);
        }}
      >
        Close Modal
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
