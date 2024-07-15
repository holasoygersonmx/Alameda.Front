import './ShoppingCart.css';

import { useEffect } from "react";

export const ShoppingCart = ({setPage}) => {

    useEffect(() => {
        setPage('shoppingCart');
    }, []);

    return <section className='shoppingCart'></section>
}