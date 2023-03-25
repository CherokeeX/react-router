import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home';
import { About } from './pages/about';
import { HelpLayout } from './layouts/HelpLayout';
import { Contacts } from './pages/help/Contacts';
import { AskMe } from './pages/help/Askme';
import { usersLoader,Users } from './pages/Users';
import { UserDetails } from './pages/UserDetails';
import {UserDetailsLoader} from './pages/UserDetails';

function App() {

const router = createBrowserRouter([
  {
    path : '/' , element: <MainLayout />,
    children : [
      {path : '/' , element : <Home />},
      {path : '/about', element : <About />},
      {index:  true , element: <Home />},
      {
        path: 'help',
        element : <HelpLayout />,
        children :[
          {path: 'contacts' , element: <Contacts />},
        {path: 'askMe' , element:<AskMe />}        ]
      },
      {path:'/users',
      children:[
      { index : true, element : <Users /> , loader: usersLoader },
      {path : ':userid' , element: <UserDetails/> , loader : UserDetailsLoader}

      ]

      }

      
      
    ]
  
  }


])
 
  return (
  
<RouterProvider router = {router} />

);

}

export default App;
