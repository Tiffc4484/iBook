import React from "react";
import {Link} from "react-router-dom";
import results from "../DummyData/dummyBooks.json";
import ThumbnailRating from "../ThumbnailRating";

const ResultItem = (props) => {
    const title = props.book.title ? props.book.title : "No Title";
    const authors = props.book.authors ? Object.values(props.book.authors).join(", ") : "N/A";
    const imageLink = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : "/images/no-image.png";
    const rating = props.book.averageRating ? props.book.averageRating : 0;

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-5 ib-no-border d-flex flex-column align-items-start">
                <div className="ib-card-image-container">
                    <Link to={`/details/${props.book.id}`}>
                        <img
                            className="ib-card-image hvr-grow-shadow"
                            src={imageLink}
                            alt="Card image cap"/>
                    </Link>
                </div>
                <div className="pt-3 ib-card-text">
                    <Link to={`/details/${props.book.id}`}><h5>{title}</h5></Link>
                    <Link to={`/details/${props.book.id}`}><p>{authors}</p></Link>
                    <div>{<ThumbnailRating rating={rating}/>}</div>
                </div>
            </div>
        </>
        )
}

export default ResultItem;