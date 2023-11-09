
import Producto from '../Producto/Producto';
import './Productos.css';
import Products from './data';

const Productos = () => {
    // Trayendo la lista de productos de data.js
    const Productos = Products;

    // Creando tarjeta de Producto por cada registro
    const listProducts = Productos.map(Product =>
        <Producto
            Id={Product.Id}
            Imagen={Product.Imagen}
            Nombre={Product.Nombre}
            Precio={Product.Precio}
            Descripcion={Product.Descripcion}
            SKU={Product.SKU}
            Stock={Product.Stock}
        />
    )

    return (
        // Devuelve una sección con los Productos
        <section className='Productos'>
            <h2>PRODUCTOS</h2>
            <div className="Lista-Productos">
                {listProducts}
            </div>
        </section>
    );
}

export default Productos;
