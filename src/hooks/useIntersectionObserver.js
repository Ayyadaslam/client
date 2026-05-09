// useIntersectionObserver.js
// Utility hook for scroll-based animations (fade-in, scale, parallax)
import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  triggerOnce = true,
} = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIntersecting(false);
        }
      },
      { threshold, root, rootMargin },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold, root, rootMargin, triggerOnce]);

  return [ref, isIntersecting];
}
