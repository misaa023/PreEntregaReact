import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { ItemListContianer } from './components/ItemListContianer';

function App() {
    return (
        <>
            <NavBar />
            <ItemListContianer />
        </>
    );
}

export default App;
