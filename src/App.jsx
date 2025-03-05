import { useState } from "react";
import TopNavbar from "./components/TopNavbar";
import MainNavbar from "./components/MainNavbar";
import ProductHeader from "./components/ProductHeader";
import ProductList from "./components/Productlist";
import Checkout from "./components/Checkout";

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (product, isChecked) => {
    if (isChecked) {
      setSelectedProducts((prevSelectedProducts) => {
        const existingProduct = prevSelectedProducts.find((p) => p.name === product.name);
        if (existingProduct) {
          return prevSelectedProducts.map((p) =>
            p.name === product.name ? { ...p, quantity: product.quantity } : p
          );
        } else {
          return [...prevSelectedProducts, product];
        }
      });
    } else {
      setSelectedProducts((prevSelectedProducts) =>
        prevSelectedProducts.filter((p) => p.name !== product.name)
      );
    }
  };

  const totalPrice = selectedProducts.reduce((total, product) => {
    const price = Number(product.price.replace("₱", "").replace(",", ""));
    return total + price * product.quantity;
  }, 0);

  return (
    <div>
      <TopNavbar />
      <div>
        <div>
          <MainNavbar />
        </div>
        <ProductHeader />
      </div>
      <div>
        <ProductList
          imageURL="/public/pictures/northbayou.webp"
          name="NB North Bayou Monitor Arm"
          price="₱759"
          quantity={1}
          onCheckboxChange={handleCheckboxChange}
        />
        <ProductList
          imageURL="/public/pictures/7500f.webp"
          name="AMD Ryzen 5 7500f Boxed Desktop"
          price="₱10,599"
          quantity={1}
          onCheckboxChange={handleCheckboxChange}
        />
        <ProductList
          imageURL="/public/pictures/thermal.webp"
          name="Thermal Grizzly Kryosheet Grapene Pads"
          price="₱1,145"
          quantity={1}
          onCheckboxChange={handleCheckboxChange}
        />
        <ProductList 
          imageURL="/public/pictures/ttairflex.webp"
          name="TT airflex Ergochair Home Office Mesh chair"
          price="₱9,599"
          quantity={1}
          onCheckboxChange={handleCheckboxChange}
        />
      </div>
      {selectedProducts.length > 0 && <Checkout totalPrice={totalPrice} />}
    </div>
  );
}

export default App; 