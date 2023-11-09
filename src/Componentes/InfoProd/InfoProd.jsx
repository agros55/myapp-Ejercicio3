import { useParams } from "react-router-dom";
import Products from '../Productos/data';
const InfoProd = () => {
    let { id } = useParams();
    console.log(id);
    let Product = Products.find(prod => prod.Id == id);
    console.log(Product);
    return (
        <div className="InfoProd">
            <h1>{Product.Nombre}</h1>
            <img src={Product.Imagen} alt="" />
            <p>{Product.Descripcion}</p>
            <p>{Product.Precio}</p>
            <p>{Product.Stock}</p>
            <p>{Product.SKU}</p>
        </div>
    );
}

export default InfoProd;