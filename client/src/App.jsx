import React from "react";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

import HeroSection from "./pages/admin/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
import Courses from "./pages/admin/student/Courses";
import MyLearning from "./pages/admin/student/MyLearning";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/MyLearning",
        element: <MyLearning />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default App;
