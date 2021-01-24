import React from "react";

function Filter({ handleSelection, placeholder, value, data }) {
  return (
    <div className="filter-content">
      <div className="filter-content-select">
        <input
          type="text"
          disabled
          placeholder={placeholder}
          defaultValue={value}
        />
      </div>
      <div className="filter-content-value">
        {data.map((item) => {
          return (
            <button
              key={item}
              onClick={() => handleSelection(item, value, value === item)}
              className={
                "filter-content-value-item " +
                (value === item ? "filter-content-value-selected" : "")
              }
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
