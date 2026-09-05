"use client";

import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <a className="wordmark" href="/" aria-label="Super Paintings, home">
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
        <a href="/#story" onClick={close}>Story</a>
        <a href="/paintings" onClick={close}>Paintings</a>
        <a href="/ar-viewer" onClick={close}>AR Viewer</a>
        <a href="/#process" onClick={close}>Process</a>
      </nav>
    </header>
  );
}
