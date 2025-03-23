import React from "react";
import wheatIconIcon from './../assets/icons/Vector-wheat.png';
import leafIcon from './../assets/icons/Vector-leaft.png';
import chilleIcon from './../assets/icons/Vector-chille.png';
import moreIcon from './../assets/icons/Vector-more.png';

const ProductCard = ({ product, setSelectedProduct, formatTag, wheatIconIcon, chilleIcon, leafIcon, moreIcon }) => {
  return (
    <div key={product.id} className="p-2 col-md-4">
      <div className="product-card">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${product.image})` }}>
          <div className="overlay">
            <span className="product-category-tag">{product.tags[0]}</span>
          </div>
        </div>
        <div className="product-details">
          <div className="product-row">
            <h5 className="product-title">{product.title}</h5>
            <div className="product-price">{product.price}</div>
          </div>
          <p className="product-description">{product.description}</p>
          <div className="product-row">
            <div className="product-tags">
              {product.tags.map((tag, index) => (
                <div key={index} className={`tag ${formatTag(tag)}`}>
                  {tag === "Gluten Free" && (
                    <img
                      style={{ height: 10, width: 10 }}
                      src={wheatIconIcon}
                      alt="Gluten Free Icon"
                    />
                  )}
                  {tag === "Spicy" && (
                    <img
                      style={{ height: 10, width: 10 }}
                      src={chilleIcon}
                      alt="Spicy Icon"
                    />
                  )}
                  {tag === "Vegan" && (
                    <img
                      style={{ height: 10, width: 10 }}
                      src={leafIcon}
                      alt="Vegan Icon"
                    />
                  )}
                  {tag}
                </div>
              ))}
            </div>
            <button
              type="button"
              className="read-more-btn"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
              onClick={() => setSelectedProduct(product)}
            >
              <img style={{ height: 16, width: 16 }} src={moreIcon} alt="More" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
