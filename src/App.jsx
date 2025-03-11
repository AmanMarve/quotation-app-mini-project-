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
