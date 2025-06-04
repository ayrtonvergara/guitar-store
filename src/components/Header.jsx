import {useMemo} from 'react';

function Header({carrito,deleteFromCart}) {
        
    //useMemo es un hook de React que memoriza el resultado de una función para evitar cálculos innecesarios en cada renderizado.
    //El hook useMemo toma dos argumentos: una función que calcula un valor y un array de dependencias.
    //En este caso, se usa para determinar si el carrito está vacío y para calcular el total del carrito.       
    
    const isEmpty = useMemo(() => carrito.length === 0, [carrito]); 

    const TotalCarrito = useMemo(() => carrito.reduce((total,guitarra) => total + (guitarra.quantity * guitarra.price),0),[carrito]);//calcula el total del carrito multiplicando la cantidad por el precio de cada guitarra y sumando los totales



    return (

        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div className="carrito">
                        <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            
                            {isEmpty ? (
                                <p className="text-center">El carrito esta vacio</p>
                            ) : (
                                <>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                </thead>
                                <tbody>
                                    {carrito.map(guitarra => (
                                        <tr key={guitarra.id}>
                                                <td>
                                                    <img className="img-fluid" src={`/img/${guitarra.image}.jpg`} alt="imagen guitarra" />
                                                </td>
                                                <td>{guitarra.name}</td>
                                            <td className="fw-bold">
                                                ${guitarra.price.toLocaleString('es-CL')}
                                                <span className="fw-normal"></span>
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    -
                                                </button>
                                                    {guitarra.quantity}
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                    onClick={() =>deleteFromCart(guitarra.id)}
                                                    
                                                >
                                                     X
                                                </button>
                                            </td>
                                        </tr>
                                    ))} 
                                    
                                </tbody>                  
                            </table>
                            <p className="text-end">Total pagar: <span className="fw-bold">${(TotalCarrito).toLocaleString('es-CL')}</span></p>
                            </>
                             )}
                            
                            <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>   
    )
}

export default Header

