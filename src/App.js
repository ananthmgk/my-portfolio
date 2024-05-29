import SocialLinks from "./components/SocialLinks";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />

      <SocialLinks />
    </div>
  );
};

export default App;

// border-solid border-white border-2
