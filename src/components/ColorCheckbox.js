const ColorCheckbox = (props) => {
  return (
    <label className="checkbox__label">
      <input
        className="cheackbox__input"
        type="radio"
        checked="checked"
        name="radio"
      />
      <span className="check"></span>
      {props.color}
    </label>
  );
};

export default ColorCheckbox;
