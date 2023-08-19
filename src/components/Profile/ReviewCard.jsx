import React from "react";
import PropTypes from "prop-types";

const ReviewCard = ({ rating }) => {
    const stars = Array.from({ length: rating }, (_, index) => (
        <svg key={index} className="w-4 h-4 inline-block align-text-top">
            <path
                fill="#ffffff"
                d="M9.192 2.314l1.704 3.455h3.805c.256.003.388.34.202.531l-2.752 2.682.63 3.68c.043.25-.215.446-.434.32l-3.431-1.804-3.431 1.804c-.218.115-.478-.07-.434-.32l.63-3.68-2.752-2.682c-.186-.19-.054-.528.202-.531h3.805l1.704-3.455c.11-.223.462-.223.572 0z"
            ></path>
        </svg>
    ));

    return (
        <div className="text-24 font-spaceGrotesk leading-normal">
            <div className="flex flex-col justify-start p-2 space-y-1">
                <div className="flex justify-between font-medium">
                    <p>JOHN</p>
                    <p>{stars}</p>
                </div>
                <p className="font-normal">Good work ethic, completed on time, happy</p>
				
            </div>
        </div>
    );
};

ReviewCard.propTypes = {
    rating: PropTypes.number
};

export default ReviewCard;
