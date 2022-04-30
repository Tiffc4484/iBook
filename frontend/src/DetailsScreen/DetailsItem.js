import React, {useEffect, useState} from "react";
import Rating from "./Rating";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import item from "./dummyBook.json";
import cartService from "../ShoppingCart/service/frontend-cart-services";
import $ from "jquery";
import Link from "@material-ui/core/Link";

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
    //const bookId = currentBook.id ? currentBook.id : "N/A";
    const [currentBook, setCurrentBook] = useState({
        bookTitle: '',
        author: '',
        imageURL: '',
        bookQuantity: 0,
        price: 0
    })
    const [user, setUser] = useState("");
    useEffect(() => {
        getUser().then((data) => {
            setUser(data.username);
            console.log(`re-render user in DetailItem: ${data.username}`);
            //let name = data.username.slice(0, data.username.lastIndexOf("@"));
            console.log("current user: " + user);
        })
    },[user]);

    toast.configure();
    // useEffect(() => {
    //     $("#description").html(description);
    // }, []);
    
    async function getUser() {
        const resRaw2 = await fetch("/auth/user");
        if (resRaw2.status !== 204) {
            return resRaw2.json();
        }
    }

    const setBook = () => {
        currentBook.bookTitle = title;
        currentBook.author = authors;
        currentBook.price = price;
        currentBook.bookQuantity = 1;
        currentBook.imageURL = imageLink;
        setCurrentBook(currentBook)
    }

    function addToCart(evt) {
        evt.preventDefault();
        setBook();
        let username = user.slice(0, user.lastIndexOf("@"));
        console.log("username: " + username);
        console.log("current book: " + JSON.stringify(currentBook));
        //cartService.addBookToCart(username, currentBook);
        fetch(`/${username}/shopping_cart`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({...currentBook}),
        })
            .then((resRaw) => {
                if (!resRaw.ok) {
                    resRaw.text().then((res) => {
                        toast.info(res);
                    });
                } else {
                    toast.success("added to the cart");
                }}
            )
            .catch ((err) => {
                alert(err);
             });
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
                        {
                            user ? (
                                <button onClick={addToCart}
                                    className="mt-4 btn ib-details-button hvr-push">
                                    Add to Cart
                                </button>) : (
                                    <Link to="/auth/signup">
                                        <button
                                            className="mt-4 btn ib-details-button hvr-push">
                                            Join us!
                                        </button>
                                    </Link>)}
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