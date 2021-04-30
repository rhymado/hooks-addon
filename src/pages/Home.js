import React, { useState } from "react";

export default function Home() {
  // [value, setValue] = useState(initialValue)
  const [teks, setTeks] = useState("");
  console.log(teks);
  return (
    <>
      <div>Home</div>
      <input
        type="text"
        name="teks"
        value={teks}
        onChange={(e) => {
          const input = e.target.value;
          if (
            input.charCodeAt(input.length - 1) >= 48 &&
            input.charCodeAt(input.length - 1) <= 57
          ) {
            return;
          } else {
            setTeks(input);
          }
        }}
      />
      {/* <p>{teks}</p> */}
    </>
  );
}
