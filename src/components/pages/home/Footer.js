import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes["footer-container"]}>
        <div className={classes["footer-address"]}>
          <div className={classes["address-header"]}>
            <h3 className={classes["clg-name"]}>
              Army Institute of Technology
            </h3>
            <p className={classes["clg-address"]}>
              Alandi Road,Dighi Hills,Pune
            </p>
            <p className={classes["clg-pin"]}>411015</p>
          </div>
          <div className={classes["clg-social"]}></div>
          <div className={classes["footer-copyright"]}>
            <span>&copy;</span>2021 Team nemetriX all rights reserved
          </div>
        </div>
        <div className={classes["footer-admin"]}>
          <h3 className={classes["admin-name"]}>Prof Manoj S Khaladkar</h3>
          <p className={classes["admin-designation"]}>
            Training & Placement Officer
          </p>
          <p className={classes["admin-mail"]}>tpo@aitpune.edu.in</p>
        </div>
        <div className={classes["footer-feedback"]}>
          <div className={classes["feedback-request"]}>
            <h3>Facing issues using this platform or have any suggestions</h3>

            <p>
              Let us know about it
              <br />
              It would be great if you tell us your name and email so that we
              can get back to you
            </p>
          </div>
          <div className={classes["feedback-input"]}>
            <input type="text" />
            <div className={classes["feedback-send"]}>
              <a href="#">Send</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
