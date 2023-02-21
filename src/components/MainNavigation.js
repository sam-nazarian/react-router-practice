import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
  //  NavLink checks whether the path of the currently active route starts with the it's path
  //  And that NavLink is considered to be active if the currently active route starts with the path set on the link.

  // The "end" in the NavLink component's props indicates that the route represented by the to prop is an exact match, and not a partial match, to the current URL.
  // Also works for inline styles: <NavLink to="/" style={ ({ isActive }) => ({ textAlign: isActive ? 'center' : 'left' } )>
  return (
    <header className={classes.header}>
      <ul className={classes.list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? classes.active : undefined)} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={({ isActive }) => (isActive ? classes.active : undefined)}>
            Products
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
