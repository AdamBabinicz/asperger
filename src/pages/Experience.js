import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  GiAbstract003,
  GiAbstract005,
  GiAbstract007,
  GiAbstract008,
} from "react-icons/gi";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1944"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GiAbstract003 />}
        >
          <h3 className="vertical-timeline-element-title">
            Całościowe zaburzenie rozwoju, mieszczące się w spektrum autyzmu,
            opisane po raz pierwszy przez Hansa Aspergera.
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            <em>Austriacki lekarz pediatra, psychiatra</em>
          </h4>
          <p>pl.wikipedia.org/wiki/Zespół_Aspergera</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="1981"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<GiAbstract005 />}
        >
          <h3 className="vertical-timeline-element-title">
            Po raz pierwszy termin Asperger’s Syndrome został użyty w publikacji
            Lorny Wing.
          </h3>
          <br />
          <h4 className="vertical-timeline-element-subtitle">
            <em>Angielska psychiatra i lekarz</em>
          </h4>
          <p>pl.wikipedia.org/wiki/Zespół_Aspergera</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1981"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<GiAbstract007 />}
        >
          <h3 className="vertical-timeline-element-title">
            Zaburzenie to obejmuje m.in. uporczywe trudności w zakresie
            umiejętności społecznych, trudności w akceptowaniu zmian,
            ograniczoną elastyczność myślenia przy braku upośledzenia umysłowego
            oraz ograniczone, wąskie i powtarzające się zachowania oraz
            zainteresowania.
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>pl.wikipedia.org/wiki/Zespół_Aspergera</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="1981"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<GiAbstract008 />}
        >
          <h3 className="vertical-timeline-element-title">
            Głównymi kryteriami różnicującymi zespół Aspergera od innych,
            cięższych zaburzeń autystycznych, są brak opóźnienia rozwoju mowy i
            innych istotnych jej zaburzeń uniemożliwiających logiczną
            komunikację oraz typowy rozwój poznawczy.
          </h3>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <p>pl.wikipedia.org/wiki/Zespół_Aspergera</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
