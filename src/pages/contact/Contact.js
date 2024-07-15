import './Contact.css';

import { useEffect } from "react";

export const Contact = ({setPage}) => {

    useEffect(() => {
        setPage('contact');
    }, []);

    return <section className='contact'></section>
}