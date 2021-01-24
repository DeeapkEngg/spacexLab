import React from "react";

function Tiles({ item }) {
  const val = item.rocket.first_stage.cores[0].land_success;
  const landing = val === null ? "null" : `${val}`;
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
      <div className="tile-missionid-list">
        <label>Mission Ids: </label>
        <ul>
          {item.mission_id.map((item) => {
            return (
              <li key={item} className="tile-missionid-list-item">
                {item}
              </li>
            );
          })}{" "}
        </ul>
      </div>
      <div className="tile-info">
        <div className="tile-info-label">Launch Year:</div>
        <div className="tile-info-data">{item.launch_year}</div>
      </div>
      <div className="tile-info">
        <div className="tile-info-label">Successful Launch:</div>
        <div className="tile-info-data">
          {item.launch_success ? "True" : "False"}
        </div>
      </div>
      <div className="tile-info">
        <div className="tile-info-label">Successful Landing:</div>
        <div className="tile-info-data">{landing}</div>
      </div>
    </div>
  );
}

export default Tiles;
