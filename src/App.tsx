import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import AppLayout from "./Pages/AppLayout";
import "animate.css";
import React, { useEffect, useState } from "react";
import BlogList from "./Pages/BlogList";

type Posts = {
  img: string;
  category: string;
  title: string;
  content: string;
  author: string;
  publishDate: string;
};


const App = () => {
  const [active, setActive] = useState<boolean>(false);
  const [mode, setMode] = useState<string>("");

  useEffect(() => {
    const el = document.querySelector("body") as HTMLBodyElement;
    const isDark = JSON.parse(localStorage.getItem("mode") as string);

    if (isDark) {
      setMode(isDark);
      setActive(true);
      el.classList.add("dark");
    }
  }, []);

  const darkInLocal = () => {
    const el = document.querySelector("body") as HTMLBodyElement;
    const darkIsExist = localStorage.getItem("mode");
    if (darkIsExist === null) {
      setActive(true);
      el.classList.add("dark");
      localStorage.setItem("mode", JSON.stringify("dark"));
    } else {
      setActive(false);
      localStorage.removeItem("mode");
      el.classList.remove("dark");
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AppLayout
          active={active}
          setActive={setActive}
          darkMode={darkInLocal}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/blog",
          element: <BlogList />,
        },
        {
          path: "/blog/:blogTitle",
          element: <Blog />,
        },
      ],
    },
  ]);

  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
