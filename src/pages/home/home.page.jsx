import "./home.styles.scss";
import Header from "../../components/header/header.component";
import Services from "../../components/services/services.component";
import CertifiedSection from "../../components/certified/certified.component";
import PricesSection from "../../components/prices/prices.component";
import EverydaySection from "../../components/everyday/everyday.components";
import Address from "../../components/address/address.component";
import ScrollToTop from "../../components/scroll-to-top/scroll-to-top.component";

// import SmoothScroll from "../../components/smooth-scroll/smooth-scroll.component";

export default function HomePage() {
  return (
    <div className="homepage">
      <ScrollToTop/>
      {/* <SmoothScroll> */}
        <Header />
        <Services />
        <p className="question">Why us, you ask?</p>
        <p className="answer">Let's find out the answer</p>
        <CertifiedSection />
        <PricesSection />
        <EverydaySection />
        <Address />
      {/* </SmoothScroll> */}
    </div>
  );
}
