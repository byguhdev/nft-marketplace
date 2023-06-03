import React from "react";
import Frame from "../../imgs/Frame.png";
import Vector from '../../imgs/Vector29.png'

const Main = () => {
  return (
    <>
      <main>
        
      <span className="sm:absolute sm:right-3 hidden md:block">
        <img src={Vector} alt="a" />
      </span>
        <section className="flex flex-col lg:flex-row items-center p-12 sm:p-4">

          <div className="h-2/5 flex flex-col sm:justify-center sm:ml-20  mt-10 text-center sm:text-start">
            <strong className="sm:text-6xl text-4xl text-white">
              Remove Borders With <span className="text-button">NFTs</span> <span className="inline-block">Share</span> Art Freely.
            </strong>
            <p className="text-text-gray mt-4">Discover the power of NFTs for a unique digital experience.</p>

            <div className="flex gap-5 sm:mt-16 mt-12 justify-center sm:justify-normal">
              <button className="text-white bg-button h-10 w-36 rounded-full">Explore</button>
              <button className="text-white bg-transparent border-button border-2 border-solid h-10 w-36 rounded-full">Create</button>
            </div>

          </div>
          <picture className="w-full flex justify-center z-10">
            <img src={Frame} alt="img"  className="sm:h-96"/>
          </picture>
        </section>
      </main>
    </>
  );
};

export default Main;