import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Current from "./components/current";
import Forecast from "./components/forecast";
import Header from "./components/Header";
import {getCurrentData, getForecastData} from "./reducers/weatherReducer"

function App() {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({
    select:"current",
    search:""
  })

  const handleInputChange = (e)=>{
    setInputs({
      ...inputs,[e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getCurrentData(inputs.search))
    dispatch(getForecastData(inputs.search))
    setInputs({
      ...inputs,
      search:""
    })
  };

  return (
    <>
      <div className="main">
        <Header/>
        <div className="form">
          <select name="select" className="custom-select" onChange={handleInputChange}>
            <option value="current">weatherapi current</option>
            <option value="forecast">weatherapi forecast</option>
          </select>
        </div>
        <div className="search">
          <form className="form-inline" onSubmit={handleSubmit}>
            <input
            name="search"
              className="form-control mr-sm-2"
              value={inputs.search}
              onChange={handleInputChange}
              type="search"
              placeholder="Enter place Name"
              aria-label="Search"
              required
            />
            <button className="btn btn-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="display">
          {inputs.select === "current" ? <Current /> : <Forecast />}
        </div>
      </div>
    </>
  );
}

export default App;