import classes from "./Landing.module.css";
import college from "../../../assets/images/ait2.55aa091d.webp";
import greenCurve from "../../../assets/logos/green-curve.svg";
import imgResume from "../../../assets/logos/resume.svg";
import imgId from "../../../assets/logos/id.svg";
import redChat from "../../../assets/logos/red-chat.svg";
import yellowChat from "../../../assets/logos/yellow-chat.svg";
import { Link } from "react-router-dom";
//images
import google from "../../../assets/logos/580b57fcd9996e24bc43c51f.png";
import microsoft from "../../../assets/logos/Microsoft-Logo-PNG-Transparent.png";
import amazon from "../../../assets/logos/Amazon_(company)-Logo.wine.svg";
import accenture from "../../../assets/logos/Accenture-logo.png";
import deutsche from "../../../assets/logos/399-3994348_deutsche-bank-logo-png-transparent-png.png";
const Landing = () => {
  return (
    <div className={classes.landing}>
      <div className={classes["landing-container"]}>
        <img src={greenCurve} alt="" className={classes["img-green-curve"]} />
        <div className={classes["landing-left"]}>
          <div className={classes["landing-heading"]}>
            <h3>Find your</h3>
            <h1>
              Permanent <br /> Remote Job
            </h1>
          </div>
          <div className={classes["landing-desc"]}>
            <p>
              Let us Match you with top tech companeis <br /> looking to hire
              tremote developers
            </p>
          </div>
          <div className={classes["landing-links"]}>
            <Link to="/signup">
              <button className={classes["link-btn"]}>Get started Now</button>
            </Link>{" "}
          </div>
        </div>
        <div className={classes["landing-right"]}>
          <div className={classes["icons-wrap"]}>
            <img src={imgResume} alt="" className={classes["img-Resume"]} />
            <img src={imgId} alt="" className={classes["img-Id"]} />
            <img src={redChat} alt="" className={classes["img-RedChat"]} />
            <img
              src={yellowChat}
              alt=""
              className={classes["img-YellowChat"]}
            />

            <div className={classes["img-wrap"]}>
              <img src={college} alt="" className={classes.imgCollege}></img>
            </div>
          </div>
        </div>
      </div>

      <div className={classes["landing-placements"]}>
        <h1>Our students succesfully placed at</h1>

        <div className={classes["company-icon"]}>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={google} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={microsoft} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={amazon} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            {" "}
            <img src={accenture} alt="" />
          </div>
          <div className={classes["icon-wrap"]}>
            <img src={deutsche} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
