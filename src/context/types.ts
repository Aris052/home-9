import { Dispatch } from 'react'

export interface IProduct {
	id: number
	name: string
	price: number
	photo: string
}

export interface IBasketItem {
	id: number,
	name: string,
	price: number,
	count: number,
	subotal: number,
}

export interface IState {
	products: IProduct[]
	basket: IBasketItem[]
}

export interface IAction {
	type: string
	payload?: unknown
}

export interface IContext {
	state: IState
	dispatch: Dispatch<IAction>
}