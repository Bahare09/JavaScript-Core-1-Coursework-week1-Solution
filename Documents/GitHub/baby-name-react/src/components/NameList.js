import React from "react";
import "./NameList.css";

const NameList = (props) => {
  const sortedData = props.babyData.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return (
    <div className="NameList">
      {sortedData.map((data) => (
        <p
          key={data.id}
          style={{ backgroundColor: data.sex === "f" ? "pink" : "blue" }}
        >
          {data.name}
        </p>
      ))}
    </div>
  );
};

export default NameList;
