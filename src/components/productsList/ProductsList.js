import './ProductsList.css';

import React from "react";
import { useState } from "react";

export const ProductsList = ({viewProductDetails}) => {

    const[products, setProducts] = useState([
        {
            id: 1,
            name: 'Túnica Lounge',
            color: 'Negro',
            price: '1,200',
            off: '10',
            cover: 'ulihu-charcoal-silk-linen-tunic_0326-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 2,
            name: 'Falda Jane',
            color: 'Negro',
            price: '1,200',
            off: '10',
            cover: 'kimem-long-pleated-skirt-black_0354-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 3,
            name: 'Camisa Chef Poplin',
            color: 'Blanco',
            price: '1,200',
            off: '10',
            cover: 'kimem-poplin-chef-shirt-white_0304-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 4,
            name: 'Pantalones Romi',
            color: 'Gris',
            price: '1,200',
            off: '10',
            cover: 'kimem-romy-trousers_0155-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 5,
            name: 'Túnica Lounge',
            color: 'Crema',
            price: '1,200',
            off: '10',
            cover: 'lauren-winter-natural-dress_0172-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 6,
            name: 'Falda Sonia',
            color: 'Gris',
            price: '1,200',
            off: '10',
            cover: 'lauren-winter-sonia-skirt-grey_0270-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 7,
            name: 'Pantalones Anchos',
            color: 'Caqui',
            price: '1,200',
            off: '10',
            cover: 'lauren-winter-wide-pant-natural_0178-v1-FINAL.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 8,
            name: 'Chaqueta Haori',
            color: 'Gris',
            price: '1,200',
            off: '10',
            cover: 'ulihu-blue-linen-crop-top_0320-v1-FINAL-1-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 9,
            name: 'Blusa Studio',
            color: 'Terracota',
            price: '1,200',
            off: '10',
            cover: 'ulihu-blue-linen-crop-top_0320-v1-FINAL-2-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 10,
            name: 'Pantalones Anchos',
            color: 'Azul',
            price: '1,200',
            off: '10',
            cover: 'ulihu-blue-linen-long-short_0346-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 11,
            name: 'Túnica Lounge',
            color: 'Azul',
            price: '1,200',
            off: '10',
            cover: 'ulihu-blue-linen-tunic_0308-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        },
        {
            id: 12,
            name: 'Blusa Lisa',
            color: 'Negro',
            price: '1,200',
            off: '10',
            cover: 'kimem-lisa-oversized-shirt-navy_0363-v1-FINAL-copy.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.'
        }
    ]);
    
    const rowsProducts = [];

    for (let i = 0; i < products.length; i++) {
        rowsProducts.push(<div>
            <figure>
                <img src={require('../../assets/images/' + products[i].cover)} />
            </figure>
            <div>
                <h2>{products[i].name} <span>{products[i].color}</span></h2>
                <p>{products[i].price} $ {((products[i].off != '') ? <span>{products[i].off}% off</span> : '')}</p>
            </div>
            <a onClick={() => viewProductDetails(products[i])}>
                <img src={require('../../assets/images/' + products[i].cover)} />
                <span>Ver mas detalles</span>
            </a>
        </div>);
    }

    return <section className='productsList'>
        {rowsProducts}
    </section>
}