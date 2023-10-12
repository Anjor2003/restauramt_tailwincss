import React from 'react';

// componentes
import Header from './components/Header';
import Footer from './components/Footer';

// Paginas
import Home from './pages/Home';
import RoomDetails from './pages/RoomDetails'
import Restaurante from './pages/Restaurante';

// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/:id',
    element: <RoomDetails />
  },
  {
    path: '/restaurants',
    element: <Restaurante />
  },
]);


const App = () => {
  return (
  <div>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>
  );
};

export default App;
