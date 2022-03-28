import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import SearchBar from "../SearchBar";
import Results from "./Results";
import "./Results.css";
import {useNavigate, useParams} from "react-router-dom";
import {findBooks} from "../Service/BooksService";

const ResultsScreen = () => {
    const {keyword} = useParams();
    const [results, setResults] = useState([]);
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect()");
        setInput(keyword.split("+").join(" "));
        findBooks(keyword)
            .then(response => setResults(response.data.books));

    }, [keyword]);

    const clickSearchHandler = () => {
        // TODO: Validate input
        const keyword = input.split(" ").join("+");
        navigate(`/results/${keyword}`);
    };

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

            <div className="mt-4">
                {
                    results &&
                    <Results books={results}/>
                }
            </div>





        </>
    )



}

export default ResultsScreen;

