import { useContext } from 'react'
import { ShopContext } from '../context/context'
import { IProduct } from '../context/types'

export function ProductList() {
	const context = useContext(ShopContext)
	if (!context) {
		throw new Error("outside provider")
	}
	const { state, dispatch } = context

	const handleAddToBasket = (product: IProduct) => {
		dispatch({ type: 'add/basket', payload: product })
	}

	return <>
		<h3>Product List</h3>
		<div className='col-md-7'>
			<div className='row'>
				{state.products.map(product =>
					<div key={product.id} style={{ width: "270px" }} className='m-3'>

						<img src={product.photo} className='rounded' style={{ width: "150px", height: "150px" }} />
						<p>{product.name}</p>
						<p>{product.price} USD</p>
						<button className='btn btn-success' onClick={() => handleAddToBasket(product)}>ADD</button>

					</div>
				)

				}
			</div>
		</div>
	</>
}