const ColorCheckbox = (props) => {
  return (
    <div className="color__checkbox">
      <div className="border__hover">
      <button className="black checkbox"></button>
    </div>
    <div className="border__hover">  
      <button className="silver checkbox"></button>
    </div>
    <div className="border__hover">
      <button className="gold checkbox"></button>
    </div>
      <p>Black</p>
      <p>Silver</p>
      <p>Gold</p>
    </div>
    
  );
};

export default ColorCheckbox;
