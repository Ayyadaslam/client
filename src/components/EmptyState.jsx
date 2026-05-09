// EmptyState.jsx
// Generic empty state component with illustration
import React from "react";

export default function EmptyState({
  icon = null,
  title = "Nothing here",
  description = "",
  action = null,
  illustration = null,
  style = {},
}) {
  return (
    <div className="empty-state" style={style}>
      {illustration && <div className="empty-illustration">{illustration}</div>}
      {icon && <div className="empty-icon">{icon}</div>}
      <h2 className="empty-title">{title}</h2>
      {description && <p className="empty-desc">{description}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
}

// CSS (add to your global or component CSS):
/*
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-2xl);
  text-align: center;
  color: var(--color-neutral-700);
}
.empty-title {
  font-size: var(--font-size-xl);
  margin: var(--space-md) 0 var(--space-xs) 0;
}
.empty-desc {
  font-size: var(--font-size-md);
  color: var(--color-neutral-500);
}
.empty-action {
  margin-top: var(--space-lg);
}
*/
