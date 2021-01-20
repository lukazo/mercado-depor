import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
//import { productList } from '../../assets/Products/products';
import ProductDetail from './ProductDetail';
import {getFirestore} from '../../db';

const Detail = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const db = getFirestore();
    

    useEffect(() => {
        db.collection('productos').get()
        .then(doc => {
            if(doc.exists) {
                setProduct(doc.data())
            }
        })
        .catch(e => console.log(e))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);
    
    // const getProduct = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         const detailId = productList.find( idProducto => idProducto.id === id ) 
    //         resolve(detailId);
    //     }, 1000)
    // })

    // const getProductDB = async () => {
    //     try {
    //         const getDetalle = await(getProduct);
    //         setProduct(getDetalle)
    //     } catch(error) {
    //         return console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getProduct.then(response => setProduct(response)).catch(error => console.log(error))
    // })

    return (
        <>
            {
                product ?
                    <article>
                        <ProductDetail itemDetail={product} />
                    </article>
                : <p>Cargando detalle...</p>
                
            }

            <section>
                otros productos recomendados
            </section>   
        </>
    );
}

export default Detail;