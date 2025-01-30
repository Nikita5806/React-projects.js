import "./App.css";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Category from '../public/folder/Category';
import Search from '../public/folder/Search';
import Singlegif from '../public/folder/singlegif';
import Fav from '../public/folder/Fav';
import Home from '../public/folder/Home';
import AppLayout from './Layout/Applayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,


     children:  [
      {
        path:"/",
        element:<Home />,
        
      },
      {
        
        path:"./:category",
        element:<Category />,
        
      },
      {
        
        path:"/search/:query",
        element:<Search />,
        
      },
      {
        
        path:"/:type/:slung",
        element:<Singlegif />,
        
       } ,
       {
      path:"/favorites",
      element:<Fav />,
       },
    ],
  },
]);

const App = ()=> {
  return 
  <RouterProvider router={router}/>;
  }

export default App

import React from 'react'

const AppLayout = () => {
  return (
<h1>huhunjnsn</h1>
  )
}

export default AppLayout
