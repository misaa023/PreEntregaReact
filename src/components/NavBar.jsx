import { NavLink } from 'react-router-dom';
import { CardWidget } from './CardWidget';
export const NavBar = () => {
    return (
        <nav className=" bg-slate-800 text-white p-3">
            <h1 className="ml-24">LOGO</h1>
            <ul className="flex space-x-16 justify-end mr-9">
                <NavLink to="/">Inicio</NavLink>
                <NavLink to="category/cerveza">Cerveza</NavLink>
                <NavLink to="category/gaseosa">gaseosa</NavLink>

                <li>
                    <CardWidget />
                </li>
            </ul>
        </nav>
    );
};
