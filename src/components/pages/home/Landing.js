import classes from "./Landing.module.css";
import college from "../../../assets/images/ait2.55aa091d.webp";
import greenCurve from "../../../assets/logos/green-curve.svg";
import imgResume from "../../../assets/logos/resume.svg";
import imgId from "../../../assets/logos/id.svg";
import redChat from "../../../assets/logos/red-chat.svg";
import yellowChat from "../../../assets/logos/yellow-chat.svg";
const Landing = () => {
  return (
    <div className={classes.landing}>
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
          <button className={classes["link-btn"]}>Get started Now</button>
        </div>
      </div>
      <div className={classes["landing-right"]}>
        <div className={classes["icons-wrap"]}>
          <img src={imgResume} alt="" className={classes["img-Resume"]} />
          <img src={imgId} alt="" className={classes["img-Id"]} />
          <img src={redChat} alt="" className={classes["img-RedChat"]} />
          <img src={yellowChat} alt="" className={classes["img-YellowChat"]} />

          <div className={classes["img-wrap"]}>
            <img src={college} alt="" className={classes.imgCollege}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Landing;
