// Imports Css
import './Container.css'; // Import CSS


// Import components
import ContainerHeader from './ContainerHeader'; 
import MainContainer from './MainContainer';

// Create a functional component called Container
const Container = () => {
    return (
        <div className="Container">
            <ContainerHeader />
            <MainContainer />
        </div>
    );
}

export default Container 