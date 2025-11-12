// src/pages/Wishlist/Wishlist.tsx
import React from 'react';
import './Wishlist.css';

function Wishlist() {
  // Sample wishlist items (later this will come from your backend/Supabase)
  const wishlistItems = [
    { 
      id: 1, 
      title: 'Vintage Denim Jacket', 
      price: 45, 
      size: 'M', 
      condition: 'Like New', 
      brand: 'Levi\'s',
      image: 'https://picsum.photos/200/250?random=40',
      description: 'Classic vintage denim jacket in excellent condition. Perfect for layering.'
    },
    { 
      id: 2, 
      title: 'Floral Summer Dress', 
      price: 30, 
      size: 'S', 
      condition: 'Good', 
      brand: 'Zara',
      image: 'https://picsum.photos/200/250?random=41',
      description: 'Beautiful floral print dress, perfect for summer occasions.'
    },
    { 
      id: 3, 
      title: 'Leather Ankle Boots', 
      price: 60, 
      size: '8', 
      condition: 'Very Good', 
      brand: 'Aldo',
      image: 'https://picsum.photos/200/250?random=42',
      description: 'Stylish leather boots with minimal wear. Great for fall and winter.'
    },
    { 
      id: 4, 
      title: 'Cashmere Sweater', 
      price: 55, 
      size: 'L', 
      condition: 'Excellent', 
      brand: 'J.Crew',
      image: 'https://picsum.photos/200/250?random=43',
      description: 'Soft cashmere sweater, barely worn. A timeless wardrobe staple.'
    },
    { 
      id: 5, 
      title: 'High-Waist Jeans', 
      price: 35, 
      size: '28', 
      condition: 'Like New', 
      brand: 'Madewell',
      image: 'https://picsum.photos/200/250?random=44',
      description: 'Flattering high-waist jeans with vintage wash. Comfortable fit.'
    },
  ];

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">My Wishlist</h1>

      <div className="wishlist-grid">
        {wishlistItems.map((item) => (
          <div key={item.id} className="wishlist-card">
            <div className="wishlist-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="wishlist-info">
              <p className="wishlist-price">${item.price}</p>
              <p className="wishlist-meta">{item.size} / {item.condition} / {item.brand}</p>
              <h3 className="wishlist-item-title">{item.title}</h3>
              <p className="wishlist-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;