import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./Components/Home/Home.jsx";
import Register from "./Components/Register/Register.jsx";
import AuthProvider from "./Components/Context/AuthProvider.jsx";
import ShareTip from "./Components/ShareTip/ShareTip.jsx";
import PrivateRoute from "./Components/routes/PrivateRoute.jsx";
import Login from "./Components/Login/Login.jsx";
import BrowseTips from "./Components/BrowseTips/BrowseTips.jsx";
import Details from "./Components/Details/Details.jsx";
import Update from "./Components/Update/Update.jsx";
import MyTips from "./Components/MyTips/MyTips.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "share",
        element: (
          <PrivateRoute>
            <ShareTip></ShareTip>
          </PrivateRoute>
        ),
      },
      {
        path: "browse",
        Component: BrowseTips,
        loader: () => fetch("https://project-server-sandy.vercel.app/garden"),
      },
      {
        path: "tips",
        element: (
          <PrivateRoute>
            <MyTips></MyTips>
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        loader: ({ params }) =>
          fetch(`https://project-server-sandy.vercel.app/garden/${params.id}`),
        Component: Details,
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(`https://project-server-sandy.vercel.app/garden/${params.id}`),
        Component: Update,
      },
      {
        path: "explore",
        Component: Explore,
        loader: () => fetch("https://project-server-sandy.vercel.app/profile"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
