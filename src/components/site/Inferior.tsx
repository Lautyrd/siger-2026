import { Eyebrow } from "./Icon";
import { nav } from "./data";

export function Seguimiento() {
  return (
    <section className="sec sec-white">
      <div className="container contact-grid">
        <div>
          <Eyebrow>Seguimiento</Eyebrow>
          <h2 className="h2 big">Consultar estado de mi envío.</h2>
          <p className="lead">Ingresá el número de guía o seguimiento para conocer en qué etapa se encuentra tu envío.</p>
        </div>
        {/* Formulario solo visual: sin consulta real */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h3>Seguí tu envío</h3>
          <p className="fsub">El número figura en el comprobante entregado al despachar.</p>
          <div className="fgrid">
            <label className="full">Número de guía<input placeholder="Ej: 000123456" /></label>
          </div>
          <p className="hint">Si tenés dudas, comunicate con nuestra Casa Central.</p>
          <button type="submit" className="btn btn-primary">Consultar estado</button>
        </form>
      </div>
    </section>
  );
}

export function Contacto() {
  return (
    <section className="sec sec-sand">
      <div className="container contact-grid">
        <div>
          <Eyebrow>Contacto</Eyebrow>
          <h2 className="h2 big">Hablemos de tu próximo envío.</h2>
          <p className="lead">Completá el formulario o comunicate con nuestra Casa Central en Av. 1 y Calle 47.</p>
          <div className="cbox">
            <div><small>WhatsApp · Casa Central</small><strong>11 0000-1234</strong></div>
            <div><small>Teléfonos · Casa Central</small><strong>11 0000-1234</strong></div>
            <div><small>Correo</small><strong>Siger@transporte.com.ar</strong></div>
          </div>
        </div>
        {/* Formulario solo visual: sin envío */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h3>Solicitá una cotización</h3>
          <p className="fsub">Contanos los datos del envío y te respondemos a la brevedad.</p>
          <div className="fgrid">
            <label>Nombre y apellido<input placeholder="Tu nombre" /></label>
            <label>Empresa o comercio<input placeholder="Nombre de la empresa" /></label>
            <label>Teléfono<input placeholder="Tu teléfono" /></label>
            <label>Origen del envío<input placeholder="Localidad de origen" /></label>
            <label className="full">Destino<input placeholder="Localidad de destino" /></label>
            <label className="full">Detalle de la carga<textarea rows={5} placeholder="Contanos qué necesitás enviar" /></label>
          </div>
          <button type="submit" className="btn btn-primary" style={{ marginTop: 22 }}>Enviar consulta</button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-in">
        <div><strong>SIGER</strong><p>Encomiendas y cargas generales</p></div>
        <nav>{[...nav, "Contacto"].map((n) => <a key={n} href="#">{n}</a>)}</nav>
      </div>
    </footer>
  );
}
