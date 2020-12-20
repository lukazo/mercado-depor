import {useState, useEffect} from 'react';
import CartWidget from '../../CartWidget/CartWidget';
import CartWidgetIcon from '../CartWidgetIcon/CartWidgetIcon';
import './NavBar.css';

function NavBar() {

    const [navBar, setNavBar] = useState([]);

    const navLink = [
        {
            category: 'Home',
            url:'',
        },
        {
            category: 'Dulces',
            url:'',
        },
        {
            category: 'Salados',
            url:'',
        },
        {
            category: 'Integral',
            url:'',
        }
    ];

    const getLinks = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(navLink)
        }, 400)
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
                <h1>Waffle House</h1>
                {
                    <nav>
                        {
                            navBar.length ?
                            <ul>
                                {
                                    navBar.map((link,index) => (
                                        <li key={index}>
                                            <a href={link.url}>
                                                {link.category}
                                            </a>
                                        </li>
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