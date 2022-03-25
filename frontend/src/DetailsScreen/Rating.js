import React from 'react';

const Rating = ({rating}) => {
    if (rating < 2) {
        return(
            <i className="fa fa-star"></i>
        )
    } else if (rating < 3) {
        return(
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </>
        )
    } else if (rating < 4) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </>
        )
    } else if (rating < 5) {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </>
        )
    } else {
        return (
            <>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </>
        )
    }
};

export default Rating;