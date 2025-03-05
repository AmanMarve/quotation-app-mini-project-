import React from "react";

const QuotationHeader = () => {
  return (
    <div className="border-b border-black">
      <div className="flex p-2 justify-between font-bold">
        <p>GST NO: GST1234567890</p>
        <p>Contact: 9049384729</p>
      </div>
      <div className="flex justify-center -mt-4 items-center gap-2">
        <h1 className="text-[4rem] font-bold">Advik</h1>
        <h3 className="text-[3rem] mt-3 font-semibold italic">Enterprises</h3>
      </div>
      <p className="text-center text-[1.5rem] italic -mt-4">Sales & Services</p>
      <p className="border-t p-1 italic font-bold border-black text-center">
        Amar chowk, Babupeth ward no1, Chandrapur
      </p>
      <p className="border-t p-2 italic font-bold text-sm border-black text-center">
        Our services: All types of RO system Repairing & Maintenance, All type
        of Air Conditioning, Refrigerators, Water coolers & Chiller plant
        Repairing & Maintenance
      </p>
    </div>
  );
};

export default QuotationHeader;
