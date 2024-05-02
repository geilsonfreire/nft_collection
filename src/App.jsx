import "./App.css"; // Importing CSS file

// Import biblioteca
import { BrowserRouter as Router } from 'react-router-dom';

// Importing componentes
import AppRoutes from "./Components/Routes/Routes";



function App() {
    return (
        <div className="App">
            <Router>
                <AppRoutes />
            </Router>
        </div>
    );
}

export default App; // Exporting App component
