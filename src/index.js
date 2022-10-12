import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from "./error/error-page";
import LongList from './list/long-list';
import List from './list/list';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // 错误处理
    errorElement: <ErrorPage />,
  },
  {
    path: "/longlist",
    element: <LongList />,
  },
  {
    path: "/list",
    element: <List />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
