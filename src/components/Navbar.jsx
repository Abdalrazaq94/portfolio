import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
import portrait from "../assets/portrait.png";

const UNDERLINE_GREEN = "#F3C89E";

function NavLink({ href, active, color, onClick, children }) {
  return (
    <RoughNotation type="underline" show={active} animate={false} color={UNDERLINE_GREEN} strokeWidth={3} padding={2}>
      <RoughNotation type="highlight" show={true} animate={false} color={color} strokeWidth={2} padding={[16, 28]}>
        <Link
          to={href}
          onClick={onClick}
          className="relative inline-block font-bold px-2 mx-2 transition-transform duration-200 hover:scale-110"
        >
          {children}
        </Link>
      </RoughNotation>
    </RoughNotation>
  );
}

export default function Navbar({ onOpenCv }) {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname.replace(/^\/|\/$/g, "");

  const navItems = [
    { key: "work", href: "/work", label: "Work", color: "#C9E4C5" },
    { key: "about", href: "/about", label: "About", color: "#C9E4C5" },
    { key: "contact", href: "/contact", label: "Contact", color: "#C9E4C5" },
  ];

  function isActive(href) {
    return currentPath === href.replace(/^\/|\/$/g, "");
  }

  return (
    <header className="sticky top-0 z-20 w-full py-4 backdrop-blur-sm" style={{ backgroundColor: "rgba(245, 242, 234, 0.1)" }}>
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="w-full flex flex-col pb-4 border-b-2 border-black">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={portrait} alt="Abadi" className="w-10 h-10 rounded-full object-cover border border-black" />
              <span
  className="font-black text-xl tracking-tight"
  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
>
  Abadi / <span style={{ color: "#758F6B" }}>dev</span>
</span>
            </Link>

            <nav className="hidden md:flex items-center gap-10 text-lg font-medium">
              <NavLink href="/work" color="#C9E4C5" active={isActive("/work")}>Projects</NavLink>
              <NavLink href="/about" color="#C9E4C5" active={isActive("/about")}>About Me</NavLink>
              <NavLink href="/contact" color="#C9E4C5" active={isActive("/contact")}>Contact</NavLink>
            </nav>

            <div className="hidden md:flex items-center gap-5 text-lg font-medium">
              <button onClick={onOpenCv} className="underline underline-offset-4 hover:opacity-70 transition font-bold">
                View CV
              </button>

              <span className="text-black/30">|</span>

              <NavLink href="/contact" color="#F3C89E" active={isActive("/contact")}>Let's talk</NavLink>
            </div>

            <button
              onClick={function () { setOpen(!open); }}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-6 h-0.5 bg-black"></span>
            </button>
          </div>

          {open ? (
           <div className="md:hidden flex flex-col items-start gap-4 pt-5 text-lg font-medium">
              {navItems.map(function (item) {
                return (
                  <NavLink
                    key={item.key}
                    href={item.href}
                    color={item.color}
                    active={isActive(item.href)}
                    onClick={function () { setOpen(false); }}
                  >
                    {item.label}
                  </NavLink>
                );
              })}

              <button
                onClick={function () { onOpenCv(); setOpen(false); }}
                className="text-left underline underline-offset-4 font-bold"
              >
                View CV
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}