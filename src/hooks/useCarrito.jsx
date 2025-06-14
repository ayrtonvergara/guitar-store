import { useState, useEffect } from 'react';

function useCarrito() {
    
    const initialCarrito = () => {

    const localStorageCarrito = localStorage.getItem('carrito')
    return localStorageCarrito ? JSON.parse(localStorageCarrito) : []

    }
  
  const [carrito,setCarrito] = useState(initialCarrito) 
  const maxItems = 10;
  const minItems = 1;

  useEffect(() =>{
    localStorage.setItem('carrito', JSON.stringify(carrito)) // se coloca lo que quieres almacenar el en localStorage y su valor, en este caso el acrrito es un arreglo por eso se cambia a string
  }, [carrito])

    
  function addToCart (item) {
    const itemExist = carrito.findIndex(guitarra => guitarra.id === item.id)
    console.log(itemExist)
    if(itemExist >= 0) { // existe en el carrito
      if(carrito[itemExist].quantity >= maxItems) return
      const updatedCarrito = [...carrito];
      updatedCarrito[itemExist].quantity += 1;
      setCarrito(updatedCarrito);
    }else{
      item.quantity = 1;
      console.log('no existe en el carrito') //no existe en el carrito
      setCarrito([...carrito, item]) //toma 1 copia del carrito y le agrega el nuevo elemento
    }
    
  }

  function deleteFromCart(idEliminar){
    const updatedCarrito = carrito.filter(guitarra => guitarra.id !== idEliminar);
    setCarrito(updatedCarrito);
  }

  function increaseQuantity(idIncrementar) {
     const updatedCarrito = carrito.map(items => {
      if(items.id === idIncrementar && items.quantity < maxItems) {
        return {...items, quantity: items.quantity + 1}
      }
      return items;
     })  
     setCarrito(updatedCarrito);
  }

  function decreaseQuantity(idDecrementar) {
    const updatedCarrito = carrito.map(items => {
      if(items.id === idDecrementar && items.quantity > minItems) {
        return {...items, quantity: items.quantity - 1}
      }
      return items;
     })  
     setCarrito(updatedCarrito);   

  }
  function clearCart() {
    setCarrito([]);
  }


  return {
    carrito,
    addToCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
  };
}

export default useCarrito;