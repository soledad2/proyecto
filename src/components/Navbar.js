import Contacto from "./Contacto";
import Search from "./Search";
import Logo from "./Logo";
import Boostrap from "../index"
import Nosotros from "./Nosotros";

function Navbar() {
    return(
        <div id="Navbar" className="row-3 d-flex">
            <Logo />
            <p class="title"> ¿Sabes quiénes son tus candidatos? </p>
            <Contacto />
            <Nosotros />
            {/* <SearchBar /> */}
        </div>
    )
}




export default Navbar;