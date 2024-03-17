import NavBar from "./components/NavBar.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Home from "./Home.jsx";
import About from './components/About.js';
import Projects from './components/Projects.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
