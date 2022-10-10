import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Routes>
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
