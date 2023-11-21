import { useState } from "react";

export const Lightbulb = () => {
  // Initialize the state for on/off
  const [light, setLight] = useState(false)
  
  const toggleLight = () => {
    // Turn on/off
      setLight(light ? false : true )
      console.log("Clicked", light);
    }
    if (light === true) {
      // light on
    } else {
      // light off
    }
    
    const lightState = light ? "lightbulb on" : "lightbulb off"

  return (
    <div className="lightbulb-container">
      <div className={lightState} onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
