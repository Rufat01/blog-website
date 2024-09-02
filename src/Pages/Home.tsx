import "animate.css";
import Hero from "../components/Hero";
import Posts from "../components/Posts";
import React, { useState } from "react"


const Home = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setActive((prevMode) => !prevMode);
    document.documentElement.classList.toggle("dark", !active);
  };  

  return (
    <div>
        <Hero />
        <Posts active={active} />
    </div>
  )
}

export default Home
