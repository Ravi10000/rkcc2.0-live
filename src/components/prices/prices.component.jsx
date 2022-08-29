import "./prices.styles.scss";
import SubHeading from "../subheading/subheading.component";

const PricesSection = () => {
  return (
    <div className="prices-section">
      <div className="subheading-container">
        <SubHeading highlight={"#FFC10099"}>Reasonable Pricing</SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="image">
            <img className="main-img" src="./money.png" alt="" />
            <img className="ellipse one" src="./offer.png" alt="money" />
            <img className="ellipse two" src="./Ellipse 7.png" alt="" />
          </div>
          <div className="info">
            <p>
              Get regular offers and discounts like no others
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricesSection;
