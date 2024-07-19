import Header from "./components/Header"
import 'animate.css';
import Hero from "./components/Hero";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="max-w-[1440px] my-0 mx-auto">
        <Header />
        <Hero />
        <Posts />
    </div>
  )
}

export default App
