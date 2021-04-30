import React, { useState, useEffect } from "react";

import { useTheme } from "../contexts/ThemeProvider";

export default function Home() {
  // [value, setValue] = useState(initialValue)
  const [username, setUsername] = useState("");
  const [order, setOrder] = useState(0);
  const themeContext = useTheme();
  useEffect(() => {
    console.log("use Effect");
  }, [username, order]);
  useEffect(() => {
    console.log(themeContext);
  }, [themeContext]);
  // [] => equivalent dengan componendDidMount
  // [var] => equivalent dengan componentDidUpdate
  // undefined => dijalankan setiap rerender
  return (
    <div
      style={{
        background: themeContext.theme ? "brown" : "grey",
        color: themeContext.theme ? "white" : "black",
        height: "100vh",
      }}
    >
      <div>Home</div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          const input = e.target.value;
          if (
            input.charCodeAt(input.length - 1) < 48 ||
            input.charCodeAt(input.length - 1) > 57
          )
            return setUsername(input);
        }}
      />
      <input
        type="number"
        name="order"
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      />
      <div>
        <button
          onClick={() => {
            console.log("clicked");
            themeContext.changeTheme();
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}
