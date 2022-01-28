import React from "react";
import ProgressBar from "./ProgressBar";
import SkillsPic from "../../assets/images/skills.png";

class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: [
        { id: 1, value: "HTML", experience: 1 },
        { id: 2, value: "CSS", experience: 1 },
        { id: 3, value: "JavaScript", experience: 0.5 },
        { id: 4, value: "PHP", experience: 0.3 },
      ],
      frameworks: [
        { id: 1, value: "Bootstrap", experience: 0.7 },
        { id: 2, value: "jQuery", experience: 0.3 },
        { id: 3, value: "React JS", experience: 0.1 },
        { id: 4, value: "Angular", experience: 0.1 },
      ],
    };
  }

  render() {
    let { languages, frameworks } = this.state;

    return (
      <div className="languages-frameworks">
        <ProgressBar
          languages={languages}
          classname="display-languages"
          title="programming technologies"
        />
        <ProgressBar
          languages={frameworks}
          className="display-frameworks"
          title="frameworks &amp; libraries"
        />
        <div className="skills-img">
          <img src={SkillsPic} alt="Skills img!" />
        </div>
      </div>
    );
  }
}

export default Languages;
