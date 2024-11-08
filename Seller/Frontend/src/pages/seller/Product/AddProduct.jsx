import React, { useState } from 'react';

const AddProduct = () => {
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [expiryDateEnabled, setExpiryDateEnabled] = useState(false);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Produk</h1>
        <p style={{ fontSize: '18px', color: '#555' }}>Tambah Produk</p>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        {/* Form Section */}
        <div style={{ flex: 1, background: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nama Produk</label>
            <input type="text" placeholder="Nama Produk" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nama Toko</label>
            <input type="text" placeholder="Nama Toko" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Pilih Kategori</label>
            <select style={inputStyle}>
              <option value="">Pilih Kategori</option>
              <option value="electronics">Elektronik</option>
              <option value="fashion">Fashion</option>
              <option value="groceries">Groceries</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Harga</label>
            <input type="number" placeholder="Harga" style={inputStyle} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Stok</label>
            <input type="number" placeholder="Stok" style={inputStyle} />
          </div>

          {/* Discount Toggle */}
          <div style={toggleContainerStyle}>
            <label style={labelStyle}>Discount</label>
            <label style={switchStyle}>
              <input
                type="checkbox"
                checked={discountEnabled}
                onChange={() => setDiscountEnabled(!discountEnabled)}
                style={{ display: 'none' }}
              />
              <span style={sliderStyle(discountEnabled)}></span>
            </label>
          </div>

          {/* Expiry Date Toggle */}
          <div style={toggleContainerStyle}>
            <label style={labelStyle}>Expiry Date</label>
            <label style={switchStyle}>
              <input
                type="checkbox"
                checked={expiryDateEnabled}
                onChange={() => setExpiryDateEnabled(!expiryDateEnabled)}
                style={{ display: 'none' }}
              />
              <span style={sliderStyle(expiryDateEnabled)}></span>
            </label>
          </div>
        </div>

        {/* Image Section */}
        <div style={{ flex: 1, background: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
          <div style={imagePlaceholderStyle}>
            <p style={{ color: '#7ab434', fontWeight: 'bold' }}>Upload Image</p>
            <span style={{ fontSize: '12px', color: '#888' }}>File Format: jpeg, png (600x600)</span>
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            <div style={imagePlaceholderStyle}>
              <p style={{ color: '#7ab434', fontWeight: 'bold' }}>Upload Image</p>
            </div>
            <div style={{ ...imagePlaceholderStyle, borderStyle: 'dashed' }}>
              <p style={{ fontSize: '24px', color: '#bbb' }}>+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '10px' }}>
        <button style={draftButtonStyle}>Save as Draft</button>
        <button style={publishButtonStyle}>Save & Publish</button>
      </div>
    </div>
  );
};

// Inline Styles
const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  backgroundColor: '#fff',
};

const toggleContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '15px',
};

const labelStyle = {
  fontWeight: 'bold',
};

const switchStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '40px',
  height: '20px',
};

const sliderStyle = (enabled) => ({
  position: 'absolute',
  cursor: 'pointer',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: enabled ? '#7ab434' : '#ccc',
  transition: '0.4s',
  borderRadius: '20px',
  content: '""',
  ':before': {
    position: 'absolute',
    content: '""',
    height: '16px',
    width: '16px',
    left: '2px',
    bottom: '2px',
    backgroundColor: 'white',
    transition: '0.4s',
    borderRadius: '50%',
    transform: enabled ? 'translateX(20px)' : 'translateX(0)',
  },
});

const imagePlaceholderStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '150px',
  border: '2px dashed #ddd',
  borderRadius: '10px',
  color: '#7ab434',
  fontSize: '14px',
};

const draftButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#ddd',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const publishButtonStyle = {
  padding: '10px 20px',
  backgroundColor: '#7ab434',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AddProduct;
