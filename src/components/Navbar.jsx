
import React from 'react';
const Navbar = () => (
  <div className="flex nav">
    <div className="company">Code village LLC</div>
    <div className="contact flex">
      <span>Home</span>
      <span>Product</span>
      <span>Work</span>
      <span>About</span>
      <span>Contact Us</span>
    </div>
    <div className="flex">
      <button>Sign Up</button>
      <button>Login</button>
    </div>
  </div>
);

export default Navbar