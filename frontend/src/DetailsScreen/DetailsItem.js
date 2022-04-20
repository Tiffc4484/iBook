import React, {useEffect, useState} from "react";
import Rating from "./Rating";
import item from "./dummyBook.json";
import cartService from "../ShoppingCart/service/frontend-cart-services";
import $ from "jquery";

const DetailsItem = (props) => {
    const title = props.book.title ? props.book.title : "No Title";
    const authors = props.book.authors ? Object.values(props.book.authors).join(", ") : "N/A";
    const imageLink = props.book.imageLinks ? props.book.imageLinks.smallThumbnail : "/images/no-image.png";
    const rating = props.book.averageRating ? props.book.averageRating : 0;
    const price = props.book.listPrice ? props.book.listPrice.amount : props.book.amazonPrice;
    const description = props.book.description ? props.book.description : "N/A";
    const isbn10 = props.book.isbn_10 ? props.book.isbn_10 : "N/A";
    const isbn13 = props.book.isbn_13 ? props.book.isbn_13 : "N/A";
    const publisher = props.book.publisher ? props.book.publisher : "N/A";
    const publishedDate = props.book.publishedDate ? props.book.publishedDate : "N/A";
    const pageCount = props.book.pageCount ? props.book.pageCount : "N/A";
    const currentBook = props.book ? props.book : null;
    //const bookId = currentBook.id ? currentBook.id : "N/A";
    const [currentUser, setCurrentUser] = useState([])
   // const [currentBook, setCurrentBook] = useState([])

    useEffect(() => {
        $("#description").html(description);
    }, []);

    // get current logged user
    useEffect(() => {
        cartService.findUser()
            .then(currUser => {
                setCurrentUser(currUser)
            })
        //setCurrentBook(props.book ? props.book : null);
    }, [])
    console.log(currentUser);

    const addToCart = () => {
        let user = currentUser.username;
        console.log("username: " + user);
        let username = currentUser.username.slice(0, currentUser.username.lastIndexOf("@"));
        console.log("username: " + username);
        console.log(currentBook);
        cartService.addBookToCart(username, currentBook)
                .then()
    }

    return (
        <>
            <div className="row">
                {/*Image of the book is placed on the left*/}
                <div className="col-3 d-flex align-items-start">
                    <img
                        className="img-fluid"
                        style={{width: "260px"}}
                        src={imageLink}/>
                </div>
                {/*Details of the book is placed on the right*/}
                <div className="col-9 d-flex flex-column justify-content-between">
                    <div>
                        <div className="ms-2 ib-details-title">
                            {title}
                        </div>
                        <div className="ms-2 ib-details-author">
                            {authors}
                        </div>
                        <div className="ms-2 mt-5">
                            <Rating rating={rating}/>
                        </div>
                    </div>

                    <div>
                        <div className="ms-2 ib-details-price">
                            $ {price}
                        </div>
                        <button
                            onClick={() => addToCart()}
                            className="mt-4 btn ib-details-button hvr-push">
                            Add to Cart
                        </button>
                    </div>

                </div>

                {/*Description and details are placed below*/}
                <div className="mt-4 mb-5">
                    <div className="ib-section-header">
                        Description
                    </div>
                    <div id="description" className="ib-details-content"></div>
                    <div className="mt-4 ib-section-header">
                        Details
                    </div>
                    <div className="ib-details-content ib-details-card">
                        <div>ISBN 10: {isbn10}</div>
                        <div>ISBN 13: {isbn13}</div>
                        <div>Publisher: {publisher}</div>
                        <div>Publication Date: {publishedDate}</div>
                        <div>Pages: {pageCount}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailsItem;