import { useState } from "react";

const CountItems = () => {
  const [itemCount, setItemCount] = useState(0);

  const handleIncrease = () => itemCount < 10 && setItemCount(itemCount + 1);
  const handleDecrease = () => itemCount > 0 && setItemCount(itemCount - 1);

  return (
    <div className="flex__countitems">
      <button className="minus" onClick={handleDecrease}>
        -
      </button>
      <div className="count__box">{itemCount}</div>
      <button className="plus" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default CountItems;
