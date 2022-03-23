import React from "react";
import BookCarousel from "../../BookCarousel";
import books from "./dummyBooks.json";
import "./TopRated.css";

const TopRated = () => {
    return (
        <div className="mt-4">
            <div className="ib-section-header">Top Rated</div>
            <div className="pt-4 px-5">
                <BookCarousel books={books}/>
            </div>
        </div>
    )
}

export default TopRated;