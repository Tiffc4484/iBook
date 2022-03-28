import React from 'react';

const Rating = ({rating}) => {
    if (rating < 1) {
        return(
            <>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <span className="p-3">No Ratings Yet</span>
            </>
        )
    }

    else if (rating < 2) {
        return(
            <>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
            </>
        )
    } else if (rating < 3) {
        return(
            <>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
            </>
        )
    } else if (rating < 4) {
        return (
            <>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
            </>
        )
    } else if (rating < 5) {
        return (
            <>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-no-star"></i>
            </>
        )
    } else {
        return (
            <>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
                <i className="fa fa-star ib-rating-star"></i>
            </>
        )
    }
};

export default Rating;