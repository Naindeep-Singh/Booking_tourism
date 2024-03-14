import { useState } from "react";
import Cardcontainer from "./Cardcontainer";
import data from "../database/Data";
function Home() {
  const [selectedState, setSelectedState] = useState("show all states");

  const uniqueStates = [
    "Uttar Pradesh",
    "Rajasthan",
    "Goa",
    "West Bengal",
    "Kerala",
    "Maharashtra",
    "Himachal Pradesh",
    "Bihar",
    "Jharkhand",
  ];

  const filterHandler = (stateName) => {
    setSelectedState(stateName);
  };

  const filterData =
    selectedState != "show all states"
      ? data.filter((item) => item.state === selectedState)
      : data;

  return (
    <>
      <div className="filter-option">
        <select
          onChange={(e) => filterHandler(e.target.value)}
          className={
            selectedState != "show all states"
              ? "active-select"
              : "inactive-select"
          }
        >
          <option>show all states</option>
          {uniqueStates.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <Cardcontainer data={filterData} />
    </>
  );
}

export default Home;
