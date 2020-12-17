import CartWidget from '../CartWidgetIcon/CartWidgetIcon';
import './NavBar.css';

function NavBar() {
    return (
        <header>
            <h1>Waffle House</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Dulces</li>
                    <li>Salados</li>
                    <li>Integral</li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;