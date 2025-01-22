import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around bg-white py-12 px-6 md:px-12">
   
      <div className="flex flex-col space-y-6 ">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Facere, voluptates..
        </p>
        <div>
        <button className="bg-[#283739] text-[#F4EEC7] px-[15px] py-2 rounded hover:bg-gray-700 ">
          Explore More
        </button>
        </div>
      </div>

      
      <div className="md:w-1/3 mt-8  ">
        <img src = "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600" className="rounded-md"/>
      </div>
    </section>
  );
};

export default Hero;
