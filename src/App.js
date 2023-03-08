import { useRef } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ClothingAttributesContainer from "./components/ClothingAttributesContainer";
import ProductsContainer from "./components/ProductsContainer";
import AboutUs from "./components/AboutUs";
import FaqContainer from "./components/FaqContainer";
import Footer from "./components/Footer";

function App() {
  const scrollToProducts = useRef();
  return (
    <div className="App">
      <Nav />
      <Hero scrollToProducts={scrollToProducts} />
      <ClothingAttributesContainer />
      <div style={{ width: "100%", height: "499px" }}></div>
      <AboutUs />
      <ProductsContainer scrollToProducts={scrollToProducts} />
      <FaqContainer />
      <Footer />
    </div>
  );
}

export default App;
