"use client";
import { useState } from "react";
import { waLink } from "./data";
import WhatsAppIcon from "./WhatsAppIcon";

const vidrios = ["DVH (doble vidrio hermético)", "Vidrio simple 4 mm", "Vidrio 5 o 6 mm", "Laminado 3+3", "Esmerilado / fantasía"];
const colores = ["Blanco", "Negro", "Marrón", "Gris anodizado", "Símil madera"];
const extras = ["Mosquitero", "Cortina de PVC", "Cortina de aluminio", "Cierre semiautomático"];

export default function Cotizador() {
  const [material, setMaterial] = useState("PVC");
  const [sel, setSel] = useState<string[]>([]);
  const toggle = (x: string) => setSel((s) => (s.includes(x) ? s.filter((y) => y !== x) : [...s, x]));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = [
      `Hola, quiero cotizar aberturas.`,
      `Nombre: ${f.get("nombre")}`,
      `Material: ${material}`,
      `Medidas: ${f.get("ancho")} x ${f.get("alto")} cm, cantidad ${f.get("cantidad")}`,
      `Vidrio: ${f.get("vidrio")}`,
      `Color: ${f.get("color")}`,
      sel.length ? `Adicionales: ${sel.join(", ")}` : "",
      f.get("zona") ? `Zona: ${f.get("zona")}` : "",
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <form className="cotizador" onSubmit={onSubmit}>
      <fieldset className="cotizador__material">
        <legend>Material</legend>
        {["PVC", "Aluminio"].map((m) => (
          <label key={m} data-on={material === m}>
            <input type="radio" name="material" checked={material === m} onChange={() => setMaterial(m)} /> {m}
          </label>
        ))}
      </fieldset>
      <label>Nombre<input name="nombre" required maxLength={40} /></label>
      <label>Zona o localidad<input name="zona" placeholder="Ej: Villa Devoto, Pilar, Córdoba" /></label>
      <div className="cotizador__medidas">
        <label>Ancho (cm)<input name="ancho" type="number" min={30} required /></label>
        <label>Alto (cm)<input name="alto" type="number" min={30} required /></label>
        <label>Cantidad<input name="cantidad" type="number" min={1} defaultValue={1} required /></label>
      </div>
      <label>Tipo de vidrio<select name="vidrio">{vidrios.map((v) => <option key={v}>{v}</option>)}</select></label>
      <label>Color<select name="color">{colores.map((c) => <option key={c}>{c}</option>)}</select></label>
      <fieldset className="cotizador__extras">
        <legend>Adicionales</legend>
        {extras.map((x) => (
          <label key={x}><input type="checkbox" checked={sel.includes(x)} onChange={() => toggle(x)} /> {x}</label>
        ))}
      </fieldset>
      <button type="submit" className="btn"><WhatsAppIcon size={20} /> Enviar pedido por WhatsApp</button>
    </form>
  );
}
