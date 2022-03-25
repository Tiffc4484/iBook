import React from "react";
import ResultItem from "./ResultItem";
import books from '../DummyData/dummyBooks.json';

const Results = () => {
    return (
        <>
            <div className="ib-section-header">Results</div>
            <div className="mt-4 mx-5 row align-items-center">
                {
                    books.map(book => <ResultItem book={book}/>)
                }
            </div>

        </>
    )
}

export default Results;

