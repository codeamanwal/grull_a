import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BrowseByCard = ({ topic, items }) => {
    const [checkedItems, setCheckedItems] = useState([]);
    const [showOptions, setShowOptions] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleCheckboxChange = (item) => {
        if (checkedItems.includes(item)) {
            setCheckedItems(
                checkedItems.filter((checkedItem) => checkedItem !== item)
            );
        } else {
            setCheckedItems([...checkedItems, item]);
        }
    };

    const handleMenuClick = () => {
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the width threshold as needed
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="sm:my-6 ">
            <p className="text-white font-semibold sm:text-3xl sm:pb-6">
				BROWSE BY {topic}
            </p>
            <div className="flex flex-col sm:b-10">
                {isMobile ? (
                    <div className="flex items-center my-2 gap-x-5">
                        <button
                            className="flex items-center gap-x-2 text-black font-medium sm:text-2xl"
                            onClick={handleMenuClick}
                        >
                            <span>Browse By {topic}</span>
                            {showOptions ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 transform rotate-180"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </button>
                        {showOptions && (
                            <div className="flex flex-col">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-center my-2 gap-x-5">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems.includes(item)}
                                            onChange={() => handleCheckboxChange(item)}
                                            className="appearance-none border border-black w-6 h-6 rounded-sm checked:bg-black checked:border-transparent"
                                        />
                                        <span className="text-black font-medium sm:text-2xl">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    items.map((item, index) => (
                        <div key={index} className="flex items-center my-2 gap-x-5">
                            <input
                                type="checkbox"
                                checked={checkedItems.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                                className="appearance-none border border-black w-6 h-6 rounded-sm checked:bg-black checked:border-transparent"
                            />
                            <span className="text-black font-medium sm:text-2xl">{item}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

BrowseByCard.propTypes = {
    topic: PropTypes.string,
    items: PropTypes.array,
};

export default BrowseByCard;
