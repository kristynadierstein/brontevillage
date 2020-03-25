import React, { useState, useEffect } from "react";
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

  const [suiteSingle, setSuite] = useState(null);

  useEffect(() => {
    if (props.suitesList) {
      var single = props.suitesList.find(suite => (suite.fields.id = suiteId));
      console.log(single);
    }
    return () => {
      setSuite(single);
    };
  }, [suiteSingle, props.suitesList, suiteId]);

  console.log(suiteSingle);

  // if (props.suitesList) {
  //   var single = props.suitesList.find(
  //     suite => (suite.fields.id = suiteId)
  // 	);
  // 	console.log(single)
  // 	console.log(suiteSingle)
  // }, setSuite(single)

  return (
    <div>
      <Navbar />
      {/* Title */}
      <div className="container-single-suite">
        <div className="container-single-plan"></div>
        <h1>Details for Suite #{suiteId}</h1>
        <br />
        {/* Link to homepage */}
        <Link to="/">Back to all suites</Link>
      </div>
    </div>
  );
};

export default SuitePage;
