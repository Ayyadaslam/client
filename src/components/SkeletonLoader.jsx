// SkeletonLoader.jsx
// Generic skeleton loader with shimmer animation
import React from "react";
import "../styles/animations.css";

export default function SkeletonLoader({
  type = "card",
  width,
  height,
  style,
}) {
  let className = "skeleton-loader";
  if (type === "card") className += " skeleton-card";
  if (type === "table") className += " skeleton-table";
  if (type === "block") className += " skeleton-block";
  return (
    <div
      className={className + " animate-shimmer"}
      style={{ width, height, ...style }}
      aria-busy="true"
      aria-label="Loading..."
    />
  );
}

// CSS (add to your global or component CSS):
/*
.skeleton-loader {
  border-radius: var(--radius-md);
  background: #f1f5f9;
  min-height: 1em;
  position: relative;
  overflow: hidden;
}
.skeleton-card { height: 200px; width: 100%; }
.skeleton-table { height: 32px; width: 100%; }
.skeleton-block { height: 16px; width: 100%; }
*/
