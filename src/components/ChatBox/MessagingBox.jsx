import React, { useState } from "react";
import PropTypes from "prop-types";
import { hrProfile, messageBoxAttachment } from "../Assets";

const MessagingBox = ({ onClose }) => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello!", sender: "user" },
        { text: "Hi there!", sender: "other" },
        { text: "How are you?", sender: "user" },
        { text: "I'm good. Thanks!", sender: "other" },
        { text: "What about you?", sender: "other" },
        { text: "I'm doing great!", sender: "user" },
    ]);

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: message, sender: "user" },
            ]);
            setMessage("");
        }
    };

    const handleBoxClose = () => {
        onClose();
    };

    return (
        <div className="flex flex-col border h-1/2 border-gray-300 rounded-lg p-4 bg-white space-y-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                        <img
                            src={hrProfile}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                    </div>
                    <p className="text-lg font-medium">Name Surname</p>
                </div>
                <button
                    className="w-6 h-6 text-gray-600 hover:text-gray-800"
                    onClick={handleBoxClose}
                >
					X
                </button>
            </div>
            <div className="flex-grow overflow-y-auto">
                <div className="flex flex-col">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`my-2 ${
                                msg.sender === "user" ? "self-end" : "self-start"
                            }`}
                        >
                            <p
                                className={`p-2 rounded-lg ${
                                    msg.sender === "user"
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200"
                                }`}
                            >
                                {msg.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center mt-4">
                <input
                    className="flex-grow w-full gap-y-8 resize-none border border-gray-300 rounded-lg p-2 mr-4"
                    placeholder="Write a message..."
                    value={message}
                    onChange={handleMessageChange}
                />
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <img src={messageBoxAttachment} alt="messagboxattachment" />
                </div>
                <button
                    className="text-white bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2"
                    onClick={handleSendMessage}
                >
					Send
                </button>
            </div>
        </div>
    );
};

MessagingBox.propTypes = {
    onClose: PropTypes.func,
};

export default MessagingBox;
