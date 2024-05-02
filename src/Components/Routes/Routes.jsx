import React from 'react';

// Import biblioteca
import { Routes, Route } from 'react-router-dom';

// Import Componentes
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Home from '../Pages/Home/Home';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Home" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
