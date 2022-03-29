import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="m-3 pt-1">
                    <Link to="/">
                        <img src="/images/iBook-logo.png" className="ib-nav-logo"/>
                    </Link>
                </div>

                <div className="m-3">
                    <div className="d-flex align-items-center">
                        <Link to="/"><span className="ms-4">Home</span></Link>
                        <span className="ms-4">About Us</span>
                        <span className="ms-4">Browse</span>
                        <span className="ms-4"><i className="fa fa-shopping-cart"></i> My Cart</span>
                        <Link to="/auth/login">
                            <button
                                className="ms-4 btn btn-primary ib-nav-button" >
                                Login or Create Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )


}

export default Navigation;
