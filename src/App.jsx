import { useEffect, useState } from "react"
import Guitarra from "./components/Guitarra"
import Header from "./components/Header"
import { db } from "./data/db"


function App() {


  const [data, setData] = useState(db)
  const [carrito,setCarrito] = useState([]) 
  

  function addToCart (item) {

    const itemExist = carrito.findIndex(guitarra => guitarra.id === item.id)
    console.log(itemExist)
    if(itemExist >= 0) { // existe en el carrito
      const updatedCarrito = [...carrito]; 
      updatedCarrito[itemExist].quantity += 1;
      setCarrito(updatedCarrito); 
    }else{
      item.quantity = 1;
      console.log('no existe en el carrito') //no existe en el carrito
      setCarrito([...carrito, item]) //toma 1 copia del carrito y le agrega el nuevo elemento
    }
    
  }

  function deleteFromCart(idAEliminar){
    const updatedCarrito = carrito.filter(guitarra => guitarra.id !== idAEliminar);
    setCarrito(updatedCarrito);
  }

  useEffect(() => {

    setData(data) 
  }, [data])


  return (
    <>
       <Header
       carrito={carrito}

        deleteFromCart={deleteFromCart}
       
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
