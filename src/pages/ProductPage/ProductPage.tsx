// src/pages/ProductPage/ProductPage.tsx
// src/pages/ProductPage/ProductPage.tsx
import React, { useState } from 'react';
import './ProductPage.css';

function ProductPage() {
  // State to track which image is currently displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of product images (you can add more later)
  const productImages = [
    "https://picsum.photos/400/500?random=1",
    "https://picsum.photos/400/500?random=2",
    "https://picsum.photos/400/500?random=3",
    "https://picsum.photos/400/500?random=4"
  ];

  // Go to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Go to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-page">
      {/* Top Section - Product Details */}
      <div className="product-main">
        {/* Left Side - Product Images */}
        <div className="product-images-section">
          <div className="main-image">
            <img 
              src={productImages[currentImageIndex]} 
              alt="Product" 
            />
            
            {/* Navigation Arrows */}
            <button className="image-arrow left-arrow" onClick={prevImage}>
              ←
            </button>
            <button className="image-arrow right-arrow" onClick={nextImage}>
              →
            </button>

            {/* Image Counter */}
            <div className="image-counter">
              {currentImageIndex + 1} / {productImages.length}
            </div>
          </div>
        </div>

        {/* Right Side - Product Info & Actions */}
        <div className="product-details-section">
          {/* Product Info */}
          <div className="product-info">
            <h1 className="product-name">Name</h1>
            <p className="product-price">Price</p>
            <p className="product-description">Description</p>
          </div>

          {/* Action Buttons */}
          <div className="product-actions">
            <button className="action-button primary">Add to bag</button>
            <button className="action-button primary">Make an Offer</button>
            <button className="action-button primary">Message Seller</button>
          </div>

          {/* Seller Card */}
          <div className="seller-card">
            <div className="seller-info">
              <div className="seller-avatar">👤</div>
              <div className="seller-details">
                <p className="seller-username">@username</p>
                <div className="seller-rating">⭐⭐⭐⭐⭐</div>
              </div>
            </div>
            <button className="create-bundle-button">Create Bundle</button>
          </div>
        </div>
      </div>

      {/* Scrollable Sections Below */}
      
      {/* More From This Seller */}
      <div className="section">
        <h2 className="section-title">More From This Seller</h2>
        <div className="seller-items-grid">
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=5" alt="Item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=6" alt="Item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=7" alt="Item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=8" alt="Item" />
          </div>
        </div>
        <button className="visit-shop-button">Visit Shop</button>
      </div>

      {/* Recent Reviews */}
      <div className="section">
        <h2 className="section-title">Recent Reviews</h2>
        <div className="reviews-list">
          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-avatar">👤</div>
              <div className="reviewer-info">
                <p className="reviewer-username">by username</p>
                <p className="review-date">3 months ago</p>
              </div>
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="review-content">
              <img src="https://picsum.photos/60/80?random=9" alt="Review item" className="review-image" />
              <p className="review-text">Fast shipping & item is exactly as described. Thank you!</p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-avatar">👤</div>
              <div className="reviewer-info">
                <p className="reviewer-username">by username</p>
                <p className="review-date">3 months ago</p>
              </div>
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="review-content">
              <img src="https://picsum.photos/60/80?random=10" alt="Review item" className="review-image" />
              <p className="review-text">Item in great condition, fast shipping, thank you!!</p>
            </div>
          </div>

          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-avatar">👤</div>
              <div className="reviewer-info">
                <p className="reviewer-username">by username</p>
                <p className="review-date">8 months ago</p>
              </div>
              <div className="review-stars">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="review-content">
              <img src="https://picsum.photos/60/80?random=11" alt="Review item" className="review-image" />
              <p className="review-text">Item was just as described and in great condition :) thanks</p>
            </div>
          </div>
        </div>
      </div>

      {/* You also might like */}
      <div className="section">
        <h2 className="section-title">You also might like</h2>
        <div className="similar-items-scroll">
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=12" alt="Similar item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=13" alt="Similar item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=14" alt="Similar item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=15" alt="Similar item" />
          </div>
          <div className="item-card">
            <img src="https://picsum.photos/150/200?random=16" alt="Similar item" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;