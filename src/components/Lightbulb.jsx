export const Lightbulb = () => {
  // Initialize the state for on/off

  const toggleLight = () => {
    // Toggle the on/off state
    console.log("Clicked");
  };
  return (
    <div className="lightbulb-container">
      <div className="lightbulb" onClick={toggleLight}>
        <div className="bulb"></div>
      </div>
    </div>
  );
};
