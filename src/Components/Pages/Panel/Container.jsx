import React, { useEffect } from 'react'; // Import React
import './Container.css'; // Import CSS

// Import bibliotecas
import { useLocation } from 'react-router-dom'; // Import react-router-dom


// Import components
import ContainerHeader from './ContainerHeader'; // Import ContainerHeader component
import MainContainer from './MainContainer'; // Import MainContainer component

// Create a functional component called Container
function Container() {
    const location = useLocation(); // Get the location

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                document.title = "Home - NFT Collection";
                break;
            case "/":
                document.title = "Home - NFT Collection";
                break;
        } // Switch the location
    }, [location]);

    return (
        <div className="Container">
            <ContainerHeader />
            <MainContainer />
        </div>
    );
}

export default Container // Export the component