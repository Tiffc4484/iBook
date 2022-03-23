import React from "react";
import Navigation from "../Navigation";
import DetailsItem from "./DetailsItem";
import "./Details.css";

const DetailsScreen = () => {
    return (
        <>
            <Navigation/>

            <div className="mt-4 row">
                <div className="col-2">
                    <div className="d-flex justify-content-center">
                        <button
                            className="btn ib-details-button ms-3 w-50">
                            Back
                        </button>
                    </div>
                </div>

                <div className="mt-5 col-10">
                    <DetailsItem/>
                </div>

            </div>

        </>
    )

}

export default DetailsScreen;

