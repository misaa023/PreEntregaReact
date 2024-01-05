import { Link } from 'react-router-dom';
export const CardWidget = () => {
    return (
        <Link to="/cart">
            <span className="text-xl ml-10">🛒</span>
        </Link>
    );
};
