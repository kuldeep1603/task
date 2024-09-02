import React, { useEffect } from 'react'


import Banner from "../Components/Banner/Banner";
import Navbar from '../Components/Navbar/Navbar';


// redux 
import { FetchProduct } from "../Api/Slice/FetchData";
import { useDispatch } from 'react-redux';
import Ourproduct from '../Components/Our Product/Ourproduct';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const delayfunction = setTimeout(() => {
            dispatch(FetchProduct(`https://fakestoreapi.com/products`));
        }, 500);

        return () => clearTimeout(delayfunction);
    }, [dispatch]);

    return (
        <>
            <Navbar />
            <Banner />
            <Ourproduct />
        </>
    )
}

export default Home
