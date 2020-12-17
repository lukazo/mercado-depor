import ItemCard from '../../../components/ItemCard/ItemCard';
import './Featured.css';

const Featured = () => {
    return (
        <section className="productosDestacados">
            <h1>Productos destacdos</h1>
            <ul>
                <li><ItemCard titulo="Producto 1" precio="200" /></li>
                <li><ItemCard titulo="Producto 2" precio="400" /></li>
                <li><ItemCard titulo="Producto 3" precio="500" /></li>
                <li><ItemCard titulo="Producto 4" precio="100" /></li>
            </ul>
        </section>
    );
}

export default Featured;