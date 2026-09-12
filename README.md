The Portfolio first commit .. includes  file structure and starter code , i created the about me section .. needs editing  .
# Portfolio Project — Routing & Structure Guide

A reference for how this React portfolio is organized, how routing works, and how the navbar links (both page-routes and scroll-to-section links) are wired up.

---

## 1. Tech Stack

- **React** (with Vite)
- **React Router DOM** — handles page navigation without full browser reloads
- **Tailwind CSS** — utility-based styling

---

## 2. File Structure

```
src/
├── main.jsx                 # App entry point — wraps everything in BrowserRouter
├── App.jsx                  # Main layout: Header (Navbar) + Main (Routes) + Footer
├── index.css
│
├── layout/
│   ├── Navbar.jsx            # Top navbar wrapper (logo + GlassNav + icon)
│   ├── Sidebar.jsx           # Mobile nav drawer (small screens)
│   └── Footer.jsx
│
├── components/
│   ├── GlassNav.jsx          # Desktop nav links (Home / Work / About / Connect)
│   └── ScrollToHash.jsx      # Handles smooth-scrolling to a section via URL hash
│
├── pages/                    # Full pages — swapped in/out by React Router
│   ├── Home.jsx               # Contains Hero, Work section, Connect CTA, etc.
│   ├── Work.jsx                # (if Work is its own page instead of a section)
│   ├── About.jsx
│   └── Connect.jsx
│
├── sections/                 # Chunks of content that live INSIDE a page (e.g. Home)
│   ├── Hero.jsx
│   ├── WorkSection.jsx        # id="work"
│   ├── AboutSection.jsx       # id="about"
│   └── ConnectSection.jsx     # id="connect"
│
└── assets/
    └── sun.svg
```

**Rule of thumb:**
- `pages/` = full pages, one shown at a time, swapped by React Router based on the URL.
- `sections/` = pieces of content stacked inside a single page (e.g. Home), each with its own `id` so the navbar can scroll to them directly.

---

## 3. How Routing Is Set Up

### `main.jsx`
Wraps the whole app in `<BrowserRouter>` so routing works anywhere inside `<App />`.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

### `App.jsx`
Defines the page layout. **Header and Footer stay fixed** on every page. **Only `<main>` swaps content**, based on the current route.

```jsx
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
      <ScrollToHash />

      {/* Header: always the same, never changes per route */}
      <header className="h-fit">
        <Navbar />
      </header>

      {/* Main: THIS is where the page content swaps based on URL */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </main>

      {/* Footer: always the same, never changes per route */}
      <footer className="h-fit">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
```

**Mental model:**

```
┌─────────────────────────────┐
│         <header>             │  ← Navbar. Fixed. Same on every page.
├─────────────────────────────┤
│   <main> <Routes> </main>    │  ← Swaps: Home / Work / About / Connect
├─────────────────────────────┤
│         <footer>             │  ← Footer. Fixed. Same on every page.
└─────────────────────────────┘
```

---

## 4. Two Kinds of Navbar Links

| Link type | Example | What it does |
|---|---|---|
| **Route link** | `Home`, `About`, `Connect` (if separate pages) | Swaps the whole `<main>` content to a different page |
| **Scroll link** | `Work` (a section inside Home) | Scrolls smoothly to a section on the current or target page |

### Route links — `GlassNav.jsx`

```jsx
import { NavLink } from "react-router-dom";

const navLinkClasses = ({ isActive }) =>
  `font-body text-button-text m-2 transition-all duration-200 hover:-translate-y-0.5 hover:font-extrabold hover:text-cyan-100 ${
    isActive ? "text-cyan-100 font-extrabold" : ""
  }`;

const GlassNav = () => {
  return (
    <div className="hidden sm:flex h-fit bg-outline-variant text-on-surface-variant px-4 py-2 rounded-full justify-around bg-blur-lg border-dim">
      <NavLink to="/" className={navLinkClasses}>Home</NavLink>
      <NavLink to="/#work" className={navLinkClasses}>Work</NavLink>
      <NavLink to="/about" className={navLinkClasses}>About</NavLink>
      <NavLink to="/#connect" className={navLinkClasses}>Connect</NavLink>
    </div>
  );
};

export default GlassNav;
```

- `to="/"` and `to="/about"` → full page route changes.
- `to="/#work"` and `to="/#connect"` → route to `/` (if not already there) **and** scroll to that section.

### Section targets — inside `Home.jsx`

```jsx
<section id="work">   {/* matches "#work" in the link */}
  ...
</section>
```

---

## 5. Scroll-to-Section: `ScrollToHash.jsx`

React Router does **not** auto-scroll to `#hash` links — this component adds that behavior manually.

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  // Get the "#something" part and the "/page" part of the current URL
  const { hash, pathname } = useLocation();

  // Re-run this logic every time the URL changes
  useEffect(() => {
    if (hash) {
      // Wait briefly so the new page has time to render first
      setTimeout(() => {
        const el = document.querySelector(hash); // find element with matching id
        if (el) {
          el.scrollIntoView({ behavior: "smooth" }); // scroll to it smoothly
        }
      }, 100);
    } else {
      // No hash in URL — scroll to top instead
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null; // this component renders nothing visible — logic only
};

export default ScrollToHash;
```

Placed once, near the top of `App.jsx`, inside the router tree.

---

## 6. Behavior Summary

| You click | You're currently on `/` | You're currently on `/about` |
|---|---|---|
| **Home** | stays on Home, scrolls to top | routes to `/`, scrolls to top |
| **Work** | smooth-scrolls to `#work` | routes to `/`, then scrolls to `#work` |
| **About** | routes to `/about` | stays on `/about` |
| **Connect** (navbar or CTA button) | smooth-scrolls to `#connect` | routes to `/`, then scrolls to `#connect` |

---

## 7. To-Do Checklist

- [ ] Create placeholder `pages/Work.jsx`, `pages/About.jsx`, `pages/Connect.jsx`
- [ ] Add `id="work"` and `id="connect"` to the matching sections inside `Home.jsx`
- [ ] Move `Sidebar.jsx` (mobile nav) into `App.jsx` — not inside `Home.jsx` — so it's present on every page
- [ ] Wire up `Sidebar.jsx` links using the same `NavLink` pattern, and make sure clicking a link also closes the sidebar
- [ ] Double check every `to="..."` in the navbar matches a real `path="..."` in `App.jsx`, or a real `id="..."` in a section

---

## 8. Key Terms Glossary (for reference)

- **`useEffect`** — runs code after the component renders; re-runs when listed dependencies change.
- **`useLocation()`** — React Router hook that returns info about the current URL (`pathname`, `hash`, etc.).
- **`document.querySelector(selector)`** — plain JS; finds the first HTML element matching a CSS selector (e.g. `"#work"`).
- **`scrollIntoView({ behavior: "smooth" })`** — browser method that smooth-scrolls an element into view.
- **`NavLink`** — React Router component like a normal link, but knows when it's "active" (current route) for styling.
- **`Routes` / `Route`** — define which component renders for which URL path.
