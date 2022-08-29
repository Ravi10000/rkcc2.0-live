import "./everyday.styles.scss";

import SubHeading from "../subheading/subheading.component";

export default function EverydaySection() {
  return (
    <div className="everyday-section">
      <div className="subheading-container">
        <SubHeading highlight={"#FE706299"}>Contact Us Anytime</SubHeading>
      </div>
      <div className="content-container">
        <div className="content">
          <div className="image">
            <img src="./24x7.png" alt="" />
          </div>
          <div className="info">
            <p>
              We are available at your service 24 hours a day 7 days a week just
              one phone Call away{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
