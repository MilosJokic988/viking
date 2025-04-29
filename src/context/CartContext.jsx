import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Dodavanje proizvoda u korpu
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }  // Povećava količinu ako proizvod već postoji
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);  // Dodaje proizvod sa početnom količinom 1
    }
  };

  // Uklanjanje proizvoda iz korpe
  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  // Povećanje količine proizvoda u korpi
  const increaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }  // Povećava količinu
          : item
      )
    );
  };

  // Smanjenje količine proizvoda u korpi
  const decreaseQuantity = (productId) => {
    setCart(
      cart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }  // Smanjuje količinu samo ako je veća od 1
          : item
      )
    );
  };

  // Vraća ukupnu količinu proizvoda u korpi
  const getCartCount = () => {
    return cart.reduce((count, product) => count + (product.quantity || 0), 0);
  };

  // Vraća ukupnu cenu proizvoda u korpi
  const getTotal = () => {
    return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
  };

  // Čisti celu korpu
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartCount,
        getTotal,
        clearCart,  // Dodao sam ovu funkciju
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
