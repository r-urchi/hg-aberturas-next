import Header from "@/components/Header";
import Cotizador from "@/components/Cotizador";
import InstagramIcon from "@/components/InstagramIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import MailIcon from "@/components/MailIcon";
import { EMAIL, INSTAGRAM, waLink } from "@/components/data";

const datos = [
  ["20 años", "de experiencia en el rubro de la construcción."],
  ["PVC y aluminio", "aberturas de alta prestación, con garantía."],
  ["CABA, GBA e interior", "trabajamos en Capital y GBA, y enviamos al interior del país."],
  ["Instalación en el día", "sobre tus marcos actuales, sin albañilería."],
];

const beneficios = [
  "Aislación termoacústica de primer nivel.",
  "Hermeticidad, seguridad y resistencia al viento.",
  "Libres de mantenimiento: una vida útil superior a cualquier otro material.",
  "Garantía e instalación con técnicos calificados.",
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="hero">
          <img className="hero__img" src="/media/foto6.jpg" alt="" />
          <div className="hero__text">
            <p className="hero__kicker">Aberturas de PVC y aluminio en CABA y GBA</p>
            <h1>HG Aberturas</h1>
            <p>Distribuimos aberturas de alta prestación y las instalamos con técnicos propios. Más confort, menos ruido y menos gasto de energía.</p>
            <div className="hero__cta">
              <a className="btn" href="#cotizar">Para viviendas</a>
              <a className="btn btn--ghost" href={waLink("Hola, consulto por aberturas para una obra")} target="_blank" rel="noopener">Para obras y desarrolladores</a>
            </div>
          </div>
        </section>

        <ul className="ventajas">
          {datos.map(([t, d]) => (
            <li key={t}><h3>{t}</h3><p>{d}</p></li>
          ))}
        </ul>

        <section id="quienes-somos" className="split">
          <img src="/media/FotoQuienesSomos.JPG" alt="Casa con aberturas instaladas por HG Aberturas" />
          <div>
            <h2>Aberturas eficientes para cada proyecto</h2>
            <p>Somos una empresa distribuidora de aberturas de PVC de alta prestación y aluminio. Te acompañamos desde la elección de la abertura más conveniente hasta la instalación.</p>
            <ul className="check">
              {beneficios.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <a className="btn" href="#cotizar">Iniciar mi cotización</a>
          </div>
        </section>

        <section id="modalidades" className="modos">
          <h2>Dos formas de renovar tus aberturas</h2>
          <p>Elegí según el estado de tu obra. En los dos casos tomamos las medidas en el lugar.</p>
          <div className="modos__grid">
            <article>
              <img src="/media/foto4.jpg" alt="Galería vidriada con aberturas de PVC" />
              <div>
                <h3>Obra nueva</h3>
                <p>Te asesoramos en la elección, tomamos medidas en obra e instalamos las aberturas en el momento que lo necesite tu proyecto.</p>
              </div>
            </article>
            <article>
              <img src="/media/FotoProducto.jpg" alt="Ventana de PVC instalada sobre marco existente" />
              <div>
                <h3>Sobre marcos existentes</h3>
                <p>Instalamos tu ventana nueva sobre los marcos actuales, sin albañilería y sin obra húmeda. El trabajo se hace en el día.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="productos" className="productos">
          <h2>Productos</h2>
          <p className="lead">Ventanas eficientes con estándares óptimos de aislación termoacústica. Combinan diseño, elegancia y ahorro energético.</p>
          <div className="productos__grid">
            <article>
              <img src="/media/foto7.jpg" alt="Ventana de PVC blanca" />
              <h3>PVC</h3>
              <p>Perfiles multicámara con excelente aislación térmica. Colores a elección y terminaciones símil madera.</p>
            </article>
            <article>
              <img src="/media/foto9.jpg" alt="Ventanas corredizas de aluminio negro" />
              <h3>Aluminio</h3>
              <p>Líneas finas y grandes superficies vidriadas, con vidrio DVH y rotura de puente térmico.</p>
            </article>
            <article>
              <img src="/media/FotoProducto2.JPG" alt="Puerta corrediza de PVC en galería con parrilla" />
              <h3>Puertas y complementos</h3>
              <p>Puertas corredizas, cortinas de PVC o aluminio, mosquiteros y distintos tipos de cierre.</p>
            </article>
          </div>
        </section>

        <section id="servicios" className="video">
          <h2>Mirá cómo trabajamos</h2>
          <p>Un recorrido por nuestras aberturas y por el servicio de instalación.</p>
          <video controls muted loop playsInline preload="metadata">
            <source src="/media/HG-promo.mp4" type="video/mp4" />
          </video>
        </section>

        <section id="obras" className="obras">
          <h2>Obras</h2>
          <div className="obras__grid">
            <img src="/media/foto3.jpg" alt="Cerramiento de balcón con vista a la ciudad" />
            <img src="/media/foto2.jpg" alt="Puerta corrediza de aluminio en living" />
            <img src="/media/foto1.jpg" alt="Ventanas de PVC blancas con vista al jardín" />
          </div>
        </section>

        <section id="novedades" className="novedades">
          <h2>Novedades</h2>
          <a className="novedades__nota" href="https://noticias.perfil.com/noticias/empresas-y-protagonistas/hg-aberturas-aberturas-de-alto-rendimiento.phtml" target="_blank" rel="noopener">
            <img src="/media/noticias.JPG" alt="Nota sobre HG Aberturas en Revista Noticias" />
            <div>
              <small>Revista Noticias</small>
              <h3>HG Aberturas: aberturas de alto rendimiento</h3>
              <p>Aislación termoacústica, seguridad y confort, con reciclado de aberturas sin necesidad de una obra húmeda.</p>
              <span className="link">Leer la nota →</span>
            </div>
          </a>
          <a className="novedades__ig" href={INSTAGRAM} target="_blank" rel="noopener">
            <InstagramIcon size={28} />
            <span><b>@hg_aberturas</b> Mirá nuestros trabajos en Instagram</span>
            <span className="link">Seguinos →</span>
          </a>
        </section>

        <section id="cotizar" className="cotizar">
          <div>
            <h2>¡Cotizá tus aberturas hoy mismo!</h2>
            <p>Completá las medidas y el tipo de abertura. Te llega el pedido armado por WhatsApp y te respondemos con el presupuesto.</p>
            <div className="cotizar__info">
              <b>Oficina comercial</b>
              <span>Marcos Sastre 2895, CABA</span>
            </div>
          </div>
          <Cotizador />
        </section>
      </main>

      <footer id="contacto" className="footer">
        <div>
          <h2>Contacto</h2>
          <p>Oficina comercial: Marcos Sastre 2895, CABA, Argentina</p>
          <p><a className="ig-link" href={waLink()} target="_blank" rel="noopener"><WhatsAppIcon size={20} /> +54 11 4069 7236</a></p>
          <p><a className="ig-link" href={`mailto:${EMAIL}`}><MailIcon size={20} /> {EMAIL}</a></p>
          <p><a className="ig-link" href={INSTAGRAM} target="_blank" rel="noopener"><InstagramIcon size={20} /> instagram.com/hg_aberturas</a></p>
        </div>
        <iframe
          title="Ubicación de HG Aberturas"
          loading="lazy"
          src="https://www.google.com/maps?q=Marcos+Sastre+2895,+CABA,+Argentina&output=embed"
        />
      </footer>

      <a className="wa" href={waLink("Hola, quiero hacer una consulta")} target="_blank" rel="noopener"><WhatsAppIcon size={24} /></a>
    </>
  );
}
