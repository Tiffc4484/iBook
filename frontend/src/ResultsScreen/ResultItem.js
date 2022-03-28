import React from "react";
import {Link} from "react-router-dom";
import results from "../DummyData/dummyBooks.json";

const ResultItem = (props) => {
    const title = props.book.title ? props.book.title : "No Title";
    const authors = props.book.authors ? Object.values(props.book.authors).join(", ") : "N/A";
    const imageLink = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : "/images/no-image.png";

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-xl-3 mb-5 ib-no-border d-flex flex-column justify-content-center align-items-start">
                <div className="ib-card-image-container">
                    <Link to={`/details/${props.book.id}`}>
                        <img
                            className="ib-card-image hvr-grow-shadow"
                            src={imageLink}
                            alt="Card image cap"/>
                    </Link>
                </div>
                <div className="pt-3">
                    <Link to={`/details/${props.book.id}`}><h5>{title}</h5></Link>
                    <Link to={`/details/${props.book.id}`}><p>{authors}</p></Link>
                </div>
            </div>
        </>
        )
}

export default ResultItem;