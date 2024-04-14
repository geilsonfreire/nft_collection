import React from 'react'; // Import React
import './Container.css'; // Import CSS
import ContainerHeader from './ContainerHeader'; // Import ContainerHeader component
import MainContainer from './MainContainer'; // Import MainContainer component

// Create a functional component called Container
function Container() {
  return (
    <div className="Container">
        <ContainerHeader />
        <MainContainer />
    </div>
  );
}

export default Container // Export the component