import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={footerContent}>
        <p>&copy; 2024 Laravel Learning Hub. All Rights Reserved.</p>
        <p>Follow us on social media: 
          <a href="#" style={linkStyle}> Facebook</a> | 
          <a href="#" style={linkStyle}> Twitter</a> | 
          <a href="#" style={linkStyle}> Instagram</a>
        </p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '20px 0',
  textAlign: 'center',
//   position: 'fixed',
  bottom: 0,
  width: '100%',
};

const footerContent = {
//   maxWidth: '1200px',
  margin: '0 auto',
};

const linkStyle = {
  color: '#61dafb',
  textDecoration: 'none',
};

export default Footer;
