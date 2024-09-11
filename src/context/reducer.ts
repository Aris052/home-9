import { IAction, IProduct, IState } from './types'

export const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case 'add/basket': {
			const product = action.payload as IProduct
			const existingItem = state.basket.find(item => item.id === product.id)

			if (existingItem) {
				return {
					...state,
					basket: state.basket.map(item =>
						item.id === product.id
							? { ...item, count: item.count + 1 }
							: item
					)
				}
			} else {
				return {
					...state,
					basket: [
						...state.basket,
						{
							id: product.id,
							name: product.name,
							price: product.price,
							count: 1,
							subotal: product.price
						}
					]
				}
			}
		}
		case 'item/up': {
			return {
				...state,
				basket: state.basket.map(item =>
					item.id === action.payload
						? { ...item, count: item.count + 1, subtotal: (item.count + 1) * item.price }
						: item
				)
			}
		}
		case 'item/down': {
			return {

				...state,
				basket: state.basket.map(item =>
					item.id === action.payload
						? { ...item, count: Math.max(item.count - 1, 1) } : item
				)

			}
		}
		case 'item/delete': {
			return {
				...state,
				basket: state.basket.filter(item =>
					item.id != action.payload
				)
			}
		}



		default:
			return state
	}
}