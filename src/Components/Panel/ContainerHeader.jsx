import React, { useState, useEffect} from "react"; // Import React
import "./ContainerHeader.css"; // Import CSS
import { BiSearchAlt2 } from "react-icons/bi"; // Import IconName from react-icons/bi
import { FaBell, FaChevronDown } from "react-icons/fa"; // Import IconName from react-icons/fa
import Geilson from "../../Assets/imgs/Geilson.png"; // Import Image from Geilson.png


// Create a functional component called ContainerHeader
function ContainerHeader() {

    // criando um estado para o placeholder
    const [placeholder, setPlaceholder] = useState(""); // Estado para armazenar o placeholder
    const placeholderFull = "Coleções"; // String completa do placeholder
    // Índice para acompanhar a posição atual na string do placeholder
    const [index, setIndex] = useState(0);
    

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

        // Função para animar o placeholder
        // Função para adicionar o próximo caractere ao placeholder
        const addNextCharacter = () => {
            if (index < placeholderFull.length) {
                // Adiciona o próximo caractere ao placeholder
                setPlaceholder((prev) => prev + placeholderFull[index]);
                setIndex((prev) => prev + 1); // Atualiza o índice
            };
        };
        // Define um intervalo para chamar a função addNextCharacter a cada 200ms
        const timer = setInterval(addNextCharacter, 200);

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(timer);
        
    }, [index]); // Atualiza o useEffect quando o index é alterado



    return (
        <div className="ContainerHeader">
            <div className="InputBox">
                <input type="text" placeholder={placeholder} />
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