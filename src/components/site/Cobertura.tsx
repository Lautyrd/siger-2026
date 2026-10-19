import mapa from "@/assets/mapa.jpg";
import { Eyebrow } from "./Icon";
import { bases, laPlata, costa, amba } from "./data";

const Chips = ({ items }: { items: string[] }) => (
  <div className="chips">{items.map((l) => <span className="chip" key={l}>{l}</span>)}</div>
);

export function Cobertura() {
  return (
    <section className="sec sec-dark cobertura">
      <div className="container cob-grid">
        <div>
          <Eyebrow>Cobertura</Eyebrow>
          <h2 className="h2 big">De AMBA a la Costa Atlántica, con bases propias en puntos clave.</h2>
          <p className="lead">Realizamos entregas y retiros en Capital Federal, Gran Buenos Aires, La Plata y distintas localidades de la Costa Atlántica.</p>
          <ul className="bases">
            {bases.map((b) => <li key={b.n}><strong>{b.n}</strong><span className="badge">{b.tag}</span></li>)}
          </ul>
        </div>
        <div className="map"><img src={mapa} alt="Mapa del recorrido entre Buenos Aires, La Plata y la Costa Atlántica" loading="lazy" width={1600} height={912} /></div>
      </div>

      <div className="container zonas">
        <Eyebrow>Detalle de cobertura</Eyebrow>
        <h2 className="h2 sm">Zonas y localidades que atendemos.</h2>
        <p className="lead narrow">La cobertura se organiza desde nuestra Casa Central y las sucursales, según los días de recorrido. Si tu localidad no figura, consultanos.</p>
        <div className="zgrid">
          <div className="zbox">
            <div className="zhead"><h4>Desde La Plata</h4><p>Localidades vinculadas al circuito de la sucursal La Plata.</p></div>
            <Chips items={laPlata} />
          </div>
          <div className="zbox">
            <div className="zhead"><h4>Costa Atlántica</h4><p>Localidades atendidas desde el corredor costero.</p></div>
            <Chips items={costa} />
          </div>
          <div className="zbox full">
            <div className="zhead"><h4>AMBA · entregas y retiros</h4><p>Cobertura completa en zona Sur, Norte y Oeste del Gran Buenos Aires.</p></div>
            <div className="amba">
              {amba.map((z) => (
                <div className="zsub" key={z.z}>
                  <h5>{z.z}</h5><span className="dias">{z.dias}</span>
                  <Chips items={z.l} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
