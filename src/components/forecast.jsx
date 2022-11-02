import React from "react";
import { useSelector } from "react-redux";
import { getForecast } from "../reducers/weatherReducer";

function Forecast() {
  const data = useSelector(getForecast);
  return (
    data && (
      <div className="forecast">
        {Object.keys(data).map((property, index) => {
          return (
            <table className="reading" key={index}>
              <tr>
                <td>{property}</td>
                <td>{data[property]}</td>
              </tr>
            </table>
          );
        })}
      </div>
    )
  );
}

export default Forecast;
