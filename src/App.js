import Client from "./components/client/Client";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Join from "./components/join/Join";
import Price from "./components/price/Price";
import Product from "./components/product/Product";
import Strategies from "./components/strategies/Strategies";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Product />
        <Strategies />
        <Price />
        <Client />
        <Join />
      </main>
    </>
  );
}

export default App;
