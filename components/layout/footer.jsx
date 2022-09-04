import * as React from "react";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 text-sm md:gap-4 md:flex-row text-slate-600">
      <a
        href="https://github.com/iamsahebgiri"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-sm transition-colors text-slate-600 hover:text-primary font-semibold"
      >
        Privacy Policy
      </a>
      <span className="font-semibold">
        Copyright {new Date().getFullYear()}
      </span>
    </footer>
  );
}
