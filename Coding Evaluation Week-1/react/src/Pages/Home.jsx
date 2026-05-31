import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "40px" }}>
      <h1>Welcome to Mini Course Dashboard</h1>
      <p>Explore and save your favourite courses.</p>
      <button onClick={() => navigate("/courses")}>Explore Courses</button>
    </div>
  );
}