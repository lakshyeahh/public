import React from 'react';
import "./form.css";

const FooterSitemapLinks = () => {
  return (
    <footer
      style={{
        backgroundColor: '#fff',
        padding: '20px',
        textAlign: 'center',
        marginTop: '60px',
        bottom: '0',
        left: '0',
        width: '100%',
      }}
    >
      <div>
        <a href="/">Home</a>
        {' | '}
        <a href="/about">About</a>
        {' | '}
        <a href="/contact">Contact</a>
      </div>
      <div>
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSitemapLinks;
