import React, { useEffect, useState } from "react";
import Tiles from "./Tiles";
import Filter from "./Filter";
import { Years, Launch, Landing, Url } from "./constant";
import "./styles.css";

export default function App() {
  const [selectedYear, handleSelectedYear] = useState("");
  const [selectedLaunch, handleSelectedLaunch] = useState("");
  const [selectedLanding, handleSelectedLanding] = useState("");
  const [data, handleData] = useState([]);
  const [error, handleError] = useState("");
  const [isloading, handleLoading] = useState(false);

  const callingApi = async () => {
    let temp = "";
    if (selectedYear) {
      temp += `&launch_year=${selectedYear}`;
    }
    if (selectedLaunch !== "") {
      temp += `&launch_success=${selectedLaunch === "True" ? "true" : "false"}`;
    }
    if (selectedLanding !== "") {
      temp += `&land_success=${selectedLanding === "True" ? "true" : "false"}`;
    }
    try {
      handleLoading(true);
      const result = await fetch(`${Url}${temp}`);
      const data = await result.json();
      handleData([...data]);
      handleLoading(false);
    } catch (e) {
      handleError(e.message);
      handleData([]);
      handleLoading(false);
    }
  };

  useEffect(() => {
    callingApi();
  }, [selectedYear, selectedLaunch, selectedLanding]);

  return (
    <div className="App">
      <div className="filter-heading">
        <h3>SpaceX Launch Programs</h3>
      </div>
      <div className="container">
        <section className="filterSection">
          <div className="filter-content">
            <p>Filters</p>
            <Filter
              placeholder={"Launch Year"}
              value={selectedYear}
              data={Years}
              handleSelection={handleSelectedYear}
            />
            <Filter
              placeholder={"Successful Launch"}
              value={selectedLaunch}
              data={Launch}
              handleSelection={handleSelectedLaunch}
            />
            <Filter
              placeholder={"Successful Landing"}
              value={selectedLanding}
              data={Landing}
              handleSelection={handleSelectedLanding}
            />
          </div>
        </section>
        <section className="content">
          {error}
          {!isloading && error === "" && data.length === 0 && (
            <p>No spaceX Launch program found</p>
          )}
          {data.map((item) => {
            return <Tiles item={item} key={item.flight_number} />;
          })}
        </section>
      </div>
      <div className="footer">
        <span>
          <b>Developed by</b> :{" "}
        </span>
        <span>Deepak Gupta</span>
      </div>
    </div>
  );
}
