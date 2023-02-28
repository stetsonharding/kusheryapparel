import { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClothingAttributesContainer from "./components/ClothingAttributesContainer";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  const scrollToProducts = useRef();
  return (
    <div className="App">
      <Nav />
      <Hero scrollToProducts={scrollToProducts} />
      <ClothingAttributesContainer />
      <div style={{ width: "100%", height: "499px" }}></div>
      <ProductsContainer scrollToProducts={scrollToProducts} />
    </div>
  );
}

export default App;
