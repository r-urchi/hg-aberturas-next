"use client";
import { useEffect, useState } from "react";

const links = [
  ["quienes-somos", "Qué hacemos"], ["modalidades", "Cómo trabajamos"], ["productos", "Productos"], ["servicios", "Video"],
  ["obras", "Obras"], ["cotizar", "Cotizar"], ["novedades", "Novedades"], ["contacto", "Contacto"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = ["inicio", ...links.map(([id]) => id)];
    const update = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) return setActive("contacto");
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current === "inicio" ? null : current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="header">
      <a href="#inicio" className="header__logo"><img src="/media/hg-logo.jpg" alt="HG Aberturas" /></a>
      <button className="header__toggle" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
        {open ? "Cerrar" : "Menú"}
      </button>
      <nav id="menu" className="header__nav" data-open={open}>
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "true" : undefined} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
