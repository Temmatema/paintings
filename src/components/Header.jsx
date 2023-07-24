import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as ThemeLogo } from "../img/theme.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="header">
      <Logo />
      <button onClick={toggleTheme}>
        <ThemeLogo />
      </button>
    </header>
  );
};

export default Header;
