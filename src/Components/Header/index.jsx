import './style.css';
import { NavLink } from 'react-router-dom';
export const Header = () => {
  return (
    <nav>
      <NavLink to="/HomePage" activeClassName="active">
        HomePage
      </NavLink>
      <NavLink to="/FishAtlas" activeClassName="active">
        FishAtlas
      </NavLink>
      <NavLink to="/InfoPage" activeClassName="active">
        InfoPage
      </NavLink>
      <NavLink to="/Contacts" activeClassName="active">
        Contacts
      </NavLink>
    </nav>
  );
};
