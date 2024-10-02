import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx';
import NotFound from './routes/NotFound.jsx';
import HaloInfinite from './routes/Halo-Infinite.jsx';
import HaloMasterChief from './routes/Halo-MasterChief_Collection.jsx';
import './App.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/halo-infinite-gameplay",
        element: <HaloInfinite />,
      },
      {
        path: "/halo-master-chief-gameplay",
        element: <HaloMasterChief />,
      },
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
