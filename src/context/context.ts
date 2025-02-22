import React from 'react'
import { IContext, IState } from './types'

export const initialState: IState = {
	products: [
		{ id: 101, name: "Puma Rs-X1", price: 42, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers" },
		{ id: 102, name: "Puma Rs-X2", price: 44, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers" },
		{ id: 103, name: "Puma Rs-X3", price: 35, photo: "https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg" },
		{ id: 104, name: "Puma Rs-X4", price: 65, photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/abb8771c-602f-48eb-ac4b-32861c97e0ee/NIKE+AIR+ZOOM+G.T.+JUMP+2+OLY.png" },
		{ id: 105, name: "Puma Rs-X5", price: 120, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png" },
		{ id: 106, name: "Puma Rs-X6", price: 75, photo: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers" },
		{ id: 107, name: "Puma Rs-X7", price: 225, photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/610467bb-071e-4532-a8a1-abd79e17acda/WMNS+AIR+FORCE+1+%2707.png" },
		{ id: 108, name: "Puma Rs-X8", price: 87, photo: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/65b70363-5ada-41ab-99f6-061edc043d2b/NIKE+DUNK+LOW+RETRO.png" },
	],
	basket: []


}

export const ShopContext = React.createContext<IContext | undefined>(undefined)