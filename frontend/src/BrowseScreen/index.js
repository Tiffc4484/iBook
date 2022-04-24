import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import LoadingSpinner from "../LoadingSpinner";
import BookCarousel from "../BookCarousel";
import {useNavigate, useParams} from "react-router-dom";
import {findBooks, findTopBooks} from "../Service/BooksService";
import "./BrowseScreen.css";
import PickItem from "./PickItem";

const BrowseScreen = () => {
    const {keyword} = useParams();
    const [topBooks, setTopBooks] = useState([]);
    const [educationBooks, setEducationBooks] = useState([]);
    const [travelBooks, setTravelBooks] = useState([]);
    const [bioBooks, setBioBooks] = useState([]);
    const [isLoadingTop, setIsLoadingTop] = useState(true);
    const [isLoadingEdu, setIsLoadingEdu] = useState(true);
    const [isLoadingTravel, setIsLoadingTravel] = useState(true);
    const [isLoadingBio, setIsLoadingBio] = useState(true);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchTopBooks();
        fetchEducationBooks();
        fetchTravelBooks();
        fetchBioBooks();
    }, []);

    const clickSearchHandler = () => {
        // TODO: Validate input
        const keyword = input.split(" ").join("+");
        navigate(`/results/${keyword}`);
    };

    const fetchTopBooks = () => {
        findTopBooks()
            .then(response => {
                setTopBooks(response.data.books);
                setIsLoadingTop(false);
            })
    }

    const fetchEducationBooks = () => {
        findBooks("tutorials")
            .then(response => {
                setEducationBooks(response.data.books);
                setIsLoadingEdu(false);
            })
    }

    const fetchTravelBooks = () => {
        findBooks("travel")
            .then(response => {
                setTravelBooks(response.data.books);
                setIsLoadingTravel(false);
            })
    }

    const fetchBioBooks = () => {
        findBooks("biography")
            .then(response => {
                setBioBooks(response.data.books);
                setIsLoadingBio(false);
            })
    }

    return (
        <>
            <Navigation/>

            <div className="mt-4 d-flex justify-content-center">
                <div className="w-50">
                    <div className="input-group ib-search-outline">
                        <input
                            className="form-control ib-input-field"
                            onChange={(event) => setInput(event.target.value)}
                            value={input}
                            placeholder="Find your books..."/>
                        <div className="input-group-append d-flex align-items-center me-3">
                            <button
                                className="input-group-text ib-search-btn h-75 hvr-push"
                                onClick={() => clickSearchHandler()}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
                <span className="ib-browse-header">Our Picks</span>
            </div>

            <div className="mt-5">
                <div className="d-flex justify-content-center">
                    {isLoadingEdu ? <LoadingSpinner/> : ""}
                </div>
                <div className="d-none d-lg-block">
                    <div className="d-flex justify-content-center align-items-center">
                        {topBooks[0] && <PickItem book={topBooks[0]}/>}
                        {topBooks[1] && <PickItem book={topBooks[1]}/>}
                        {topBooks[2] && <PickItem book={topBooks[2]}/>}
                    </div>
                </div>
                <div className="d-lg-none">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        {topBooks[0] && <PickItem book={topBooks[0]}/>}
                        {topBooks[1] && <PickItem book={topBooks[1]}/>}
                        {topBooks[2] && <PickItem book={topBooks[2]}/>}
                    </div>
                </div>

            </div>

            <div className="mt-4">
                <div className="ib-section-header">Educational</div>
                <div className="d-flex justify-content-center">
                    {isLoadingEdu ? <LoadingSpinner/> : ""}
                </div>
                <div className="pt-4 px-5">
                    <BookCarousel books={educationBooks}/>
                </div>
            </div>

            <div className="mt-4">
                <div className="ib-section-header">Travel</div>
                <div className="d-flex justify-content-center">
                    {isLoadingTravel ? <LoadingSpinner/> : ""}
                </div>
                <div className="pt-4 px-5">
                    <BookCarousel books={travelBooks}/>
                </div>
            </div>

            <div className="mt-4 mb-5">
                <div className="ib-section-header">Biography</div>
                <div className="d-flex justify-content-center">
                    {isLoadingBio ? <LoadingSpinner/> : ""}
                </div>
                <div className="pt-4 px-5">
                    <BookCarousel books={bioBooks}/>
                </div>
            </div>
        </>
    )
}

export default BrowseScreen;