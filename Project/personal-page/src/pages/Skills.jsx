import React from "react";
import Layout from "../components/Layout";
import Experience from "../components/skills/Experience";
import Hobbies from "../components/skills/Hobbies";
import Languages from "../components/skills/Languages";
import SoftSkills from "../components/skills/SoftSkills";

function Skills() {
  return (
    <div>
      <Layout>
        <div className="skills">
          <div className="skills-content">
            <div className="skills-container-1">
              <Experience />
              <Languages />
            </div>
            <div className="skills-container-2">
              <SoftSkills />
              <Hobbies />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Skills;
