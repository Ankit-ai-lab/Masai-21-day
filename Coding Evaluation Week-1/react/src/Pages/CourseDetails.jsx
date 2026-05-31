import { useParams, useNavigate } from "react-router-dom";
import courses from "../data/courses";

export default function CourseDetails({ saved, onSave }) {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === Number(courseId));

  if (!course) return <div style={{ padding: "24px" }}>Course not found</div>;

  const isSaved = !!saved.find(s => s.id === course.id);

  return (
    <div style={{ padding: "24px" }}>
      <h2>{course.title}</h2>
      <p>{course.category} | {course.level} | {course.duration}</p>
      <p>₹{course.price}</p>
      <p>{course.description}</p>
      <button onClick={() => onSave(course)} disabled={isSaved}>{isSaved ? "Saved" : "Save Course"}</button>
      <button onClick={() => navigate("/courses")} style={{ marginLeft: "8px" }}>Back to Courses</button>
    </div>
  );
}