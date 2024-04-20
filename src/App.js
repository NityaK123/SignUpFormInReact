import logo from './logo.svg';
import './App.css';
import { Home } from './Component/Home';
import {createBrowserRouter,BrowserRouter,Routes,Route, RouterProvider} from 'react-router-dom';
import { About } from './Component/About';
import SignUp from './Component/SignUp';

function App() {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    }
  ])

  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
