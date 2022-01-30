import React from "react";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
    };
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons gradient-text">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3 className="gradient-text">{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          Show more
        </span>

        {this.state.showInfo && (
          <div className="show-infos">
            <div className="info-overlay"></div>
            <div className="info-content">
              <div className="head">
                <h2>{name}</h2>
                <div className="source-code">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="btn btn-info"
                    target="_blank"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="btn btn-danger" onClick={this.handleInfo}>
                Return to the page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
