import "./footer.styles.scss";

import SubHeading from "../subheading/subheading.component";

export default function Footer() {
  return (
    <div className="footer">
      <div className="content-container">
        <div className="subheading-container">
          <SubHeading highlight="#BBB9B98A" color="#ffffff">
            Contact Us
          </SubHeading>
        </div>
        <p>
          <span>Aman Soni: </span>+91 7678627063
        </p>
        <p>
          <span>Chaman Soni: </span>+91 9582541150
        </p>
      </div>
      <div className="promotion">
        <img id="promotion-img" src="./promotion.png" alt="" />
      </div>
      <div className="copyright">
        <p>copyright&copy;2022</p>
        <p>www.rkcoolcenter.com</p>
        <p>all rights reserved</p>
      </div>
    </div>
  );
}
