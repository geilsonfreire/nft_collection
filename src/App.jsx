// Imports Bibliotecas
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    getAuth,
    setPersistence,
    browserSessionPersistence,
    onAuthStateChanged
} from "firebase/auth";

// Import Css
import './App.css'

// Imports Components
import { app } from "./server/firebaseConfig";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import Home from "./pages/home/home";
import { AuthGoogleProvider } from "./contexts/authGoogle";

const App = () => {
    const [loading, setLoading] = useState(true);
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        const auth = getAuth(app); // Create a constant called auth
        setPersistence(auth, browserSessionPersistence) // Set persistence to session
            .then(() => {
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error setting persistence: ", error);
                setLoading(false);
            });

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!loading) {
                setAuthenticated(!!user);
            }
        });

        return () => unsubscribe();
    }, [loading]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="App">
            <Router>
                <AuthGoogleProvider>
                    <ToastContainer 
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        closeOnClick
                        pauseOnHover
                        draggable
                        pauseOnFocusLoss
                        rtl={false}
                    />
                    <Routes>
                        <Route path="/Login" element={<Login />} />
                        <Route path="/Register" element={<Register />} />
                        <Route path="/Home" element={<Home />} />
                        <Route
                            path="/"
                            element={authenticated ? <Navigate to="/Home" /> : <Navigate to="/Login" />}
                        />
                    </Routes>
                </AuthGoogleProvider>
            </Router>
        </div>
    )
}

export default App
