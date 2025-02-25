import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Aboutus from "./components/Home/Aboutus";
// import Facility from "./components/Home/Facility";
import Academy from "./components/Home/Academy";
import Course from "./components/Home/Course";
import Gallary from "./components/Home/Gallary";
import Footer from "./components/Footer/Footer";
import Whyus from "./components/Whyus/Whyus";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Why Us" element={<Whyus />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/Contact-Us" element={<Course />} />
          <Route path="/gallery" element={<Gallary />} /> {/* "Gallary" ko "Gallery" karna better hoga */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
