import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great quotes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>All quotes</li>
          <li>Add a quote</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
