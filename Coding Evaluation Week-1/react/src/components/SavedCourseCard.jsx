import { memo } from "react";

const SavedCourseCard = memo(({ course, onRemove }) => (
  <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px" }}>
    <h3>{course.title}</h3>
    <p>{course.category} | {course.level}</p>
    <p>₹{course.price}</p>
    <button onClick={() => onRemove(course.id)}>Remove</button>
  </div>
));

export default SavedCourseCard;