function App() {
  return (
    <div>
      <TopNavbar />
      <MainNavbar />
      <div>
        <Productheader />
      </div>
      <div>
        <ProductList />
      </div>
    </div>
  );
}

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="top-nav-container">
        
        {/* Left Links */}
        <div className="top-left">
          <a >Seller Centre</a>
          <a >Start Selling</a>
          <a >Download</a>
          <span>Follow us on</span>
          <span className="social-icons">📘 📷</span>
        </div>

        {/* Right Side (Icons & User) */}
        <div className="top-right">
          <div>
          </div>
          <span className="username">FunkyHorns</span>
        </div>
      </div>
    </div>
  );
}

function Product(){
  return(
    <div className="main-post">
      <Product
      imageURL="/pictures/shoppee.png" 
      />
    </div>
  )
}

function MainNavbar() {
  return (
    <nav className="main-navbar">
      <div className="main-nav-container">
        <div className="logo-section">
          <img src="/pictures/shopee.png" alt="Shopee Logo" className="logo" />
          <span className="checkout-text">Shopping Cart</span>
        </div>
      </div>
    </nav>
  );
}

function Productheader() {
  return (
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
  );
}

function ProductList(props) {
  return (
    <div className="container">
      <div className="product-row">
        <div className="product-column">
          <input type="checkbox" className="product-checkbox" />
          <img src={props.imageURL} alt="Product" className="product-image" />
          <span>NB North Bayou Monitor Arm</span>
        </div>
        <div className="header-column">₱769</div>
        <div className="header-column">
          <button>-</button> 1 <button>+</button>
        </div>
        <div className="header-column">₱769</div>
        <div className="header-column">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
  

export default App;
