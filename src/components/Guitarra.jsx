/**
 * Componente Guitarra
 * Renderiza la información de una guitarra y un botón para agregarla al carrito.
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.nuevaGuitarra - Objeto que contiene la información de la guitarra.
 * @param {string} props.nuevaGuitarra.name - Nombre de la guitarra.
 * @param {string} props.nuevaGuitarra.image - Ruta de la imagen de la guitarra.
 * @param {string} props.nuevaGuitarra.description - Descripción de la guitarra.
 * @param {number} props.nuevaGuitarra.price - Precio de la guitarra.
 * @returns {JSX.Element} - Retorna el JSX que representa el componente.
 */
function Guitarra({ guitarra, addToCart }) {
    const { name, image, description, price } = guitarra;

    /**
     * Maneja el clic en el botón "Agregar al Carrito".
     *
     * @param {Object} guitarra - Objeto con la información de la guitarra.
     */
    

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">{price}</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitarra)}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default Guitarra;