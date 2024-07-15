import './Home.css';

import { useEffect } from "react";

export const Home = ({setPage}) => {

    useEffect(() => {
        setPage('home');
    }, []);

    return <section className='home'></section>
}