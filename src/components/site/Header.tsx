import { Icon } from "./Icon";
import { nav } from "./data";

export function Logo() {
  return (
    <div className="logo" aria-label="Expreso Morabito">
      <span className="logo-top">EXPRESO</span>
      <span className="logo-main">MORABITO</span>
    </div>
  );
}

export function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container topbar-in">
          <div className="tb-item"><Icon name="pin" size={15} /><div><small>Casa Central</small>Los Patos 2548/66 · CABA</div></div>
          <div className="tb-item"><Icon name="phone" size={15} /><div><small>Teléfonos</small>(011) 4942-2627 / 6686</div></div>
          <div className="tb-item"><Icon name="mail" size={15} /><div><small>Correo</small>capital@transportemorabito.com.ar</div></div>
          <div className="tb-social"><small>Seguinos</small><span>ig</span><span>f</span><span>w</span></div>
        </div>
      </div>
      <div className="navbar">
        <div className="logo-wrap"><Logo /></div>
        <div className="container nav-in">
          <nav className="nav">
            {nav.map((n) => <a key={n} href="#">{n}</a>)}
            <a href="#" className="nav-cta">Contacto</a>
          </nav>
          <button className="burger" aria-label="Menú"><span /><span /><span /></button>
        </div>
      </div>
    </header>
  );
}
