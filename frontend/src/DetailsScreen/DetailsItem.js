import React from "react";
import Rating from "./Rating";
import item from "./dummyBook.json";

const DetailsItem = () => {
    return (
        <>
            <div className="row">
                {/*Image of the book is placed on the left*/}
                <div className="col-3 d-flex align-items-center">
                    <img
                        className="img-fluid"
                        src={item.volumeInfo.imageLinks.large}/>
                </div>
                {/*Details of the book is placed on the right*/}
                <div className="col-9 my-4 d-flex flex-column justify-content-between">
                    <div>
                        <div className="ms-2 ib-details-title">
                            {item.volumeInfo.title}
                        </div>
                        <div className="ms-2 ib-details-author">
                            {Object.values(item.volumeInfo.authors).join(', ')}
                        </div>
                        <div className="ms-2 mt-5">
                            <Rating rating={item.volumeInfo.averageRating}/>
                        </div>
                    </div>

                    <div>
                        <div className="ms-2 ib-details-price">
                            $10.99
                        </div>
                        <button className="mt-4 btn ib-details-button">
                            Add to Cart
                        </button>
                    </div>
                </div>

                {/*Description/details are placed below*/}
                <div className="mt-4">
                    <div className="ib-section-header">
                        Description
                    </div>
                    <div className="ib-details-content">
                        {item.volumeInfo.description}
                    </div>
                    <div className="mt-4 ib-section-header">
                        Details
                    </div>
                    <div className="ib-details-content">
                        <div>ISBN: 055380457X</div>
                        <div>Publisher: {item.volumeInfo.publisher}</div>
                        <div>Publication Date: {item.volumeInfo.publishedDate}</div>
                        <div>Pages: {item.volumeInfo.pageCount}</div>
                        <div>
                            Product Dimension:
                            <div className="ms-3">
                                <div>
                                    Height: {item.volumeInfo.dimensions.height}
                                </div>
                                <div>
                                    Width: {item.volumeInfo.dimensions.width}
                                </div>
                                <div>
                                    Thickness: {item.volumeInfo.dimensions.thickness}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )

}

export default DetailsItem;