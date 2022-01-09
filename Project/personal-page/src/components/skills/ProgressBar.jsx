import React from "react";

function ProgressBar(props) {
  return (
    <div className={props.className}>
      <h3 className="gradient-text">{props.title}</h3>
      <div className="years">
        <span>Years of experience</span>
        <span>0.5</span>
        <span>1 year</span>
      </div>

      <div>
        {props.languages.map((item) => {
          let experienceYears = 1;
          let progressBar = (item.experience / experienceYears) * 100 + "%";

          return (
            <div key={item.id} className="languages">
              <li>{item.value}</li>
              <div
                className="progress-bar"
                style={{ width: progressBar }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressBar;
