import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';

// createBrowserRouter takes an array with the path objects to load
const router = createBrowserRouter([{ path: '/', element: <HomePage /> }]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
