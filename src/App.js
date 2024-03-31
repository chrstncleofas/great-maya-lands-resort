import './App.css';
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Projects from "./components/Projects";
import MobileViewShowcase from "./components/MobileViewShowcase";

function App() {
  return (
    <div className="App">
      <Header />
      <Showcase />
      <MobileViewShowcase />
      <Projects />
    </div>
  );
}

export default App;
