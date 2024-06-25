import React from "react";
import { useCart } from "./CartContext";

const Product = [
	{
		id: 1,
		name: "Product A",
	},
	{
		id: 2,
		name: "Product B",
	},
	{
		id: 3,
		name: "Product C",
	},
	{
		id: 4,
		name: "Product D",
	},
];

const ShoppingCart = () => {
	const { cartState, cartDispatch } = useCart();
	console.log(cartState);

	const addToCart = (item) => {
		const existingItem = cartState.cartItems.find((i) => i.id === item.id);
		if (existingItem) {
			cartDispatch({
				type: "update",
				payload: { ...item, quantity: existingItem.quantity + 1 },
			});
		} else {
			cartDispatch({ type: "add", payload: { ...item, quantity: 1 } });
		}
	};

	return (
		<div>
			<h1>Shopping Cart</h1>
			<ul>
				{cartState.cartItems.map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantity}
					</li>
				))}
			</ul>
			<h1>Product List</h1>
			<ul>
				{Product.map((item) => (
					<li key={item.id}>
						{item.name}
						<button onClick={() => addToCart(item)}>
							Add to Cart
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ShoppingCart;
