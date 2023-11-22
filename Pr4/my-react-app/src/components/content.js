import React from 'react';
import './style/content.css';

const Header = ({ title }) => {
  return (
    <section className="content">
      <h1>{title}</h1>
      <p>Ipsum epsum, ipsum epsum</p>
    </section>
  );
};

export default Header;
