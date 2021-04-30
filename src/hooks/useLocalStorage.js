import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  // value = nilai atau var yang akan disimpan di localstorage
  // setValue = fungsi untuk mengubah value => akan mengubah nilai di localStorage
  const [value, setValue] = useState(() => {
    // value
    // jika key sudah ada di localstorage, maka gunakan value dari localstorage
    // jika key tidak ada di localstorage, maka gunakan initialvalue lalu simpan ke localstorage
    const jsonValue = localStorage.getItem(key);
    // console.log(typeof jsonValue);
    if (jsonValue !== null) return JSON.parse(jsonValue);
    // initial value bisa berupa fungsi ataupun non-fungsi
    // jika fungsi, maka jalankan
    // jika bukan, maka return
    if (typeof initialValue === "function")
      return JSON.stringify(initialValue());
    return JSON.stringify(initialValue);
  });

  // jika value berubah, maka update localstorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
