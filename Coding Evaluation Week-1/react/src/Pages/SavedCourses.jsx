import { useMemo } from "react";
import SavedCourseCard from "../components/SavedCourseCard";

export default function SavedCourses({ saved, onRemove }) {
  const total = useMemo(() => saved.reduce((sum, c) => sum + c.price, 0), [saved]);

  if (saved.length === 0) return <div style={{ padding: "24px" }}>No saved courses yet</div>;

  return (
    <div style={{ padding: "24px" }}>
      <h2>Saved Courses ({saved.length})</h2>
      <p>Total Price: ₹{total}</p>
      <div style={{ display: "grid", gap: "16px" }}>
        {saved.map(c => <SavedCourseCard key={c.id} course={c} onRemove={onRemove} />)}
      </div>
    </div>
  );
}