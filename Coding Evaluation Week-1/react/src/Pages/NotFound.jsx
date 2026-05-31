import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "24px" }}>
      <h2>404 Page Not Found</h2>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}