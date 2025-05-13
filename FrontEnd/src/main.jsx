import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../src/pages/HomePage.jsx";
import StudentRegister from "../src/pages/StudentRegister.jsx";
import TeacherRegister from "../src/pages/TeacherRegister.jsx";
import Login from "../src/pages/Login.jsx";
import Dashboard from "../src/pages/Dashboard.jsx";
import Profile from "../src/pages/Profile.jsx";
import StudentChatbot from "../src/pages/StudentChatbot.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/student",
    children: [
      {
        path: "register",
        element: <StudentRegister />,
      },
    ],
  },
  {


    
    path: "/teacher",
    children: [
      {
        path: "register",
        element: <TeacherRegister />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/studentChatbot",
    element: <StudentChatbot />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);