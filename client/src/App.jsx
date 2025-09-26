import React from "react";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

import HeroSection from "./pages/admin/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";

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
            {/* <Courses/> */}
          </>
        ),
      },
      {
        path: "/login",
        element:<Login/>
      }
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  );
};

export default App;
