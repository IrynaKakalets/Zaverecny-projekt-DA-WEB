import './style.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  
  return (
    <nav className="header">

    <div class="name">

    <h1 class="animated-title">Akvarijní rybičky pro začátečníky</h1>

    </div>

      <div className='navWrapper'>
      <NavLink className="headerLink" to="/" activeClassName="active">
        O rybách
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
      </NavLink></div>
    </nav>
  );
};
