import React from "react";
import ShopMen from './shopMens.jpg';
import ShopWomen from './shopWomens.jpg';
import './styles.css';


const Directory = props => {
    return (
      <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url(${ShopWomen})`
            }}
          >
           <ahref>
              Shop Womens
            </ahref>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${ShopMen})`
            }}
          >
           <ahre>
              Shop Mens
            </ahre>
          </div>
        </div>
      </div>
    );
  };
  
  export default Directory;