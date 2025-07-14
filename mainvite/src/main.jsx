import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import PopularList from "./routes/popular_list"
import PopularMov from "./Home/PopularMovies"

const router = createBrowserRouter([

  {
    path: "/",
    element: <PopularList />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
