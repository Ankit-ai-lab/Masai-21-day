import { memo } from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = memo(({ course, onSave, isSaved }) => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
      <h3>{course.title}</h3>
      <p>{course.category} | {course.level} | {course.duration}</p>
      <p>₹{course.price}</p>
      <button onClick={() => navigate(`/courses/${course.id}`)}>View Details</button>
      <button onClick={() => onSave(course)} disabled={isSaved} style={{ marginLeft: "8px" }}>
        {isSaved ? "Saved" : "Save Course"}
      </button>
    </div>
  );
});

export default CourseCard;