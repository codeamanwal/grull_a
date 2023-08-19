import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {uparrow, search} from '../Assets';
import ClosedChatBox from './ClosedChatBox';
import MessagePreviewCard from './MessagePreviewCard';
import MessagingBox from './MessagingBox';

const OpenedChatBox = ({setIsOpen}) => {
  const [showMessagingBox, setShowMessagingBox] = useState(false);

  const handleArrowClick = () => {
    setIsOpen(false);
  };

  const handleCardClick = () => {
    setShowMessagingBox(true);
  };

  return (
    <div className="flex flex-col bg-white">
      <ClosedChatBox arrow={uparrow} onClick={handleArrowClick} />
      <hr className="flex mx-auto w-3/4 sm:w-1/2 px-4 my-2 border-1 border-black" />
      <div className="flex items-center bg-white rounded-md border border-gray-300 px-3 m-2">
        <span className="text-gray-400">
          <img src={search} className="h-5 w-5" alt="Search" />
        </span>
        <input
          type="text"
          className="outline-none ml-2 flex-grow"
          placeholder="Search..."
        />
      </div>
      <div className="max-h-72  sm:max-h-[calc(100vh-260px)] overflow-y-auto h-96">
        <div className="cursor-pointer" onClick={handleCardClick}>
          <MessagePreviewCard />
        </div>
        <div className="cursor-pointer" onClick={handleCardClick}>
          <MessagePreviewCard />
        </div>
        <div className="cursor-pointer" onClick={handleCardClick}>
          <MessagePreviewCard />
        </div>
        <div className="cursor-pointer" onClick={handleCardClick}>
          <MessagePreviewCard />
        </div>
        <div className="cursor-pointer" onClick={handleCardClick}>
          <MessagePreviewCard />
        </div>

        {showMessagingBox && (
          <>
            {window.innerWidth > 640 ? (
                            <div className="absolute -bottom-64 w-[25%]  right-[22%] transform -translate-y-1/2">
                              <MessagingBox onClose={() => setShowMessagingBox(false)} />
                            </div>
                        ) : (
                            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-80 bg-black">
                              <div className=" w-[80%] sm:w-[30%] sm:h-auto">
                                <MessagingBox onClose={() => setShowMessagingBox(false)} />
                              </div>
                            </div>
                        )}
          </>
        )}
      </div>
    </div>
  );
};

OpenedChatBox.propTypes = {
  setIsOpen: PropTypes.func,
};

export default OpenedChatBox;
