import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />{" "}
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
