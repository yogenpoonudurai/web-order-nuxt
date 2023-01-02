import { Product } from "~~/types/product.type";

type CartItem = Product & { quantity: number };

export const useCartStore = defineStore("cart", () => {
  const cart = ref<CartItem[]>([]);

  function addProduct(cartItem: CartItem) {
    const cartIndex = cart.value.findIndex((v) => v.id === cartItem.id);
    const item = cart.value[cartIndex];

    if (cartIndex > -1) {
      item.quantity++;
      cart.value[cartIndex] = item;
      return;
    }

    cart.value.push(cartItem);
  }

  function getTotal() {
    return cart.value.reduce((sum, v) => sum + v.price * v.quantity, 0);
  }

  return {
    cart,
    addProduct,
    getTotal,
  };
});
