import "./App.css"; // Importing CSS file
import React, {  } from 'react';

// Importing components
import Login from "./Components/Pages/Login/Login"; // Importing Login component
import Register from "./Components/Pages/Login/Register"; // Importing Register component
import Menu from "./Components/Pages/Panel/Menu"; // Importing Menu component
import Container from "./Components/Pages/Panel/Container"; // Importing Container component



// import Bibliootecas
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing react-router-dom


function App() {
    

    return (

        <div className="App">
            <Router>
                {/* <Menu /> */}
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Register" element={<Register />} />

                    <Route path="/Home" element={
                        <>
                            <Menu />
                            <Container />
                        </>
                    } />
                </Routes>
            </Router>
        </div>
    );
}

export default App; // Exporting App component
