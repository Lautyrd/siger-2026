import mascota from "@/assets/mascota.png";
import { Icon, Eyebrow } from "./Icon";
import { empresas, pasos, sucursales, nav } from "./data";

export function Empresas() {
  return (
    <section className="sec sec-white">
      <div className="container emp-grid">
        <div>
          <Eyebrow>Empresas y comercios</Eyebrow>
          <h2 className="h2 big">Logística que acompaña el ritmo de tu operación.</h2>
          <p className="lead">Pensamos cada envío como parte de una cadena de trabajo. Por eso ofrecemos una atención enfocada en la coordinación, la frecuencia y las necesidades reales de cada comercio.</p>
          <div className="emp-cards">
            {empresas.map((e) => <div className="ecard" key={e.t}><strong>{e.t}</strong><p>{e.d}</p></div>)}
          </div>
        </div>
        <div className="steps-wrap">
          <div className="steps">
            <h3>Una solución para integrar a tu circuito comercial.</h3>
            <p>Coordinamos cada servicio de acuerdo con origen, destino, frecuencia y características de la carga.</p>
            {pasos.map((p, i) => (
              <div className="step" key={p.t}><span>0{i + 1}</span><div><strong>{p.t}</strong><p>{p.d}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Sucursales() {
  return (
    <section className="sec sec-black">
      <div className="container">
        <Eyebrow>Puntos de atención</Eyebrow>
        <h2 className="h2">Casa Central y sucursales.</h2>
        <p className="lead">Direcciones y canales de contacto oficiales de Expreso Morabito.</p>
        <div className="grid4 suc">
          {sucursales.map((s) => (
            <article className="sucard" key={s.n}>
              <h3>{s.n}</h3>
              {s.cc && <span className="cc">Casa Central</span>}
              <p className="dir">{s.dir}</p>
              <a href="#" className="maps"><Icon name="pin" size={15} /> Ver en Google Maps</a>
              <div className="suc-info">
                <p><span>Tel.</span> {s.tel.join(" / ")}</p>
                {s.wa && <p><span>WhatsApp:</span> {s.wa}</p>}
                <p>{s.mail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="cta">
      <div className="container cta-in">
        <h2>Contanos qué necesitás transportar y coordinamos la mejor alternativa.</h2>
        <a href="#" className="btn btn-white">Solicitar información</a>
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
          <p className="lead">Completá el formulario o comunicate con nuestra Casa Central en Capital Federal.</p>
          <div className="cbox">
            <div><small>WhatsApp · Casa Central</small><strong>11 6742-7165</strong></div>
            <div><small>Teléfonos · Casa Central</small><strong>(011) 4942-2627 / 6686</strong></div>
            <div><small>Correo</small><strong>capital@transportemorabito.com.ar</strong></div>
          </div>
        </div>
        {/* Formulario solo visual: sin envío */}
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <h3>Solicitá una cotización</h3>
          <p className="fsub">Seleccioná el punto de origen y la consulta se derivará al equipo correspondiente.</p>
          <div className="fgrid">
            <label>Nombre y apellido<input placeholder="Tu nombre" /></label>
            <label>Empresa o comercio<input placeholder="Nombre de la empresa" /></label>
            <label>Teléfono<input placeholder="Tu teléfono" /></label>
            <label>Correo electrónico<input placeholder="tu@correo.com" /></label>
            <label>Origen del envío
              <select defaultValue=""><option value="" disabled>Seleccioná el punto de origen</option><option>Capital Federal / AMBA</option><option>La Plata y Alrededores</option><option>Mar de Ajó y Costa Atlántica</option><option>Villa Gesell</option></select>
            </label>
            <label>Destino<input placeholder="Localidad de destino" /></label>
            <label className="full">Detalle de la carga<textarea rows={5} placeholder="Contanos qué necesitás enviar" /></label>
          </div>
          <p className="hint">Elegí un origen para definir qué punto de atención recibirá la consulta.</p>
          <button type="submit" className="btn btn-primary">Enviar consulta</button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-in">
        <div><strong>EXPRESO MORABITO</strong><p>Encomiendas y cargas generales</p></div>
        <nav>{[...nav, "Contacto"].map((n) => <a key={n} href="#">{n}</a>)}</nav>
      </div>
      <a href="#" className="help"><span>¿Te ayudamos?</span><img src={mascota} alt="" width={816} height={816} loading="lazy" /></a>
    </footer>
  );
}
