import React from "react";
import Layout from "../components/Layout";
import Image from "../assets/images/homepage-dev.png";

function Home() {
  return (
    <div>
      <Layout>
        <div className="home">
          <div className="home-content">
            <div className="content">
              <h1 className="gradient-text">Welcome to my Personal Page</h1>
              <p>
                I have always had an interest in engineering, in particular,
                industrial engineering, but at the same time I've been really
                passionate about programming. For all the skills I've
                accomplished so far, programming had always been there and it
                never felt exhausting.
              </p>
            </div>
            <div className="home-img">
              <img src={Image} alt="Homepage img!" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
