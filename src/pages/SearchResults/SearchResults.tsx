// src/pages/SearchResults/SearchResults.tsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import './SearchResults.css';

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Sample product data (later this will come from your backend/Supabase)
  const products = [
    { id: 1, brand: 'Zara', size: 'M', quality: 'Like New', price: 25, image: 'https://picsum.photos/200/250?random=30' },
    { id: 2, brand: 'H&M', size: 'S', quality: 'Good', price: 15, image: 'https://picsum.photos/200/250?random=31' },
    { id: 3, brand: 'Nike', size: 'L', quality: 'Excellent', price: 45, image: 'https://picsum.photos/200/250?random=32' },
    { id: 4, brand: 'Adidas', size: 'M', quality: 'Very Good', price: 35, image: 'https://picsum.photos/200/250?random=33' },
    { id: 5, brand: 'Levi\'s', size: 'L', quality: 'Like New', price: 40, image: 'https://picsum.photos/200/250?random=34' },
    { id: 6, brand: 'Gap', size: 'S', quality: 'Good', price: 20, image: 'https://picsum.photos/200/250?random=35' },
    { id: 7, brand: 'Uniqlo', size: 'M', quality: 'Excellent', price: 30, image: 'https://picsum.photos/200/250?random=36' },
    { id: 8, brand: 'Mango', size: 'L', quality: 'Very Good', price: 28, image: 'https://picsum.photos/200/250?random=37' },
  ];

  return (
    <div className="search-results-page">
      {query && (
        <div className="search-info">
          <p>Search results for: <strong>"{query}"</strong></p>
        </div>
      )}

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.brand} />
            </div>
            <div className="product-info-card">
              <p className="product-details">
                {product.brand} · {product.size} · {product.quality}
              </p>
              <p className="product-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;