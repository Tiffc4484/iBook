import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import './BookCarousel.css';
import BookItem from "./BookItem";

const BookCarousel = ({books}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1600 },
            items: 7,
            slidesToSlide: 7, // optional, default to 1.
            partialVisibilityGutter: 20
        },
        smallerDesktop: {
            breakpoint: {max: 1600, min: 1200},
            items: 5,
            slidesToSlide: 5,
            partialVisibilityGutter: 20
        },
        tablet: {
            breakpoint: { max: 1200, min: 950 },
            items: 4,
            slidesToSlide: 4, // optional, default to 1.
            partialVisibilityGutter: 20
        },
        smallerTablet: {
            breakpoint: { max: 950, min: 690 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
            partialVisibilityGutter: 10
        },
        mobile: {
            breakpoint: { max: 690, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
            partialVisibilityGutter: 200
        }
    };

    return (
        <Carousel
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10*1000}
            partialVisbile={true}
            responsive={responsive}>

            {
                books.map(book => <BookItem bookItem={book}/>)
            }
            
        </Carousel>
    )
}

export default BookCarousel;