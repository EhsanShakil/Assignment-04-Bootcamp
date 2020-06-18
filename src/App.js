import React, { useState } from "react";
import Switch from "react-switch";
import "./App.css";

const App = () => {
  let [light1, setLight1] = useState(true);
  let [light2, setLight2] = useState(true);
  let [temperature, setTemperature] = useState(22);
  return (
    <div className={`room ${light1 && light2 ? "white" : "black"}`}>
      <div>
        <Switch
          className="switchbutton"
          checked={light1}
          onChange={() => setLight1(!light1)}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          id="material-switch"
        />
      </div>
      <div className={light1 && light2 ? "colorblack" : "colorwhite"}>
        <span>Temperture Now {temperature} Celsius</span>
        <button className="plus" onClick={() => setTemperature(++temperature)}>
          +
        </button>
        <button className="minus" onClick={() => setTemperature(--temperature)}>
          -
        </button>
      </div>
      <div>
        <Switch
          className="switchbutton"
          checked={light2}
          onChange={() => setLight2(!light2)}
          onColor="#86d3ff"
          onHandleColor="#2693e6"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
          id="material-switch"
        />
      </div>
    </div>
  );
};

export default App;
