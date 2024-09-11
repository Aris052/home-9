import { useReducer } from 'react'
import './App.css'
import { Basket } from './components/basket'
import { ProductList } from './components/product-list'
import { ShopContext, initialState } from './context/context'
import { reducer } from './context/reducer'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <>
    <ShopContext.Provider value={{ state, dispatch }}>
      <div className='row'>

        <ProductList />
        <Basket />
      </div>
    </ShopContext.Provider>
  </>
}
