import './estilosNavBar.css';
import CartWidget from './CartWidget';
const NavBar = () =>{
    return(
        <>
        <header class="header">
            <div class="logo-header">
                <img src={"/images/logo.png"} alt="" />
                <span>Circuit</span>
            </div>
            <nav class="nav-menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Quien soy</a></li>
                    <li><a href="#">Servicio</a></li>
                    <li><a href="#">Contacto</a></li>
                    <CartWidget />
                </ul>
            
            </nav>
        </header>
        </>
        )
}
export default NavBar