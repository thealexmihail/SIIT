import React from "react";
import { projectData } from "../../data/projectData";
import Project from "../projects/Project";

class ProjectList extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: projectData,
      radios: [
        { id: 1, value: "html" },
        { id: 2, value: "css" },
        { id: 3, value: "bootstrap" },
        { id: 4, value: "javascript" },
        { id: 5, value: "react" },
        { id: 6, value: "php" },
      ],
      selectedRadio: "html",
    };
  }

  handleRadio = (event) => {
    let radio = event.target.value;
    this.setState({ selectedRadio: radio });
  };

  render() {
    let { projects, radios, selectedRadio } = this.state;

    return (
      <div className="project-content">
        <div className="radio-name gradient-text">
          Filter projects by the following technologies
        </div>
        <ul className="radio-display">
          {radios.map((radio) => {
            return (
              <li key={radio.id}>
                <input
                  type="radio"
                  name="radio"
                  checked={radio.value === selectedRadio}
                  value={radio.value}
                  id={radio.value}
                  onChange={this.handleRadio}
                />
                <label htmlFor={radio.value}>{radio.value}</label>
              </li>
            );
          })}
        </ul>

        <div className="projects">
          {projects
            .filter((item) => item.languages.includes(selectedRadio))
            .map((item) => {
              return <Project key={item.id} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

export default ProjectList;
