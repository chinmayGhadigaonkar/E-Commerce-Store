import React from "react";

const MultiImg = ({ IMG, setchangeIMG }) => {
  const handleonchange = (img) => {
    setchangeIMG(img);
  };

  return (
    <>
      <div
        className={` md:w-35 h-52 my-3 border-2 rounded-xl  cursor-pointer mx-auto  `}
        onClick={() => {
          handleonchange(IMG);
        }}>
        <img
          className="md:w-40  bg-cover h-[100%] object-cover object-center   rounded-xl  "
          src={IMG}
          alt=""
        />
      </div>
    </>
  );
};

export default MultiImg;
