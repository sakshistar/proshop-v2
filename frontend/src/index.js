import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './assests/styles/bootstrap.custom.css';
import  './assests/styles/index.css';
import {createBrowserRouter,
        createRoutesFromElements,
         Route,
         RouterProvider  } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import HomeScreen from './screens/HomeScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
