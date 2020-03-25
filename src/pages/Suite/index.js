import React from "react";
import "./index.scss";
import { useRouteMatch, Link } from "react-router-dom";
import Navbar from "../../components/NavBar";

const SuitePage = props => {
  console.log(useRouteMatch());
  const suiteId = useRouteMatch().params.suiteId;
  console.log(
    'SUITE PAGE - "suiteList" inherited from App.js:',
    props.suitesList
  );

  const singleSuite =
    props.suitesList &&
    props.suitesList.find(suite => (suite.fields.id = suiteId));
  console.log(singleSuite);

  return (
    <div>
      <Navbar />
      {/* Title */}
      <div>{singleSuite ? singleSuite.fields.id : "loading"}</div>
      <div className="container-single-suite">
        <div className="container-single-plan"></div>
        <h1>Details for Suite #{suiteId}</h1>
        <br />
        {/* Link to homepage */}
        <a href='/'>Back to all suites</a>
        {/* <Link to="/">Back to all suites</Link> */}
      </div>
    </div>
  );
};

export default SuitePage;
