import React from "react";

const HeaderButton = (icon, name, number) => {
  return (
    <button>
      <span>{icon}</span>
      <span>{name}</span>
      <span>{number}</span>
    </button>
  );
};

export default HeaderButton;
