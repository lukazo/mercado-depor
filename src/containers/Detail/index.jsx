import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { productList } from '../../assets/Products/products';
import ProductDetail from './ProductDetail';

const Detail = () => {

    const [product, setProduct] = useState([])
    
    const {id} = useParams()

    const getProduct = new Promise((resolve, reject) => {
        setTimeout(() => {
            const detailId = productList.find( idProducto => idProducto.id === id ) 
            resolve(detailId);
        }, 1000)
    })

    const getProductDB = async () => {
        try {
            const getDetalle = await(getProduct);
            setProduct(getDetalle)
        } catch(error) {
            return console.log(error)
        }
    }

    useEffect(() => {
        getProductDB();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    
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