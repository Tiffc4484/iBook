import React from "react";

const BookItem = ({bookItem}) => {
    return (
        <div>
            <img
                src={bookItem.image}
                className="ib-book-item"/>
        </div>
    )

}

export default BookItem;