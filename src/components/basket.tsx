import { useContext } from 'react'
import { ShopContext } from '../context/context'

export function Basket() {
	const context = useContext(ShopContext)
	if (!context) {
		throw new Error("outside provider")
	}
	const { state, dispatch } = context


	return <>
		<div className='col-md-5'>
			<h3>Basket</h3>
			<table className="table table-dark table-bordered">
				<thead>
					<tr>
						<th>Product</th>
						<th>Price</th>
						<th>Count</th>
						<th>Subotal</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{
						state.basket.map(item => <tr key={item.id}>
							<td>{item.name}</td>
							<td>{item.price}</td>
							<td>{item.count}</td>
							<td>{item.count * item.price}</td>
							<td>
								<button className="btn btn-success" onClick={() => dispatch({ type: 'item/up', payload: item.id })}>+</button>
								<button className="btn btn-warning" onClick={() => dispatch({ type: 'item/down', payload: item.id })}>-</button>
								<button className="btn btn-danger" onClick={() => dispatch({ type: 'item/delete', payload: item.id })}>X</button>
							</td>
						</tr>)
					}
				</tbody>
			</table>
		</div>
	</>
}