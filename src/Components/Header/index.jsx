import './style.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <nav className="hlavicka">
      <NavLink className="headerLink" to="/" activeClassName="active">
        Domů
      </NavLink>
      <NavLink className="headerLink" to="/FishAtlas" activeClassName="active">
        Atlas ryb
      </NavLink>
      <NavLink className="headerLink" to="/InfoPage" activeClassName="active">
        Jak začít s akváriem
      </NavLink>
      <NavLink className="headerLink" to="/Quiz" activeClassName="active">
        Kvíz
      </NavLink>
      <NavLink className="headerLink" to="/Contacts" activeClassName="active">
        Kontakty
      </NavLink>
    </nav>
  );
};
