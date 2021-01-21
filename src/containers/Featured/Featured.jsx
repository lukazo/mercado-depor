import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { productList } from '../../assets/Products/products';
import ItemCard from '../../components/ItemCard/ItemCard';
import './Featured.css';
import {getFirestore} from '../../db';


const Featured = () => {

    const [itemList, setItemList] = useState([]);

    const db = getFirestore();

    const {category_id} = useParams()

    const getItemsDB = () => {
        db.collection('productos').get()
        .then(docs => {
            let arr = [];
            docs.forEach(doc => {
                arr.push({id: doc.id, data: doc.data()})
            })
            setItemList(arr)
            console.log(arr)
        })
        .catch(e => console.log(e))
    }
 
    useEffect(() => {
        getItemsDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category_id])

    // const getItems = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve(productList)
    //     }, 500)
    // });
    
    // const getItemsDB = async () => {
    //     try {
    //         const productList = await getItems;
    //         if(category_id) {
    //             const getProductList = productList.filter(
    //                 (filterList) => filterList.categoria === category_id
    //             );  
    //             setItemList(getProductList)
    //         } 
    //         else {
    //             setItemList(productList)
    //         }
    //     } catch (error) {
    //         alert('No podemos mostrar productos')
    //     }
    // }

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
                                        nombre={item.data.nombre}
                                        description={item.data.description}
                                        precio={item.data.precio}
                                        item={item.data}
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