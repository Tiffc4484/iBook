import React from 'react';
import Navigation from "../Navigation";
import HomeHeader from "./HomeHeader";
import Discover from "./Discover";
import "./HomeScreen.css";
import TopRated from "./TopRated";

const HomeScreen = (props) => {
    const [topBooks, setTopBooks] = useState([]);
    useEffect(() => fetchTopBooks(), []);

    const fetchTopBooks = () => {
        findTopBooks()
            .then(response => setTopBooks(response.data.books))
    }
    return (
        <>
            <Navigation user = {props.user}/>
            <HomeHeader/>
            <Discover/>
            <TopRated/>
        </>
    )
}

export default HomeScreen;