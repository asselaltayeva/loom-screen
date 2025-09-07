"use client";

import { useState } from "react";
import Image from "next/image";

const DropdownList = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger flex items-center">
          <figure className="flex items-center">
            <Image
              src="/assets/icons/hamburger.svg"
              alt="Hamburger icon"
              width={14}
              height={14}
              className="mr-2"
            />
            <span className="text-base flex items-center">
              Newest to Oldest
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="Arrow down"
                width={20}
                height={20}
                className="ml-1" // really small gap
              />
            </span>
          </figure>
        </div>
      </div>

        {isOpen && (
            <ul className="dropdown">
                {['Most Recent', 'Oldest'].map((option) => (
                    <li
                    key={option}
                    className="py-2.5 px-5 text-md font-medium -tracking-[0.8px] relative text-dark-100 cursor-pointer hover:bg-gray-200 transition-colors duration-200 ease-in-out rounded-4xl"
                  >
                    {option}
                  </li>
                  
                ))}
            </ul>
        )}
    </div>
  );
};

export default DropdownList;
