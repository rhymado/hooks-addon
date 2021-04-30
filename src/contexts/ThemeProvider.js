import React, { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(false);
  // false => "light"
  // true => "dark"
  const changeTheme = () => {
    console.log("changed");
    setTheme((prevTheme) => !prevTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
