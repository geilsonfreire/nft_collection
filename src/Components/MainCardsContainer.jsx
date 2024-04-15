import React from "react"; // Import React
import "./MainCardsContainer.css"; // Import CSS
import { BsHeartFill } from "react-icons/bs";


// Function to create the MainCardsContainer component
function MainCardsContainer({imgSrc, title, hearts}) {
    return (
        <div className="MainCardsContainer">
            <img src={imgSrc} alt="NFT Coleção" />

            <div className="CardsName">
                <h2>{title}</h2>

                <div className="CardsIcon">
                    <i> {""} <BsHeartFill /> <span> {hearts} </span>{""} </i>
                </div>
            </div>

            <div className="CardsStatus">
                <p>Oferta Atual <span>1.2 ETH</span></p>
                <p>Tempo Final <span>1d:1h:20m</span></p>
            </div>

            <div className="CardsButton">
                <button className="LanceButton">
                    <a href="">Lance</a>
                </button>
                <button className="SobreButton">
                    <a href="">Sobre</a>
                </button>
            </div>

        </div>
    );
}

export default MainCardsContainer; // Export the MainCardsContainer component
