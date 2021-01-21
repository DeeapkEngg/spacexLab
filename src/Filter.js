import React from "react";

function Filter({ handleSelection, placeholder, value, data }) {
  return (
    <div className="filter">
      <div className="filter-select">
        <input type="text" placeholder={placeholder} defaultValue={value} />
      </div>
      <div className="filter-value">
        {data.map((item) => {
          return (
            <button
              key={item}
              onClick={() => handleSelection(item)}
              className={"yrs " + (value === item ? "selected" : "")}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
