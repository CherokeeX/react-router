import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { NavLink } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home';
import { About } from './pages/about';
function App() {

const router = createBrowserRouter([
  {
    path : '/' , element: <MainLayout />,
    children : [
      {path : '/' , element : <Home />},
      {path : '/about', element : <About />},
      {index:  true , element: <Home />},
    ]
  
  },
  

])
 
  return (
  
<RouterProvider router = {router} />

);

}

export default App;
