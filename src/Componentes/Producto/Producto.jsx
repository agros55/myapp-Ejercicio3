
import './Producto.css';

const Producto = ({ Imagen, Nombre, Descripcion, Precio, SKU, Stock }) => {

    return (
        <div className='Producto'>
            <img src={Imagen} alt={Nombre} />
            <h2 className='Item Nombre'>{Nombre}</h2>
            <div className="Compra">
                <h3 className='Item Precio'>{Precio}</h3>
                <button className='Item Btn'>Comprar</button>
            </div>
            <div className="Compra">
                <p className='Item SKU'>SKU: {SKU}</p>
                <p className='Item Stock'>Disponibles: {Stock}</p>
            </div>
            <p className='Item Descripcion'>{Descripcion}</p>

        </div>
    );
}

export default Producto;
