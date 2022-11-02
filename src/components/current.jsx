import React from "react";
import { useSelector } from "react-redux";
import { getCurrent } from "../reducers/weatherReducer";

function Current() {
  const data = useSelector(getCurrent);
  return (
    data && (
      <div className="current">
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

export default Current;
