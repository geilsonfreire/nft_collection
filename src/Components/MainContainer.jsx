import React from "react"; // Import React
import "./MainContainer.css"; // Import CSS
import Banner from "../Assets/imgs/NFT.jpg"; // Import the banner image
import Fogo from "../Assets/imgs/Fogo.gif"; // Import the fogo image
import { LiaDownloadSolid } from "react-icons/lia"; // Import the LiaDownloadSolid icon

// Function to create the MainContainer component
function MainContainer() {
    return (
        <div className="MainContainer">
            <div className="left">
                <div className="Banner" style={{
                    background: `url(${Banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}>
                    <div className="TextContainer">
                        <h1>Destaque do dia</h1>
                        <h2>1.5 ETH</h2>
                        <p>Com mais de 3.5 milhões downloads</p>
                        <div className="Down">
                            <button>
                                <i className="SearchIcon">
                                    <LiaDownloadSolid />
                                </i>
                                <a href="" className="ButtonDown">
                                    Downloade
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
}

export default MainContainer; // Export the MainContainer component