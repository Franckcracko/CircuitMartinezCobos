import { NavLink } from 'react-router-dom';
import './estilosNavBar.css';
import CartWidget from './CartWidget';

const NavBar = () =>{

    return(
        <>
        <header className="header">
            
            <div className="logo-header">
                <img src={"/images/logo.png"} alt="" />
                <NavLink to = '/'>
                    <span style={{marginLeft:'.3rem'}}>Circuit</span>
                </NavLink>
            </div>
            <nav className="nav-menu">
                <ul>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Inicio</NavLink>
                    <NavLink to={'/category/celulares'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Celulares</NavLink>
                    <NavLink to={'/category/tablets'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Tablets </NavLink>
                    <NavLink to={'/category/computadoras'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Computadoras </NavLink>
                    <NavLink to={'/category/laptops'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Laptops</NavLink>
                    <NavLink to={'/category/quienes_somos?'} className={({ isActive }) => isActive ? 'Activo' : 'Inactivo' }>Quienes Somos?</NavLink>
                   <CartWidget />
                </ul>
            
            </nav>
        </header>
        </>
        )
}
export default NavBar