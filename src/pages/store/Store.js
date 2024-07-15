import './Store.css';

import { MainSearch } from '../../components/mainSearch/MainSearch';
import { ProductsList } from '../../components/productsList/ProductsList';
import { ProductDetails } from '../../components/productDetails/ProductDetails';

import { useState, useEffect } from "react";

export const Store = ({setPage}) => {

    useEffect(() => {
        setPage('store');
    }, []);

    const[view, setView] = useState('list');
    const[product, setProduct] = useState({});

    const viewProductDetails = (product) => {
        setProduct(product);
        setView('details');
    }

    const viewProductsList = () => {
        setProduct({});
        setView('list');
    }

    return <section className='store'>
        <MainSearch />
        {((view == 'details') ? <ProductDetails product={product} viewProductsList={viewProductsList} /> : <ProductsList viewProductDetails={viewProductDetails} />)}
    </section>
}