import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClothingAttributesContainer from "./components/ClothingAttributesContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ClothingAttributesContainer />
    </div>
  );
}

export default App;
