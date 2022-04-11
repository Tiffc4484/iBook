import React, {useEffect, useState} from "react";
import Navigation from "../Navigation";
import DetailsItem from "./DetailsItem";
import "./Details.css";
import {findBookById} from "../Service/BooksService";
import {useParams, useNavigate} from "react-router-dom";

const DetailsScreen = () => {
    const [bookItem, setBookItem] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("useEffect()");
        findBookById(id)
            .then(response => setBookItem(response.data));
    }, []);

    return (
        <>
            <Navigation/>

            <div className="mt-4 row">
                <div className="col-2">
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn ib-details-button ms-3 w-50 hvr-icon-back">
                            <i className="fa fa-arrow-left me-2 hvr-icon"></i>
                            Back
                        </button>
                    </div>
                </div>

                <div className="col-10">
                    {
                        bookItem &&
                        bookItem.description &&
                            <DetailsItem book={bookItem}/>
                    }
                </div>
            </div>
        </>
    )
}

export default DetailsScreen;

