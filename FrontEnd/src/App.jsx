import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../src/pages/HomePage.jsx";
import Register from "../src/pages/Register.jsx";
import StudentRegister from "../src/pages/StudentRegister.jsx";
import TeacherRegister from "../src/pages/TeacherRegister.jsx";
import Login from "../src/pages/Login.jsx";
import Dashboard from "../src/pages/Dashboard.jsx";
import Profile from "../src/pages/Profile.jsx";
import StudentChatbot from "../src/pages/StudentChatbot.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/register/student",
    element: <StudentRegister />,
  },
  {
    path: "/register/teacher",
    element: <TeacherRegister />,
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

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "-var(--color-grey-0)",
              color: "-var(--color-grey-7000)",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
}
