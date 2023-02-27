import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClothingAttributesContainer from "./components/ClothingAttributesContainer";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <ClothingAttributesContainer />
      <div style={{ width: "100%", height: "499px" }}></div>
      <ProductsContainer />
    </div>
  );
}

export default App;
