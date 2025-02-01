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

        /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
]

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

