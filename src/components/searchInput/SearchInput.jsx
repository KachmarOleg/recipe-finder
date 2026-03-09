import CloseIcon from "../../icons/CloseIcon";
import classes from "./SearchInput.module.scss";

export default function SearchInput({ search, setSearch, hideListUI, listUI }) {
  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSearchFocus() {
    listUI.current.style.display = "flex";
  }

  function handleSearchBlur() {
    hideListUI();
  }

  return (
    <>
      <div className={classes.searchWrapper}>
        <input
          type="text"
          className={classes.searchInput}
          placeholder="Type an ingredient (e.g. potato, salt, tomato...)"
          value={search}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />

        {search && (
          <button className={classes.clearSearch} onClick={() => setSearch("")}>
            <CloseIcon />
          </button>
        )}
      </div>
    </>
  );
}
