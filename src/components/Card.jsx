import React from "react";

const Card = () => {
  return (
    <div className="wrapper bg-[#0d1a2d] min-h-screen flex flex-col items-center justify-center font-outfit">
      <div className="card-container max-w-[375px]  my-8 p-6  bg-[#14273e] rounded-xl shadow-2xl">
        <div className="img-container">
          <img
            src="src\assets\image-equilibrium.jpg"
            alt=""
            className="rounded-xl w-ful "
          />
        </div>
        <h1 className="text-white pt-6 text-xl font-extrabold hover:text-[#00fff8] hover:cursor-pointer">
          Equilibrium #3429
        </h1>
        <p className="text-[#b1bacc] pt-4 text-[18px] font-light">
          Our Equilibrium Collection promotes balance and calm.
        </p>

        <div className="bottom-container flex justify-between pt-6 border-b border-slate-500 pb-8">
          <div className="flex items-center">
            <img
              src="src\assets\icon-ethereum.svg"
              alt=""
              className="w-[15px] h-[20px]"
            />
            <p className="pl-3 text-[#00fff8]">0.041 ETH</p>
          </div>
          <div className="flex items-center">
            <img
              src="\src\assets\icon-clock.svg"
              alt=""
              className="w-[20px] h-[20px]"
            />
            <p className="pl-3 text-[#b1bacc]">3 days left</p>
          </div>
        </div>

        <div className="footer flex pt-6 items-center ">
          <img
            src="src\assets\DM_Pic.jpg"
            alt=""
            className="w-[40px] h-[40px] object-cover rounded-full border"
          />
          <p className="pl-4 text-[#b1bacc]">
            Creation of
            <span className="text-white pl-[8px] hover:text-[#00fff8] hover:cursor-pointer">
              Devon Martindale
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
