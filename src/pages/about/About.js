import './About.css';

import { useEffect } from "react";

export const About = ({setPage}) => {

    useEffect(() => {
        setPage('about');
    }, []);

    return <section className='about'></section>
}