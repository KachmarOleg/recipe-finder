import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.header}>
      <h1>Recipe Finder</h1>
      <p>Find recipes based on ingredients you have</p>
    </div>
  );
}
