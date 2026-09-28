"use client";

import type { ReactNode } from "react";
import { useRevealOnce } from "../home/components/useRevealOnce";

export function RevealBlock({ children, className, id, threshold = 0.16 }: { children: ReactNode; className: string; id?: string; threshold?: number }) {
  const { ref, isVisible } = useRevealOnce(threshold);
  return <section ref={ref} className={`${className}${isVisible ? " is-visible" : ""}`} id={id}>{children}</section>;
}
