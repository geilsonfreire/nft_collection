import "./App.css"; // Importing CSS file

// Importing components
import Menu from "./Components/Pages/Panel/Menu"; // Importing Menu component
import Container from "./Components/Pages/Panel/Container"; // Importing Container component


// import Bibliootecas
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'; // Importing react-router-dom


function App() {
    return (

        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Container />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App; // Exporting App component
