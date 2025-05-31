import React, { forwardRef } from "react";
import "../Styles/TechStack.css";

const TechStack = forwardRef((props, ref) => {
  return (
    <div className="techstack section section2" ref={ref}>
      <div className="heading">SKILLS</div>
      <div className="content">
        <div className="frontend skills">
          <ul>
            <li>
              <img src="react.svg" alt="" />
              React
            </li>
            <li>
              <img src="tailwind.svg" alt="" />
              Tailwind CSS
            </li>
            <li>
              <img src="html.svg" alt="" />
              HTML5
            </li>
            <li>
              <img src="javascript.svg" alt="" />
              Javascript
            </li>
          </ul>
        </div>
        <div className="backend skills">
          <ul>
            <li>
              <img src="node.svg" alt="" />
              Node.js
            </li>
            <li>
              <img src="express.svg" alt="" />
              Express.js
            </li>
            <li>
              <img src="mongoose.svg" alt="" />
              Mongoose ODM
            </li>
            <li>
              <img src="flask.svg" alt="" />
              Flask
            </li>
          </ul>
        </div>
        <div className="database skills">
          <ul>
            <li>
              <img src="mongo.svg" alt="" />
              MongoDB
            </li>
            <li>
              <img src="mysql.svg" alt="" />
              MySQL
            </li>
            <li>
              <img src="atlas.svg" alt="" />
              Atlas
            </li>
            <li>
              <img src="rest-api.svg" alt="" />
              RESTful APIs
            </li>
          </ul>
        </div>
        <div className="tools skills">
          <ul>
            <li>
              <img src="github-color-svgrepo-com.svg" alt="" />
              GitHub
            </li>
            <li>
              <img src="postman-icon-svgrepo-com.svg" alt="" />
              Postman
            </li>
            <li>
              <img src="openai-svgrepo-com.svg" alt="" />
              OpenAI
            </li>
            <li>
              <img src="firebase-svgrepo-com.svg" alt="" />
              Firebase
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default TechStack;
