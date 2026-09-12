import { NavLink } from "react-router-dom";

// isActive is true if the current URL matches the NavLink's "to" prop. Otherwise, isActive is false.
// current URL: /me
// NavLink:     /me
//              ↑
//            match
const navLinkClasses = ({ isActive }) =>
  `font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5  hover:font-extrabold hover:text-cyan-100 ${
    isActive ? "text-cyan-100 font-extrabold" : ""
  }`;

const GlassNav = () => {
  return (
    <div className="hidden sm:flex h-fit bg-outline-variant text-on-surface-variant button-text  px-4 py-2 rounded-full justify-around bg-blur-lg border-dim">
      <NavLink to="/" className={navLinkClasses}>
        Home
      </NavLink>
      <NavLink to="/#work" className={navLinkClasses}>
        Work
      </NavLink>
      <NavLink to="/about" className={navLinkClasses}>
        About
      </NavLink>
      <NavLink to="/#connect" className={navLinkClasses}>
        Connect
      </NavLink>
    </div>
  );
};
export default GlassNav;
