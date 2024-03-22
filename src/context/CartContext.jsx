import { createContext, useState } from "react";

export const CartContext = createContext();

const initialState = JSON.parse(localStorage.getItem("cart")) || [];

console.log({ initialState });
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(initialState);

	const addToCart = (item) => {
		const itemInCartIndex = cart.findIndex(
			(product) => item.id === product?.id
		);
		if (itemInCartIndex >= 0) {
			const newState = structuredClone(cart);
			newState[itemInCartIndex].qty++;
			setCart(newState);
			return;
		}
		const newState = [
			...cart,
			{
				...item,
				qty: 1,
			},
		];
		localStorage.setItem("cart", JSON.stringify(newState));
		setCart(newState);
	};

	const removeFromCart = (item) => {
		const newState = cart.filter((i) => i.id !== item.id);
		localStorage.setItem("cart", JSON.stringify(newState));
		setCart(newState);
	};

	const decreaseQuantity = (item) => {
		if (item.qty < 2) return;
		const newState = cart.map((i) =>
			i.id === item.id ? { ...i, qty: i.qty - 1 } : i
		);
		localStorage.setItem("cart", JSON.stringify(newState));

		setCart(newState);
	};

	const clearCart = () => {
		localStorage.removeItem("cart");
		setCart([]);
	};

	const getTotal = () => {
		let total = 0;
		cart.forEach((item) => {
			total += item.price * item.qty;
		});
		return total;
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				decreaseQuantity,
				clearCart,
				getTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
