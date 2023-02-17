import React from "react";

function Dropdown({ setIsDropdownOpen, handleDeletePost, openModal }) {
  return (
    <>
      <div
        className="dropdown-overlay"
        onClick={() => setIsDropdownOpen(false)}
      ></div>
      <div className="dropdown-container">
        <button onClick={handleDeletePost} className="dropdown delete">
          Удалить
        </button>
        <button onClick={openModal} className="dropdown update">
          Изменить
        </button>
      </div>
    </>
  );
}

export default Dropdown;
