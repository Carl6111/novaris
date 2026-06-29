import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./button.css";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  children,
  href = "/kontakt",
  variant = "primary",
  className,
}: Props) {
  const cls = `btn btn--${variant} ${className ?? ""}`;
  const isInternal = href.startsWith("/");

  if (isInternal) {
    return (
      <Link to={href} className={cls}>
        <span>{children}</span>
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      <span>{children}</span>
    </a>
  );
}
