
import Guitarra from "./components/Guitarra"
import Header from "./components/Header"
import { db } from "./data/db"
import  useCarrito  from './hooks/useCarrito';


function App() {

  
  const data = db;
  
  const {
      carrito,
      addToCart,
      deleteFromCart,
      increaseQuantity,
      decreaseQuantity,
      clearCart
    } = useCarrito();


  return (
    <>
       <Header
       carrito={carrito}
       deleteFromCart={deleteFromCart}
       increaseQuantity={increaseQuantity}
       decreaseQuantity={decreaseQuantity}
       clearCart={clearCart}
       />


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            
        {data.map((guitarra) => (

            <Guitarra key={guitarra.id}  
            guitarra={guitarra}
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
