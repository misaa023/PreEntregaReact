import { CardWidget } from './CardWidget';
export const NavBar = () => {
    return (
        <nav className=" bg-slate-800 text-white p-3">
            <h1 className="ml-20">LOGO</h1>
            <ul className="flex space-x-16 justify-end mr-9">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Contacto</a>
                </li>
                <li>
                    <CardWidget />
                </li>
            </ul>
        </nav>
    );
};
