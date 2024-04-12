import React from 'react'; // Import React
import './Container.css'; // Import CSS
import ContainerHeader from './ContainerHeader'; // Import ContainerHeader component

// Create a functional component called Container
function Container() {
  return (
    <div className="Container">
        <ContainerHeader />
    </div>
  );
}

export default Container // Export the component