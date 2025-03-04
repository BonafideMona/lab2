function ProductHeader() {
  return (
    <header>
      <div className="container">
        <div className="header-row">
          <div className="header-column product-column">
            <input type="checkbox" className="product-checkbox" />
            Product
          </div>
          <div className="header-column">Unit Price</div>
          <div className="header-column">Quantity</div>
          <div className="header-column">Total Price</div>
          <div className="header-column">Actions</div>
        </div>
      </div>
    </header>
  );
}

export default ProductHeader;