import { useState, useEffect } from "react";

function ProductList(props) {
  const [quantity, setQuantity] = useState(Number(props.quantity));
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    props.onCheckboxChange({ ...props, quantity }, checked);
  };

  useEffect(() => {
    if (isChecked) {
      props.onCheckboxChange({ ...props, quantity }, true);
    }
  }, [quantity]);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const price = Number(props.price.replace("₱", "").replace(",", ""));
  const totalprice = price * quantity;

  const deleteItem = () => {
    setQuantity(0);
  };

  if (quantity < 1) {
    return null;
  }

  return (
    <div className="container">
      <div className="product-row">
        <div className="product-column">
          <input
            type="checkbox"
            className="product-checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <img src={props.imageURL} alt="Product" className="product-image" />
          <span>{props.name}</span>
        </div>
        <div className="header-column">₱{price.toLocaleString()}</div>
        <div className="header-column">
          <button onClick={handleDecrease}>-</button> {quantity}{" "}
          <button onClick={handleIncrease}>+</button>
        </div>
        <div className="header-column">₱{totalprice.toLocaleString()}</div>
        <div className="header-column">
          <button className="deleteButton" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
