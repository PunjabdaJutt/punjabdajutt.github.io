"use client";

import { useEffect, useState } from "react";

export function HeroTypewriter({ roles }: { roles: string[] }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) {
      const id = setTimeout(() => setText(roles[0]), 0);
      return () => clearTimeout(id);
    }

    const current = roles[roleIndex];
    const typingSpeed = deleting ? 35 : 65;
    const atFullWord = !deleting && text === current;
    const atEmpty = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (atFullWord) {
          setDeleting(true);
        } else if (atEmpty) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        } else {
          const next = deleting
            ? current.slice(0, text.length - 1)
            : current.slice(0, text.length + 1);
          setText(next);
        }
      },
      atFullWord ? 1400 : atEmpty ? 300 : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, roles]);

  return (
    <span aria-live="polite">
      {text}
      <span className="animate-pulse text-accent-bright">|</span>
    </span>
  );
}
