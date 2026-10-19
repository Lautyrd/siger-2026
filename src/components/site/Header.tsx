import { Icon } from "./Icon";
import { nav } from "./data";

export function Logo() {
  return (
    <div className="logo" aria-label="SIGER">
      <span className="logo-main">SIGER</span>
    </div>
  );
}

export function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="container topbar-in">
          <div className="tb-item"><Icon name="pin" size={15} /><div><small>Casa Central</small>Av. 1 y Calle 47</div></div>
          <div className="tb-item"><Icon name="phone" size={15} /><div><small>Teléfonos</small>11 0000-1234</div></div>
          <div className="tb-item"><Icon name="mail" size={15} /><div><small>Correo</small>Siger@transporte.com.ar</div></div>
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
