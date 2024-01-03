import { NavLink } from 'react-router-dom';
import { CardWidget } from './CardWidget';
import logo from '../assets/logo2.jpg';
export const NavBar = () => {
    return (
        <nav className=" text-white p-1 nav-bar">
            <img src={logo} alt="logo de la pagina" className="logo-img" />
            <ul className="flex space-x-16  justify-end mr-20 menu-link">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="category/cerveza">Cerveza</NavLink>
                <NavLink to="category/gaseosa">Gaseosa</NavLink>

                <li>
                    <CardWidget />
                </li>
            </ul>
        </nav>
    );
};
