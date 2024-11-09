// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import Modal from './Model';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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

        <button onClick={openModal}>Sign in</button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="38px"
          viewBox="0 -960 960 960"
          width="38px"
          fill="#3B4261"
          aria-label="Menu"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>

      {isModalOpen && <Modal onClose={closeModal} />}
    </nav>
  );
}

export default Navbar;
