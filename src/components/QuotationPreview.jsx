import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast } from "react-hot-toast";
import QuotationHeader from "./QuotationHeader";

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
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
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
    <div className="p-6 border shadow-lg max-w-2xl mx-auto">
      <div id="quotation-format" className="bg-white border border-black">
        <QuotationHeader />
        <div className="p-4">
          <h2 className="text-xl font-semibold mt-4">Customer Details</h2>
          <p>Name: {quotation.customer.name}</p>
          <p>Phone: {quotation.customer.phone}</p>

          <h2 className="text-xl font-semibold mt-4">Items</h2>
          <table className="w-full border-collapse border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Item</th>
                <th className="border p-2">Qty</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {quotation.items.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2 text-center">{item.qty}</td>
                  <td className="border p-2 text-right">₹{item.price}</td>
                  <td className="border p-2 text-right">
                    ₹{item.qty * item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-xl font-semibold mt-4">
            Total Amount: ₹
            {quotation.items.reduce(
              (total, item) => total + item.qty * item.price,
              0
            )}
          </h2>
        </div>
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
