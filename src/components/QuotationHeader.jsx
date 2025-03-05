import React from "react";

const QuotationHeader = () => {
  return (
    <div className="border-b border-black">
      <div className="flex flex-row sm-p-1 p-4 sm:flex-row justify-between  font-bold text-[10px] sm:text-base mb-2">
        <p>GST NO: GST1234567890</p>
        <p>Contact: 9049384729</p>
      </div>

      <div className="flex flex-row -mt-5 mb-4 sm:flex-row justify-center items-center gap-1 sm:gap-2">
        <h1 className="text-3xl sm:text-5xl font-bold">Advik</h1>
        <h3 className="text-2xl sm:text-4xl font-semibold italic mt-1 sm:mt-2">
          Enterprises
        </h3>
      </div>

      <p className="text-center mb-2 text-sm sm:text-xl italic -mt-1 -sm:mt-1">
        Sales & Services
      </p>

      <p className="border-t items-center justify-center p-2 pb-3 italic font-bold border-black text-center text-[10px] sm:text-base">
        Amar chowk, Babupeth ward no.1, Chandrapur
      </p>

      <p className="border-t p-2 italic font-bold text-[8px] sm:text-[14px] border-black text-center leading-snug sm:leading-normal">
        Our services: All types of RO system Repairing & Maintenance,  
        All types of Air Conditioning, Refrigerators, Water Coolers & Chiller 
        Plant Repairing & Maintenance
      </p>
    </div>
  );
};

export default QuotationHeader;
