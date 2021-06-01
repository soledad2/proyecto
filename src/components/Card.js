import SearchBar from "./Search";
import Button from "./Button";
import credencial from "../assets/img/credencial.png"

const image = "../assets/img/credencial-seccion.jpg"


function Card(props) {
    return(
        
        <div id="Card"className="row">
            <img src={credencial}/>
            <p class= "Estado">Coloca tu Estado</p>
            <div><SearchBar /></div>
            <p class="Seccion">Coloca tu Sección (La que se indica en la imagen)</p>
            <div><SearchBar /></div>
            <div><Button /></div>

        </div>
    )
}

export default Card;
