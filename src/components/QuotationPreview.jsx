import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-hot-toast";
import QuotationHeader from "./QuotationHeader";
import QuotationFooter from "./QuotationFooter";

const QuotationPreview = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const quotation = state?.quotation;

  const handleBack = () => {
    navigate("/", { state: { quotation } });
    toast.success("Back to Edit Quotation");
  };

  const handleDownload = () => {
    const quotationElement = document.getElementById("quotation-format");

    html2canvas(quotationElement, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const imgWidth = 190;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
        pdf.save("Quotation.pdf");
        toast.success("Quotation Downloaded Successfully!");
      })
      .catch(() => {
        toast.error("Something went wrong while downloading!");
      });
  };

  if (!quotation) {
    toast.error("No Data Available");
    return <h2 className="text-center text-red-500">No Data Available</h2>;
  }

  return (
    <div
      id="quotation-wrapper"
      className="p-6 border shadow-lg max-w-2xl mx-auto"
    >
      <div id="quotation-format" className="bg-white border border-black">
        <QuotationHeader />
        <div>
          <div className="flex sm:text-sm text-[9px] font-semibold justify-between pt-1 px-3">
            <p>Bill No:</p>
            <p className="italic">
              Date: {new Date().toLocaleDateString("en-GB")}
            </p>
          </div>
          <div className="flex sm:text-lg text-[9px] items-center gap-2 px-3 pb-1">
            M/s. :
            <p className="text-sm sm:text-lg">{quotation.customer.name}</p>
          </div>
          <table className="w-full text-center">
            <thead>
              <tr className="sm:text-[13px] text-[10px] italic">
                <th className="border-b border-t border-black p-2">
                  Particulars{" "}
                </th>
                <th className="border border-black p-2">QTY</th>
                <th className="border border-black p-2">Rate</th>
                <th className="border-b border-t border-black p-2">Amount</th>
              </tr>
            </thead>
            <tbody className="min-h-[500px] sm:text-[13px] text-[10px]">
              {quotation.items.map((item, index) => (
                <tr key={index} className="gap-0">
                  <td className="border-r border-black p-2">{item.name}</td>
                  <td className="border-r border-black p-2 text-top">
                    {item.qty}
                  </td>
                  <td className="border-r border-black p-2 text-center whitespace-nowrap">
                    {item.price}/-
                  </td>
                  <td className=" border-black p-2 text-center">
                    {item.qty * item.price}/-
                  </td>
                </tr>
              ))}

              {Array.from({
                length: Math.max(10 - quotation.items.length, 0),
              }).map((_, i) => (
                <tr
                  key={`empty-${i}`}
                  className="h-[10px] sm:h-[30px] md:h-[40px]"
                >
                  <td className="border-r border-black p-1 sm:p-2">&nbsp;</td>
                  <td className="border-r border-black p-1 sm:p-2">&nbsp;</td>
                  <td className="border-r border-black p-1 sm:p-2">&nbsp;</td>
                  <td className="border-black p-1 sm:p-2">&nbsp;</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 className="sm:text-[18px] text-[13px] border-t text-end px-3 py-1 pb-2 border-black font-semibold ">
            Total Amount: ₹
            {quotation.items.reduce(
              (total, item) => total + item.qty * item.price,
              0
            )}
          </h2>
        </div>
        <QuotationFooter />
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleBack}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Go Back
        </button>
        <button
          onClick={handleDownload}
          className="bg-red-700 text-white px-4 py-2 rounded"
        >
          Download Quotation
        </button>
      </div>
    </div>
  );
};

export default QuotationPreview;
