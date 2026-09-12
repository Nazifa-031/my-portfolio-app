//this component role is to listen for changes in the URL's hash and scroll to the corresponding element on the page.
// It uses the "useLocation" hook from React Router to get the current URL information, including the hash and pathname. When the hash changes, it checks if there is a corresponding element with that ID and scrolls to it smoothly. If there is no hash, it scrolls to the top of the page.
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  // Pull out "hash" (the #work) and "pathname" (the /page part) from the current URL
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // If there is a hash in the URL, scroll to the element with that ID
    if (hash) {
      // Use setTimeout to delay the scroll action until after the page has rendered
      setTimeout(() => {
        // Find the actual HTML element with id="work" (matches the hash)
        const el = document.querySelector(hash);

        // If we found it, scroll smoothly until it's in view
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If there is no hash, scroll to the top of the page
      window.scrollTo(0, 0, { behavior: "smooth" });
    }
  }, [hash, pathname]); // Re-run this effect whenever the hash or pathname changes

  return null; // return is null because this component doesn't render anything to the DOM or display any UI.
};
export default ScrollToHash;
