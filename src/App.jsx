import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import QuotationPreview from "./components/QuotationPreview";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <div className="flex flex-col min-h-screen">
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
