import React from 'react';

const ThumbnailRating = ({rating}) => {
    if (rating < 1) {
        return(
            <>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
            </>
        )
    }

    else if (rating < 2) {
        return(
            <>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
            </>
        )
    } else if (rating < 3) {
        return(
            <>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
            </>
        )
    } else if (rating < 4) {
        return (
            <>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
            </>
        )
    } else if (rating < 5) {
        return (
            <>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-no-star-small"></i>
            </>
        )
    } else {
        return (
            <>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
                <i className="fa fa-star ib-rating-star-small"></i>
            </>
        )
    }
};

export default ThumbnailRating;