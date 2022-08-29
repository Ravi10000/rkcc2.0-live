import "./certified.styles.scss";
import SubHeading from "../subheading/subheading.component";

const CertifiedSection = () => {
  return (
    <div className="certified-section">
      <div className="subheading-container">
        <SubHeading highlight={"#53C178BF"}>
          Certified and Trained Technicians
        </SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="images-certified">
            <img className="ellipse one" src="./Ellipse 3.png" alt="" />
            <img className="main-img" src="./chaman and aman jd 1.png" alt="" />
            <img className="ellipse two" src="./Ellipse 4.png" alt="" />
          </div>
          <div className="info">
            <p>
              Our experienced & certified technicians makes no mistakes or mess
              while working and finish work quickly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertifiedSection;
