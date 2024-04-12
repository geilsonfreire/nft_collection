import React from "react"; // Import React
import "./ContainerHeader.css"; // Import CSS
import { BiSearchAlt2 } from "react-icons/bi"; // Import IconName from react-icons/bi
import { FaBell, FaChevronDown } from "react-icons/fa"; // Import IconName from react-icons/fa
import Geilson from "../Assets/Geilson.png"; // Import Image from Geilson.png

// Create a functional component called ContainerHeader
function ContainerHeader() {
  return (
    <div className="ContainerHeader">
      <div className="InputBox">
        <input type="text" placeholder="Pesaquise colleções" />
        <i className="SearchIcon"><BiSearchAlt2 /></i>
      </div> {/* Container do imput */}

      <div className="PerfilConatiner">

            <i className="NotifiqueIcon"><FaBell /></i>

            <div className="PerfilImg">
                <img src={Geilson} alt="Geilson Freire" />
            </div>

            <p className="PerfilName">Geilson Freire</p>

            <i className="MneuChevron" id="MneuChevron"><FaChevronDown  /></i>

      </div> {/* Container do perfil */}
    </div>
  );
}

export default ContainerHeader; // Export the component