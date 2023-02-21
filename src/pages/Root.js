import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import classes from './Root.module.css';

function RootLayout() {
  return (
    <>
      <MainNavigation />

      <main className={classes.content}>
        {/* Child routes should be rendered to this */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
