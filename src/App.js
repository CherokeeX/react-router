import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
function App() {

const router = createBrowserRouter([
  {path : '/',element : <Home />},
  {path : '/home',element : <Home />},
  {path : '/about',element : <About />} ,

])
 
  return (
  
<RouterProvider router = {router} />

);

}

export default App;
