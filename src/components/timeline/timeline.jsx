import React from "react";

import "./timeline.css";
import { ReactComponent as WorkIcon } from "../../assets/work.svg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";




export default function App() {
  return (
    <div>
      <section id="timeline">
      <h5>My Recent Work experience</h5>
      <h2>Work Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          contentStyle={{ background: "var(--color-bg-variant)" }}
          contentArrowStyle={{ borderRight: "7px solid  var(--color-bg-variant)"}}
          date={<span >February 2023 - present</span>}
          iconStyle={{ background: "var(--color-bg-variant", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Human Resource Development</h3>
          <h5 className="vertical-timeline-element-subtitle">PT Yamaha Motor Parts Manufacturing Indonesia</h5>
          <p>
            Create training plan and improve training system, digitalization,
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          
          contentStyle={{ background: "var(--color-bg-variant)" }}
          contentArrowStyle={{ borderRight: "7px solid  var(--color-bg-variant)"}}
          date={<span >January 2021 - January 2023</span>}
          iconStyle={{ background: "var(--color-bg-variant", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Logistic Control</h3>
          <h5 className="vertical-timeline-element-subtitle">PT Yamaha Indonesia Motor Manufacturing West Java Factory</h5>
          <p>
          control the flow of logistics and register incoming and outgoing materials 
          to guarantee the smooth progress of production.
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
      </section>
    </div>
  );
}

