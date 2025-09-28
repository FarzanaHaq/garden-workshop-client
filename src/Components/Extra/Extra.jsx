import React from "react";

const Extra = () => {
  return (
    <div className=" max-w-6xl mx-auto mb-16">
      <h1 className="mt-20 mb-7 text-2xl font-medium text-[#202124] pl-5 lg:pl-0">
        Events & offers
      </h1>
      <div className="card lg:card-side bg-base-100 shadow-sm px-4 lg:px-0">
        <div className="pt-10 md:pt-30 bg-[#D3D8F3]">
          <h2 className="pl-8 lg:pl-6 card-title">Ends on 05/30</h2>
          <p className="pl-8 lg:pl-12 font-bold text-3xl mt-10 lg:mt-20 lg:pr-28 pb-10 md:pb-40 lg:pb-52">
            Celebrate gardening with us!
          </p>
        </div>
        <figure className="lg:w-[600px] lg:h-[500px] object-cover ">
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
