import React, {useState} from "react";
import Results from "../ResultsScreen/Results";
import {findBooks, findTopBooks} from "../Service/BooksService";
import {useNavigate} from 'react-router-dom';

const HomeHeader = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState({});
    const navigate = useNavigate();

    const clickSearchHandler = () => {
        // TODO: Validate input
        const keyword = input.split(" ").join("+");
        navigate(`/results/${keyword}`);
    };

    console.log(input);

    return (
        <div className="mt-4 d-flex justify-content-center">
            <div className="d-flex flex-column text-center w-50">
                <div>
                    <span className="ib-home-header">
                        Finding the next book to read is easier now!
                    </span>
                </div>
                <div className="mt-4">
                    <div className="input-group ib-search-outline">
                        <input
                            className="form-control ib-input-field"
                            onChange={(event) => setInput(event.target.value)}
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
                <div className="mt-2">
                    <img
                        src="/images/homeHeader.png"
                        className="img-fluid"
                        alt="header"/>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;