import Guitar from "./components/Guitar";
import Header from "./components/Header"
import useCarrito  from './hooks/useCarrito';


function App() {

  const {
      data,
      carrito,
      addToCart,
      deleteFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart,
      isEmpty,
      totalCarrito,
      
    } = useCarrito();


  return (
    <>
       <Header
       carrito={carrito}
       deleteFromCart={deleteFromCart}
       increaseQuantity={increaseQuantity}
       decreaseQuantity={decreaseQuantity}
       clearCart={clearCart}
       isEmpty={isEmpty}
       totalCarrito={totalCarrito}
       />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            
        {data.map((guitar) => (

            <Guitar key={guitar.id}  
            guitar={guitar}
            addToCart = {addToCart}/> 
           
        )
        )}
           

        </div>   
    </main>
    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

      
    </>
  )
}

export default App
