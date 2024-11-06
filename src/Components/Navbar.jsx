import React from 'react';
import './Navbar.css'; // Assume you have a CSS file for styling

function Navbar() {
  return (
    <nav>
      <div className="navBar1">
        <img 
          src="/BookMyShow.png" 
          alt="Book My Show Logo" 
          style={{ width: '220px', height: '54px' }} 
        />
        
        <input 
          type="text" 
          placeholder="Search for Movies, Events, Plays, Sports And Activities" 
          aria-label="Search"
        />

        <select aria-label="Select Location">
          <option value="jabalpur1">Jabalpur</option>
          <option value="bhopal">Bhopal</option>
          <option value="indore">Indore</option>
          <option value="balaghat">Balaghat</option>
        </select>

        <button>Sign in</button>

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          height="46px" 
          viewBox="0 -960 960 960" 
          width="40px" 
          fill="#e8eaed" 
          aria-label="Menu"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
      </div>
    </nav>
  );
}

export default Navbar;
