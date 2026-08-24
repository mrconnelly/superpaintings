"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Super Paintings, back to top">
        <span className="mark">SP</span>
        <span>Super Paintings</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen(!open)}
      >
        <span>{open ? "Close" : "Menu"}</span>
        <i aria-hidden="true" />
      </button>
      <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Main navigation">
        <a href="#story" onClick={close}>Story</a>
        <a href="#archive" onClick={close}>Archive</a>
        <a href="#process" onClick={close}>Process</a>
        <a href="#future" onClick={close}>Future</a>
      </nav>
    </header>
  );
}
