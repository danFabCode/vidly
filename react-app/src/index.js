import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./common/customers";
import Rentals from "./common/rentals";
import NotFound from "./common/notFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "rentals",
        element: <Rentals />,
      },
      {
        index: true,
        element: <Movies />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
