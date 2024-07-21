import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import AppLayout from "./Pages/AppLayout";
import "animate.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:blogTitle" element={<Blog />}/>
      </Route>
    </Routes>
  );
};

export default App;
