import React from "react";

function Tiles({ item }) {
  return (
    <div className="tile">
      <div className="tile-image">
        <img src={item.links.mission_patch} alt="" />
      </div>
      <div className="tile-name">
        <a href={item.links.video_link}>
          <h5>
            {item.mission_name} #{item.flight_number}
          </h5>
        </a>
      </div>
      <div className="title-missionId">
        <label>Mission Ids: </label>
        <div className="title-id-list">
          <ul>
            {item.mission_id.map((item) => {
              return (
                <li key={item} className="missionId">
                  {item}
                </li>
              );
            })}{" "}
          </ul>
        </div>
      </div>
      <div className="info">
        <div className="label">Launch Year:</div>
        <div className="data">{item.launch_year}</div>
      </div>
      <div className="info">
        <div className="label">Successful Launch:</div>
        <div className="data">{item.launch_success ? "True" : "False"}</div>
      </div>
      <div className="info">
        <div className="label">Successful Landing:</div>
        <div className="data">
          {item.rocket && item.rocket.first_stage.cores[0].land_success
            ? "True"
            : "False"}
        </div>
      </div>
    </div>
  );
}

export default Tiles;
