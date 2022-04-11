import React from "react";
import ResultItem from "./ResultItem";

const Results = ({books}) => {
    return (
        <>
            <div className="ib-section-header">Results</div>

            <div className="mt-4 mx-5 row">
                {
                    books.map(book => <ResultItem book={book}/>)
                }
            </div>

        </>
    )
}

export default Results;

