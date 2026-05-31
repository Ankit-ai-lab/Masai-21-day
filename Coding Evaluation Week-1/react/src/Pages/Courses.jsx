import { useState, useMemo, useRef } from "react";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

export default function Courses({ saved, onSave }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const inputRef = useRef();

  const filtered = useMemo(() => {
    return courses.filter(c => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || c.category === category;
      return matchSearch && matchCat;
    });
  }, [search, category]);

  return (
    <div style={{ padding: "24px" }}>
      <input ref={inputRef} value={search} onChange={e => setSearch(e.target.value)} placeholder="Search courses..." />
      <button onClick={() => inputRef.current.focus()}>Focus Search</button>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {["All", "Frontend", "Backend", "AI", "Data"].map(c => <option key={c}>{c}</option>)}
      </select>
      <p>Showing {filtered.length} courses</p>
      <div style={{ display: "grid", gap: "16px" }}>
        {filtered.map(c => (
          <CourseCard key={c.id} course={c} onSave={onSave} isSaved={!!saved.find(s => s.id === c.id)} />
        ))}
      </div>
    </div>
  );
}