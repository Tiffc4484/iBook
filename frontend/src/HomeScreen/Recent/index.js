import React from "react";
import BookCarousel from "../../BookCarousel";
import LoadingSpinner from "../../LoadingSpinner";

const Recent = (props) => {
    return (
        <div className="mt-4">
            <div className="ib-section-header">Recent</div>
            <div className="d-flex justify-content-center">
                {props.spinner ? <LoadingSpinner/> : ""}
            </div>
            <div className="pt-4 px-5">
                <BookCarousel books={props.books}/>
            </div>
        </div>
    )
}

export default Recent;