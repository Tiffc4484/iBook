import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Navigation.css";
import PropTypes from "prop-types";

export default function Navigation (props) {
    async function logout() {
        const resRaw = await fetch("/users/logout");
        if (!resRaw.ok) {
            const res = await resRaw.text();
            alert(res);
        }
        document.cookie = "_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
        window.location = "/";
    }
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
                        <Link to="/shopping_cart">
                            <span className="ms-4"><i className="fa fa-shopping-cart"></i> My Cart</span>
                        </Link>
                        {!props.user? (
                            <Link to="/auth/login">
                                <button
                                className="ms-4 btn btn-primary ib-nav-button" >
                                Login or Create Account
                                </button>
                            </Link>
                        ) : (
                            <div className="dropdown ms-4">
                                <button className="btn btn-primary ib-nav-button dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Welcome, {props.user.username}
                                </button>
                                <ul className="mt-3 dropdown-menu ib-dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <Link to="#" className="dropdown-item" onClick={logout}>
                                            &#128075; &nbsp; Logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
Navigation.propTypes = {
    user: PropTypes.object,
};
