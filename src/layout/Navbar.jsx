import GlassNav from "../components/GlassNav";
import sun from "../assets/sun.svg";

const Navbar = () => {
  return (
    <div className="w-full p-4 mb-section-gap ">
      <ul className="w-full grid grid-cols-3 items-center">
        <li className="justify-self-start">
          <h1 className="text-headline-lg font-display">Portfolio</h1>
        </li>
        <li className="justify-self-center">
          <GlassNav/>
        </li>
        <li className="justify-self-end">
          <img
            src={sun}
            alt="sun"
            className="transition-all duration-300 hover:brightness-150 hover:drop-shadow-[0_0_8px_#fff7a8]"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
