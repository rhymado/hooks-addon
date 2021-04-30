import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import useLocalStorage from "../hooks/useLocalStorage";

export default function Local() {
  const [user, setUser] = useState("");
  const [token, setToken] = useLocalStorage("token");
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
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
      <div>
        <div>
          <button onClick={() => dispatch({ type: "SUB_COUNTER" })}>-</button>
          <div
            style={{
              width: "200px",
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {counter}
          </div>
          <button onClick={() => dispatch({ type: "ADD_COUNTER" })}>+</button>
        </div>
      </div>
    </>
  );
}
