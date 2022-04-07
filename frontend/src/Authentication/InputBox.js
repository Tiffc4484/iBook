import React, { useState } from "react";
import PropTypes from "prop-types";
import _uniqueId from "lodash/uniqueId";

/**
 * InputBox is a controlled component that represents an input and label.
 *
 * @param props.label (required) label
 * @param props.value (required) value
 * @param props.onChange (required) handler of input value
 * @param props.type "text" | "password" | "email" | ... , text by default
 * @param props.feedback feedback if the input fails validation
 * @param props.required true | false, false by default
 * @returns {JSX.Element}
 */
export default function InputBox(props) {
    const [id] = useState(_uniqueId("input-"));

    return (
        <div className="my-3">
            <label className="form-label" htmlFor={id}>
                {props.label}
            </label>
            <input
                type={props.type === undefined ? "text" : props.type}
                className="form-control fs-5"
                id={id}
                value={props.value}
                onChange={props.onChange}
                placeholder={""}
                required={props.required || false}
                min={0}
            />
            <div
                className={
                    "invalid-feedback" + (props.feedback === undefined ? " d-none" : "")
                }
            >
                {props.feedback}
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    feedback: PropTypes.string,
    required: PropTypes.bool,
};