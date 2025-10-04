import React from "react";
import { Button } from "./components/ui/button";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";

import HeroSection from "./pages/admin/student/HeroSection";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layout/MainLayout";
<<<<<<< HEAD
=======
import Courses from "./pages/admin/student/Courses";
import MyLearning from "./pages/admin/student/MyLearning";
>>>>>>> 00181176ecdc1e13f037a60b7cfb97b7207ca8fe

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
<<<<<<< HEAD
            {/* <Courses/> */}
=======
            <Courses />
>>>>>>> 00181176ecdc1e13f037a60b7cfb97b7207ca8fe
          </>
        ),
      },
      {
        path: "/login",
<<<<<<< HEAD
        element:<Login/>
      }
=======
        element: <Login />,
      },
      {
        path: "/MyLearning",
        element: <MyLearning />,
      },
>>>>>>> 00181176ecdc1e13f037a60b7cfb97b7207ca8fe
    ],
  },
]);

const App = () => {
  return (
    <>
<<<<<<< HEAD
      <RouterProvider router={appRouter}/>
=======
      <RouterProvider router={appRouter} />
>>>>>>> 00181176ecdc1e13f037a60b7cfb97b7207ca8fe
    </>
  );
};

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 00181176ecdc1e13f037a60b7cfb97b7207ca8fe
