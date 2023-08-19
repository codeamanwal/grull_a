import React from "react";
import PropTypes from "prop-types";

const Box = ({ logo, name, color, textColor, logoWidth, logoHeight }) => {
    const logoStyle = {
        width: logoWidth,
        height: logoHeight,
    };

    const boxStyle = {
        backgroundColor: color,
        color: textColor,
        border: "1px solid black",
    };

    return (
        <div
            className="flex items-center h-3 m-1 gap-6 p-6 rounded-lg"
            style={boxStyle}
        >
            <img src={logo} alt="Logo" className="mr-2" style={logoStyle} />
            <h2 className="font-bold">{name}</h2>
        </div>
    );
};

Box.propTypes = {
    "logo": PropTypes.string,
    "name": PropTypes.string,
    "color": PropTypes.string,
    "textColor": PropTypes.string,
    "logoWidth": PropTypes.string,
    "logoHeight": PropTypes.string,
};

export default Box;
