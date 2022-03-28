import React from "react";
import {Link} from "react-router-dom";

const BookItem = ({bookItem}) => {
    return (
        <div>
            <Link to={`/details/${bookItem.id}`}>
                <img
                    src={bookItem.imageLinks.smallThumbnail}
                    className="ib-book-item hvr-grow-shadow"/>
            </Link>
        </div>
    )

}

export default BookItem;