import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //createRoutesFromElements, Route

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// Another Approach to use routes (the JSX Approach)
/*
const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<HomePage />} />
    <Route path="/products" element={<ProductsPage />} />
  </Route>
);
const router = createBrowserRouter(routeDefinitions);
*/

// createBrowserRouter takes an array with the path objects to load
const router = createBrowserRouter([
  {
    // When RootLayout throws an error, it goes here (also errors bubble up to here)
    path: '/',
    element: <RootLayout />, //RootLayout & it's path acts as a parent/wrapper to children elms below
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage /> },
    ],
  },
]);

// Links only work if they are inside the RouterProvider
function App() {
  return <RouterProvider router={router} />;
}

export default App;
