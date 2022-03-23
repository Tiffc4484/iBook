import React from "react";

const DiscoverLeftArrow = ({ onClick, ...rest }) => {
    const {
        onMove,
        carouselState: { currentSlide, deviceType }
    } = rest;

    return <span onClick={() => onClick()} className="ib-black">Prev</span>
};

export default DiscoverLeftArrow;