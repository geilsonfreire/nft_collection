import React, { useEffect } from "react"; // Import React
import "./ContainerHeader.css"; // Import CSS
import { BiSearchAlt2 } from "react-icons/bi"; // Import IconName from react-icons/bi
import { FaBell, FaChevronDown } from "react-icons/fa"; // Import IconName from react-icons/fa
import Geilson from "../Assets/Geilson.png"; // Import Image from Geilson.png


// Create a functional component called ContainerHeader
function ContainerHeader() {

    useEffect(() => { // UseEffect to open and close the drop menu
        // Get the elements by ID   
        const MenuTarget = document.getElementById('MenuChevron');
        const MenuContainer = document.getElementById('MenuConteiner');

        // Add the event listener to the element
        MenuTarget.addEventListener("mouseenter", () => {
            MenuTarget.style.transform = "rotate(180deg)";
            MenuContainer.style.transform = "translateX(0px)";
        }); // Evento de mouse houver para abrir o menu dropdown
        
        MenuContainer.addEventListener("mouseleave", () => {
            MenuTarget.style.transform = "rotate(0deg)";
            MenuContainer.style.transform = "translateX(300px)";
        }); // Evento de mouse houver para fechar o menu dropdown
        
    }, []);



    return (
        <div className="ContainerHeader">
            <div className="InputBox">
                <input type="text" placeholder="Pesaquise colleções" />
                <i className="SearchIcon"><BiSearchAlt2 /></i>
            </div> {/* Container do imput */}

            <div className="PerfilConatiner">

                <i className="NotifiqueIcon"><FaBell /></i> {/* Icone de notificação */}

                <div className="PerfilImg">
                    <img src={Geilson} alt="Geilson Freire" />
                </div> {/* Imagem do perfil */}

                <p className="PerfilName">Geilson Freire</p> {/* Nome do perfil */}

                <i className="MenuChevron" id="MenuChevron"><FaChevronDown /></i> {/* Icone de seta para baixo */}

                <div className="MenuContainer" id="MenuConteiner">
                    <ul>
                        <li>Perfil</li>
                        <li>Configurações</li>
                        <li>Sair</li>
                    </ul>
                </div> {/* Container do menu drop*/}
            </div> {/* Container do perfil */}
        </div>
    );
}

export default ContainerHeader; // Export the component