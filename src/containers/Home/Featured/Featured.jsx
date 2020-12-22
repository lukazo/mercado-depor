import { useState, useEffect } from 'react';
import ItemCard from '../../../components/ItemCard/ItemCard';
import './Featured.css';

const Featured = () => {

    const [itemList, setItemList] = useState([]);

    const products = [
        {
            id: 1,
            nombre: 'Sweet dreams',
            description: 'Waffles con ...',
            precio: '300',
        },
        {
            id: 2,
            nombre: 'Tropical breeze',
            description: 'Waffles con ...',
            precio: '200',
        },
        {
            id: 3,
            nombre: 'Grooving spark',
            description: 'Waffles con ...',
            precio: '400',
        },
        {
            id: 4,
            nombre: 'Morning blast',
            description: 'Waffles con ...',
            precio: '100',
        },
    ]

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 3500)
    });
    
    const getItemsDB = async () => {
        try {
            const productList = await getItems;
            setItemList(productList)
        } catch (error) {
            alert('No podemos mostrar productos')
        }
    }

    useEffect(() => {
        getItemsDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <section className="productosDestacados">
            <h1>Productos destacdos</h1>
            {
                itemList.length ?
                    <ul>
                        {
                            itemList.map((item) => (
                                <li key={item.id}>
                                    <ItemCard
                                        nombre={item.nombre}
                                        description={item.description}
                                        precio={item.precio}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    : <p>Cargando Waffles...</p>
            }
        </section>
    );
}

export default Featured;