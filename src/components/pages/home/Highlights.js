import React from "react";

import classes from "./Highlights.module.css";
import { ReactComponent as StarIcon } from "../../UI/svg/auto_awesome_white_24dp.svg";
import timelineElements from "./vertical-timeline/timelineElements";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Highlights = () => {
  return (
    <div className={classes.highlights}>
      <div className={classes["highlights-container"]}>
        <div className={classes["highlights-heading"]}>
          <h1 style={{ textAlign: "center" }}> Placements Time line</h1>
        </div>

        <VerticalTimeline>
          {timelineElements.map((element) => {
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.year}
                dateClassName={classes["date-style"]}
                iconStyle={{ background: "#61c15c" }}
                icon={<StarIcon />}
              >
                <h2 className="vertical-timeline-element-title">
                  {element.title}
                </h2>

                <h4 className="vertical-timeline-element-subtitle">
                  {element.percentage} % placements
                </h4>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Highlights;
