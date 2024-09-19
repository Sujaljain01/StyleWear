import React, { useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
export const backend_url = process.env.REACT_APP_BACKEND_URL;
const ShopCategory = (props) => {
  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInfo = () => {
<<<<<<< HEAD
    fetch(`${backend_url}/allproducts`)
=======
    fetch('https://backend-rouge-six-21.vercel.app/allproducts')
>>>>>>> parent of 85db307 (new changes)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Filter products by category ahead of rendering
  const filteredProducts = allproducts.filter(item => item.category === props.category);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1 - {filteredProducts.length > 12 ? 12 : filteredProducts.length}</span> out of {filteredProducts.length} Products
        </p>
        <div className="shopcategory-sort">Sort by <img src={dropdown_icon} alt="Sort" /></div>
      </div>

      <div className="shopcategory-products">
        {loading ? (
          <p>Loading products...</p>
        ) : (
          filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 12).map((item, i) => (
              <Item
                id={item.id}
                key={i}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))
          ) : (
            <p>No products found for this category.</p>
          )
        )}
      </div>

      {filteredProducts.length > 12 && (
        <div className="shopcategory-loadmore">
          <Link to="/" style={{ textDecoration: 'none' }}>Explore More</Link>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
