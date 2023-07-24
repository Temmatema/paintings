import React, { useEffect, useState } from "react";
import { ReactComponent as Logo } from "../img/logo.svg";
import { ReactComponent as ThemeLogo } from "../img/theme.svg";

const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

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
