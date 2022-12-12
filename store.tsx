import { Cart, Product } from "./model";
import { useLocalStorage } from "usehooks-ts";

export const useCart = () => {
  const [cart, setCart] = useLocalStorage<Cart>("cart", { items: [] });

  const addOrder = (order: Product) => {
    if (cart.items.find((item) => item.slug === order.slug) !== undefined) {
      console.log("order already added");
      return increaseQuantity(order.slug);
    }
    setCart((prevState) => ({
      ...prevState,
      items: [...prevState.items, order],
    }));
  };

  const removeOrder = (slug: string) => {
    setCart((prevState) => ({
      ...prevState,
      items: prevState.items.filter((c) => c.slug !== slug),
    }));
  };

  const increaseQuantity = (slug: string) => {
    const addOne = cart.items.map((c) =>
      c.slug === slug ? { ...c, quantity: c.quantity + 1 } : c
    );
    setCart((prevState) => ({ ...prevState, items: addOne }));
  };

  const decreaseQuantity = (slug: string) => {
    const subtractOne = cart.items.map((c) =>
      c.slug === slug ? { ...c, quantity: c.quantity - 1 } : c
    );
    setCart((prevState) => ({ ...prevState, items: subtractOne }));
  };

  const emptyCart = () => {
    setCart((prevState) => ({
      ...prevState,
      items: [],
    }));
  };

  return {
    cart,
    addOrder,
    removeOrder,
    increaseQuantity,
    decreaseQuantity,
    emptyCart,
  };
};
