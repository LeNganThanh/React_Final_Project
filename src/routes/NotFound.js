import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ paddingTop: "20rem" }}>The requested link is invalid!</h2>
      <button className="mt-4" onClick={() => navigate("/")}>
        Back to Homepage
      </button>
    </div>
  );
}
