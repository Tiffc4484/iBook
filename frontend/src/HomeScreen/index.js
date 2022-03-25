import React from 'react';
import Navigation from "../Navigation";
import HomeHeader from "./HomeHeader";
import Discover from "./Discover";
import "./HomeScreen.css";
import TopRated from "./TopRated";

const HomeScreen = () => {
    return (
        <>
            <Navigation/>
            <HomeHeader/>
            <Discover/>
            <TopRated/>
        </>
    )
}

export default HomeScreen;