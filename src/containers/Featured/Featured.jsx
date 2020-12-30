import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productList } from '../../assets/Products/products';
import ItemCard from '../../components/ItemCard/ItemCard';
import './Featured.css';


const Featured = () => {

    const [itemList, setItemList] = useState([]);

    const {category_id} = useParams()

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 500)
    });
    
    const getItemsDB = async () => {
        try {
            const productList = await getItems;
            if(category_id) {
                const getProductList = productList.filter(
                    (filterList) => filterList.categoria === category_id
                );  
                setItemList(getProductList)
            } 
            else {
                setItemList(productList)
            }
        } catch (error) {
            alert('No podemos mostrar productos')
        }
    }

    useEffect(() => {
        getItemsDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])



    return (
        <section className="productosDestacados">
            {
                category_id ?
                    <h1>Waffles {category_id}</h1>
                : <h1>Productos destacdos</h1>
            }
            {
                itemList.length ?
                    <ul>
                        {
                            itemList.map((item) => (
                                <li key={item.id} className="container_itemCard">
                                    <ItemCard
                                        id={item.id}
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