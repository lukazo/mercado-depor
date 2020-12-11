import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
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
        </>
    );
}

export default NavBar;