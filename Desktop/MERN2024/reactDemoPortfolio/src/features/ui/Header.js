import React from "react";

const Header = () => {
  return (
    <div className="bg-slate-800 text-fuchsia-50 flex items-baseline justify-between px-4 py-3.5 ">
      <h1> TailWind</h1>

      <nav className="space-x-4">
        <button>About</button>
        <button>Contact</button>
      </nav>
    </div>
  );
};

export default Header;
