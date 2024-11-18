import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Nav from "./components/Nav";
import layout from './components/layout/Layout';
import Layout from "./components/layout/Layout";
import Product from "./pages/prodct/Product";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  );
}

export default App;
