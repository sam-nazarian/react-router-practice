import { createBrowserRouter, RouterProvider } from 'react-router-dom'; //createRoutesFromElements, Route

import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

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
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
