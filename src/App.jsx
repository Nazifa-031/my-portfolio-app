import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Connect from "./pages/Connect";
import ScrollToHash from "./components/ScrollToHash";
const App = () => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      {/* Header ONLY holds the navbar — never changes, no matter the route */}
      <header className="h-fit">
        <Navbar />
      </header>

      {/* Main is where PAGE CONTENT changes based on the URL */}
      <main className="flex-1">
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      {/* Footer ONLY holds the footer — never changes, no matter the route */}
      <footer className="h-fit">
        <Footer />
      </footer>

    </div>
  );
};

export default App;