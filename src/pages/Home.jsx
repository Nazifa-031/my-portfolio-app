
import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    //Use flex flex-col on the parent container, and apply flex-grow (or flex-1) to the <Main /> component. This tells the page to give the Navbar and Footer exactly the space they need (h-fit), while forcing the main content area to dynamically stretch and fill the remaining space perfectly.
    // min-h-screen handles mobile browsers better than h-screen
      <div className=" flex flex-col w-full min-h-screen">
       {/* 1. Header/Navbar: Automatically wraps its content */}
      <header className="h-fit">
        <Navbar />
      </header>
    
      {/* 2. Main Content: Dynamically fills all remaining space */}
      <main className="flex-1">
        <Main />
      </main>

      {/* 3. Footer: Stays pinned at the bottom, takes up its own height */}
      <footer className="h-fit">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
