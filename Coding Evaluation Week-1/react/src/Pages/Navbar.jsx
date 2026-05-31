// import { NavLink } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

// export default function Navbar({ savedCount }) {
//   const { dark, toggle } = useTheme();

//   return (
//     <nav style={{ display: "flex", gap: "16px", padding: "12px 24px", background: dark ? "#111" : "#eee", alignItems: "center" }}>
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/courses">Courses</NavLink>
//       <NavLink to="/saved">Saved ({savedCount})</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <button onClick={toggle} style={{ marginLeft: "auto" }}>
//         {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//       </button>
//     </nav>
//   );
// }


import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggle } = useTheme();

  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/saved">Saved</NavLink>
      <NavLink to="/about">About</NavLink>
      <button onClick={toggle}>
        {dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </nav>
  );
}