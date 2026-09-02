"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "64px",
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(8, 8, 16, 0.92)"
            : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(124, 58, 237, 0.12)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(18px)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* LEFT — Name */}
        <a
          href="#hero"
          style={{
            textDecoration: "none",
            fontSize: "1rem",
            fontWeight: 600,
            color: "#f0eeff",
            letterSpacing: "-0.01em",
          }}
        >
          
        </a>

        {/* RIGHT — Navigation */}
        <ul
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 500,
                  color: "#9ca3af",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a78bfa";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9ca3af";
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            color: "#f0eeff",
            cursor: "pointer",
            padding: "4px",
          }}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "64px",
            left: 0,
            right: 0,
            zIndex: 99,
            padding: "1.5rem 2rem",
            background: "rgba(8, 8, 16, 0.98)",
            borderBottom: "1px solid rgba(124, 58, 237, 0.15)",
            backdropFilter: "blur(18px)",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "#9ca3af",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 500,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}