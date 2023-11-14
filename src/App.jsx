import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes
import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { Error404 } from './components/Error404';

// Estilos
import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route
                    path="/category/:id"
                    element={<ItemListContainer greeting="Bebidas" />}
                />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<Error404></Error404>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
