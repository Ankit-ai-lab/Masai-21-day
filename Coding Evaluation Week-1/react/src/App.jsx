import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import SavedCourses from "./Pages/SavedCourses";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const [saved, setSaved] = useState([]);
  const { dark } = useTheme();

  const saveHandler = (course) => {
    setSaved(p => p.find(c => c.id === course.id) ? p : [...p, course]);
  };

  const removeHandler = (id) => {
    setSaved(p => p.filter(c => c.id !== id));
  };

  return (
    <div style={{ background: dark ? "#1a1a1a" : "#fff", color: dark ? "#fff" : "#000", minHeight: "100vh" }}>
      <BrowserRouter>
        <Navbar savedCount={saved.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses saved={saved} onSave={saveHandler} />} />
          <Route path="/courses/:courseId" element={<CourseDetails saved={saved} onSave={saveHandler} />} />
          <Route path="/saved" element={<SavedCourses saved={saved} onRemove={removeHandler} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}