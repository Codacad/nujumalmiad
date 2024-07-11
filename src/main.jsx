import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
import Contact from "./routes/Contact.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./state/store.js";
import { Provider } from "react-redux";
import ServiceOverview from "./components/ServiceOverview.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/services/:name", element: <ServiceOverview /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
