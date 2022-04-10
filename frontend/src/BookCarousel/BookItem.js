import React from "react";
import {Link} from "react-router-dom";
import ThumbnailRating from "./ThumbnailRating";

const BookItem = (props) => {
    let title = props.book.title ? props.book.title : "No Title";
    let authors = props.book.authors ? Object.values(props.book.authors).join(", ") : "N/A";
    const imageLink = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : "/images/no-image.png";
    const rating = props.book.averageRating ? props.book.averageRating : 0;

    title = title.length > 30 ? title.slice(0, 30) + "..." : title;
    authors = authors.length > 30 ? authors.slice(0, 30) + "..." : authors;

    return (
        <div className="ib-book-container">
            <Link to={`/details/${props.book.id}`}>
                <img
                    src={imageLink}
                    className="ib-book-item hvr-grow-shadow"/>
                <div className="ib-book-center d-flex flex-column">
                    <div className="ib-title">
                        {title}
                    </div>
                    <div className="mt-2">
                        {authors}
                    </div>
                    <div className="mt-2">
                        <ThumbnailRating rating={rating}/>
                    </div>
                </div>
            </Link>
        </div>
    )

}

export default BookItem;