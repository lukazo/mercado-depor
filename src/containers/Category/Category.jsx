import {useParams} from 'react-router-dom';
import Featured from '../Featured/Featured';

const Category = () => {
    const {category_id} = useParams();

    const categorySwitch = (category) => {
        switch(category) {
            case 'Dulces': return <Featured />;
            case 'Salados': return <Featured />;
            case 'Integrales': return <Featured />;
            default: return <p>Esta categoría no existe</p>
        }
    }

    return (
        <>
            {
               categorySwitch(category_id) 
            }
        </>
    )
}
export default Category;