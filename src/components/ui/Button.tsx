import type { ReactNode } from "react";
import "./button.css";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  href = "#kontakt",
  variant = "primary",
  className,
}: Props) {
  return (
    <a href={href} className={`btn btn--${variant} ${className ?? ""}`}>
      <span>{children}</span>
    </a>
  );
}
