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

  export default TopNavbar;