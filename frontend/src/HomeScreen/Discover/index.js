import React from "react";
import books from "./dummyBooks.json";
import './Discover.css';
import BookCarousel from "../../BookCarousel";


const Discover = () => {
    return (
        <div className="mt-4">
            <div className="ib-section-header">Discover</div>
            <div className="pt-4 px-5">
                <BookCarousel books={books}/>
            </div>
        </div>
    )
}

export default Discover;