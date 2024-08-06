import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Faq from "./component/faq/Faq";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import PartnerDriverPage from "./component/hero/PartnerDriver";
import Hiw from "./component/hiw/Hiw";
import Join from "./component/join/Join";
import Testimonials from "./component/testimonial/Testimonial";
import PaymentForm from "./component/PaymentForm/PaymentForm";
import Home from "./component/Home/Home";
import PaymentFormI from "./component/PaymentFormI/PaymentFormI";
import SelectPaymentMethod from "./component/SelectPaymentMethod/SelectPaymentMethod";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/hiw" element={<Hiw />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/join" element={<Join />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/paymentForm" element={<PaymentFormI />} />
        <Route path="/paymentMethod" element={<SelectPaymentMethod />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
