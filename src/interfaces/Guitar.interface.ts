export interface IGuitar {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
    
}

export interface IGuitarCart extends IGuitar {
    quantity: number;
}