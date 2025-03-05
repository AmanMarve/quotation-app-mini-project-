import React from "react";

const QuotationHeader = () => {
  return (
    <div className="border-b border-black">
      <div className="flex p-2 justify-between font-bold">
        <p>GST NO: GST1234567890</p>
        <p>Contact: 9049384729</p>
      </div> 
<div>
  <h1>Advik</h1>
  <h3>Enterprises</h3>
</div>
<p>Sales & Services</p>
<p className="border-t p-1 italic font-bold border-black text-center">Amar chowk, Babupeth ward no1, Chandrapur</p>
<p className="border-t p-2 italic font-bold text-sm border-black text-center">Our services: All types of RO system Repairing & Maintenance, All type of Air Conditioning,
Refrigerators, Water coolers & Chiller plant Repairing & Maintenance
</p>
    </div>
  );
};

export default QuotationHeader;
