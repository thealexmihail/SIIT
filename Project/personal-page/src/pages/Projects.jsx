import React from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/projects/ProjectList";

function Projects() {
  return (
    <div>
      <Layout>
        <div className="all-projects">
          <ProjectList />
        </div>
      </Layout>
    </div>
  );
}

export default Projects;
