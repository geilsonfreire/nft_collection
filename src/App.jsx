import "./App.css"; // Importing CSS file
import React, { useEffect } from 'react';

// Import bibliotecas
import { useLocation } from 'react-router-dom'; // Import react-router-dom

// Importing components
import Login from "./Components/Pages/Login/Login"; // Importing Login component
import Menu from "./Components/Pages/Panel/Menu"; // Importing Menu component
import Container from "./Components/Pages/Panel/Container"; // Importing Container component


// import Bibliootecas
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'; // Importing react-router-dom


function App() {
    /* const location = useLocation(); // Get the location

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Login - NFT Collection";
                break;
            case "/Home":
                document.title = "Home - NFT Collection";
                break;
        } // Switch the location
    }, [location]); */

    return (

        <div className="App">
            <Router>
                {/* <Menu /> */}
                <Routes>
                    <Route path="/" element={<Login />} />

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
