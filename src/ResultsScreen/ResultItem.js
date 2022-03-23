import React from "react";
import {Link} from "react-router-dom";
import results from "../DummyData/dummyBooks.json";

const ResultItem = ({book}) => {
    return (
        <>
            <div className="card ib-no-border ib-card-item">
                <Link to="/details">
                    <img
                        className="card-img-top"
                        src={book.volumeInfo.imageLinks.large}
                        alt="Card image cap"/>
                </Link>
                    <div className="card-body">
                        <h5 className="card-title">{book.volumeInfo.title}</h5>
                        <p className="card-text">{Object.values(book.volumeInfo.authors).join(", ")}</p>
                    </div>
            </div>
        </>
        )
}

export default ResultItem;