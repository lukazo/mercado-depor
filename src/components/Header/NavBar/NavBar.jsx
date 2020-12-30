import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import CartWidget from '../../CartWidget/CartWidget';
import CartWidgetIcon from '../CartWidgetIcon/CartWidgetIcon';

import './NavBar.css';
import logo from '../../../assets/Images/logo.png';

function NavBar() {

    const [navBar, setNavBar] = useState([]);

    const navLink = [
        {
            nombre: 'Home',
            ruta:'/',
        },
        {
            nombre: 'Dulces',
            ruta:'/category/Dulces',
        },
        {
            nombre: 'Salados',
            ruta:'/category/Salados',
        },
        {
            nombre: 'Integral',
            ruta:'/category/Integrales',
        }
    ];

    const getLinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(navLink)
        }, 1000)
    })

    const getLinksDB = async () => {
        try {
            const resultadoLinks = await getLinks;
            setNavBar(resultadoLinks) 
        } catch(error) {
            alert ('No es posible cargar el menú')
        }
    }

    useEffect(() => {
        getLinksDB();
    })

    const [showCartWidget, setShowCartWidget] = useState(false);
  
    const openCartWidget = () => {
        setShowCartWidget(!showCartWidget);
    }
  
    return (
        <>
            <header>
                <Link to="/">
                    <article className="logo">
                        <figure>
                            <img src={logo} alt="Logo Waffle House" />    
                        </figure>
                    </article>
                </Link>
                {
                    <nav className="navBar">
                        {
                            navBar.length ?
                            <ul>
                                {
                                    navBar.map((link,index) => (
                                        <span className="navLink" key={index}>
                                            <Link to={`${link.ruta}`}>
                                                {link.nombre}
                                            </Link>
                                        </span>
                                    ))
                                }
                                <li onClick={openCartWidget}><CartWidgetIcon /></li>
                            </ul>
                            : <p>Cargando especialidades...</p> 
                        } 
                    </nav>
                }
            </header>
        <CartWidget show={showCartWidget} action={openCartWidget} />
        </>
    );
}

export default NavBar;