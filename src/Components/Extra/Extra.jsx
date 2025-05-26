import React from "react";

const Extra = () => {
  return (
    <div className=" max-w-6xl mx-auto mb-16">
      <h1 className="mt-20 mb-7 text-2xl font-medium text-[#202124]">
        Events & offers
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-sm">
        <div className=" pt-6 bg-[#D3D8F3]">
          <h2 className="pl-6 card-title">Ends on 05/30</h2>
          <p className="pl-12 font-bold text-3xl mt-20 pr-28 pb-52">
            Celebrate gardening with us!
          </p>
        </div>
        <figure className="w-[600px] h-[500px] object-cover ">
          <img
            src="https://i.ibb.co/jvYx1Mqc/zoe-richardson-hmo-Dc-Zn-B7uw-unsplash.jpg"
            alt="Album"
          />
        </figure>
      </div>
    </div>
  );
};

export default Extra;
