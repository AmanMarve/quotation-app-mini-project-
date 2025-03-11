import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import QuotationPreview from "./components/QuotationPreview";
import {Toaster} from 'react-hot-toast'
import BackgroundComponent from './components/BackgroundComponent'

function App() {
  return (
    <BrowserRouter>
    <Toaster />
    <BackgroundComponent/>
      <div className="flex flex-col min-h-screen">
      <h1 className="text-center m-auto text-2xl font-semibold bg-gradient-to-r from-green-600 to-indigo-600 text-white rounded-lg mb-2 px-5 py-1 italic pb-2 mt-2" >Quotation-Generator</h1>

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preview" element={<QuotationPreview />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
