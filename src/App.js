import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/home';
import { About } from './pages/about';
import { HelpLayout } from './layouts/HelpLayout';
import { UsersLayout} from './layouts/UsersLayout';
import { Contacts , contactAction } from './pages/help/Contacts';
import { AskMe } from './pages/help/Askme';
import { usersLoader,Users } from './pages/Users';
import { UserDetails } from './pages/UserDetails';
import {UserDetailsLoader} from './pages/UserDetails';
import { NotFound } from './pages/NotFound';
import { UsersError } from './pages/UsersError';

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
          {path: 'contacts' , element: <Contacts />, action : contactAction},
        {path: 'askMe' , element:<AskMe />} ]
      },
      {path:'/users',
      element: <UsersLayout />, errorElement: <UsersError/>,
      children:[
      { index : true, element : <Users /> , loader: usersLoader },
      {path : ':userid' , element: <UserDetails/> , loader : UserDetailsLoader }
      ]
      },
      {path:'*', element: <NotFound/>}     
      
    ]
  
  }
])

function App() {

 
  return (
  
<RouterProvider router = {router} />

);

}

export default App;
