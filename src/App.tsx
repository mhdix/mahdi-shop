import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
