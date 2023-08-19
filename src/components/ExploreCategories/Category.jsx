import React from "react";
import PropTypes from "prop-types";

const Category = ({ logo, title }) => {
    return (
        <div className="flex flex-col items-center bg-purple-200 bg-opacity-30 border border-purple-300 border-opacity-70 rounded-lg sm:space-y-3 ">
            <img
                className="sm:h-48 sm:w-48 sm:object-fit h-24 w-24object-fit p-4"
                src={logo}
                alt="logo"
            />
            <div className="border border-solid border-purple-500 w-full"></div>
            <p className="font-semibold sm:text-4xl sm:leading-10 text-center text-white p-4">
                {title}
            </p>
        </div>
    );
};

Category.propTypes = {
    logo: PropTypes.string,
    title: PropTypes.string,
};

export default Category;
