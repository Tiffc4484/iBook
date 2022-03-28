import React, {useEffect, useState} from 'react';
import Navigation from "../Navigation";
import HomeHeader from "./HomeHeader";
import Discover from "./Discover";
import "./HomeScreen.css";
import TopRated from "./TopRated";
import {findTopBooks} from "../Service/BooksService";

const HomeScreen = () => {
    const [topBooks, setTopBooks] = useState([]);
    useEffect(() => fetchTopBooks(), []);

    const fetchTopBooks = () => {
        findTopBooks()
            .then(response => setTopBooks(response.data.books))
    }

    return (
        <>
            <Navigation/>
            <HomeHeader/>
            <Discover books={topBooks}/>
            <TopRated books={topBooks}/>
        </>
    )
}

export default HomeScreen;