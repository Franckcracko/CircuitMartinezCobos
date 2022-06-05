import { useState, useEffect } from 'react';
import { getSections } from '../../sectionnav';
import './estilosNavBar.css';
import CartWidget from './CartWidget';
import Section from '../../Section/Section';
const NavBar = () =>{
    const [sections, setSections] = useState([])
    
    useEffect(() =>{
        getSections().then((response) =>{
            setSections(response)
        })
    }, [])
    return(
        <>
        <header class="header">
            <div class="logo-header">
                <img src={"/images/logo.png"} alt="" />
                <span style={{marginLeft:'.3rem'}}>Circuit</span>
            </div>
            <nav class="nav-menu">
                <ul>
                    {sections.map( sect => <Section key={sect.id} {...sect}/>)}
                   <CartWidget />
                </ul>
            
            </nav>
        </header>
        </>
        )
}
export default NavBar