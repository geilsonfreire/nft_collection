import React from "react"; // Import React
import "./MainContainer.css"; // Import CSS
import Banner from "../Assets/imgs/NFT.jpg"; // Import the banner image
import MainCardsContainer from "./MainCardsContainer"; // Import the MainCardsContainer component
import { LiaDownloadSolid } from "react-icons/lia"; // Import the LiaDownloadSolid icon

// imports das imagens dos cards
import NFT1 from "../Assets/Nft_Img/nft1.jpg";



// Function to create the MainContainer component
function MainContainer() {
    return (
        <div className="MainContainer">
            <div className="left">
                <div className="Banner" style={{
                    background: `url(${Banner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"}}>

                    <div className="TextContainer">
                        <h1>Destaque do dia</h1>
                        <h2>1.5 ETH</h2>
                        <p>Com mais de 3.5 milhões downloads</p>
                        <div className="Down">
                            <button className="Button">
                                <i className="ButtonDown">
                                    <LiaDownloadSolid />
                                </i>
                                <a href="" className="ButtonDown">
                                    Downloade
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="ContainerCards">
                    <div className="Filters">
                        <div className="Populares">
                            <h2>Feed</h2>
                            <div className="FilterButtons">
                                <button>
                                    <a href="">Todos</a>
                                </button>
                                <button>
                                    <a href="">Populares</a>
                                </button>
                                <button>
                                    <a href="">Personagens</a>
                                </button>
                                <button>
                                    <a href="">Objetos</a>
                                </button>
                                <button>
                                    <a href="">Flores</a>
                                </button>
                                <button>
                                    <a href="">Veículos</a>
                                </button>
                            </div>
                        </div>
                    </div>   {/* Container dos Filtros */}

                    <main>
                        <MainCardsContainer imgSrc={NFT1} title={"Princesa"} hearts = {"65"} />
                    </main>

                </div>

            </div> {/* Container Geral esquerdo */}



            <div className="right"></div>
        </div> // Container geral
    );
}

export default MainContainer; // Export the MainContainer component