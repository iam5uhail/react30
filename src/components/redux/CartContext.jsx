import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
	const initialState = {
		cartItems: [],
	};

	function reducer(state, action) {
		switch (action.type) {
			case "add":
				return {
					...state,
					cartItems: [...state.cartItems, action.payload],
				};
			case "update":
				return {
					...state,
					cartItems: state.cartItems.map((item) =>
						item.id === action.payload.id
							? { ...item, quantity: action.payload.quantity }
							: item
					),
				};
			case "remove":
				return {
					...state,
					cartItems: state.cartItems.filter(
						(item) => item.id !== action.payload.id
					),
				};
			default:
				return state;
		}
	}

	const [cartState, cartDispatch] = useReducer(reducer, initialState);
	return (
		<CartContext.Provider value={{ cartState, cartDispatch }}>
			{children}
		</CartContext.Provider>
	);
}

export const useCart = () => {
	return useContext(CartContext);
};
