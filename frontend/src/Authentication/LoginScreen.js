import React, {useState} from "react";
import InputBox from "./InputBox.js";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";

const LoginScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    toast.configure();
    function handleUsername(evt) {
        setUsername(evt.target.value);
    }

    function handlePassword(evt) {
        setPassword(evt.target.value);
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        if (!evt.target.checkValidity()) {
            return evt.target.classList.add("was-validated");
        }
        setUsername(username);
        setPassword(password);
        const hash = await password.hashCode();
        const checked = document.querySelector(".form-check-input").checked;
        const data = {
            username: username,
            password: hash,
            checked: checked,
        };
        fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((resRaw) => {
                if (!resRaw.ok) {
                    resRaw.text().then((res) => {
                        toast.error(res);
                    });
                } else {
                    toast.success("Log in succeed");
                    navigate("/");
                }
            })
            .catch((err) => {
                alert(err);
            });
    }

    return (
        <form className="form" onSubmit={handleSubmit} noValidate>
            <h1 className="text-center mb-4">Log In</h1>
            <InputBox
                label="Username"
                value={username}
                onChange={handleUsername}
                feedback="Please provide a valid username or email address"
                required={true}
            />
            <InputBox
                label="Password"
                value={password}
                onChange={handlePassword}
                type="password"
                feedback="Please provide a valid password"
                required={true}
            />

            <div className="mb-3 form-check">
                <label className="form-check-label">
                    <input type="checkbox" className="form-check-input" />
                    Keep Me Logged in
                </label>
            </div>
            <button className="mb-3 btn btn-custom text-center">Submit</button>
            <div className="mb-2 d-flex justify-content-end">
                <Link className="text-end d-block" to="/auth/signup">
                    Sign up
                </Link>
            </div>
        </form>
    )

}

export default LoginScreen;

