import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

// Put everything that applies to every page here
function RootLayout() {
  return (
    <>
      <MainNavigation />

      <main>
        {/* Place where child routes should be rendered to */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
