import React, {useEffect, useState} from 'react';
import Navigation from "../Navigation";
import HomeHeader from "./HomeHeader";
import Discover from "./Discover";
import "./HomeScreen.css";
import TopRated from "./TopRated";
import {findRecentBooks, findTopBooks} from "../Service/BooksService";
import Footer from "../ShoppingCart/Footer";
import dummyBooks from "./Discover/dummyDiscoverBooks.json";
import Recent from "./Recent";
import LoadingSpinner from "../LoadingSpinner";

const HomeScreen = () => {
    const [isLoadingTop, setIsLoadingTop] = useState(true);
    const [isLoadingRecent, setIsLoadingRecent] = useState(true);
    const [topBooks, setTopBooks] = useState([]);
    const [recentBooks, setRecentBooks] = useState([]);
    useEffect(() => {
        fetchTopBooks();
        fetchRecentBooks();
    }, []);

    // TODO: update this to recommended books for current user
    const discoverBooks = dummyBooks.data.books;

    const fetchTopBooks = () => {
        findTopBooks()
            .then(response => {
                setTopBooks(response.data.books);
                setIsLoadingTop(false);
            })
    }

    const fetchRecentBooks = () => {
        findRecentBooks()
            .then(response => {
                setRecentBooks(response.data.books);
                setIsLoadingRecent(false);
            })
    }

    return (
        <>
            <Navigation/>
            <HomeHeader/>
            <Discover books={discoverBooks}/>
            <TopRated books={topBooks} spinner={isLoadingTop}/>
            <Recent books={recentBooks} spinner={isLoadingRecent}/>
            <div className="mt-5 mb-3">
                <Footer/>
            </div>
        </>
    )
}

export default HomeScreen;