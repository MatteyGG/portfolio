'use client'

import { useState } from "react";

const Fullscreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={handleClick}
        >
          <div
            className="bg-white p-4 rounded-md shadow-md max-h-[80vh] max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
            style={{ position: "relative" }}
          >
            <button type="button" onClick={handleClick}>
              {children}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Fullscreen;

