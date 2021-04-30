import React, { useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Local() {
  const [user, setUser] = useState("");
  const [token, setToken] = useLocalStorage("token");
  return (
    <>
      <div>{token}</div>
      <input
        type="text"
        name="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={() => setToken(btoa(user))}>get token</button>
    </>
  );
}
