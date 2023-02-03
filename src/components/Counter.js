import React, { useState, useEffect } from "react";

const endpoint = "https://randomuser.me/api/";

const callRestAPI = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return JSON.stringify(data.results[0].location.street.number);
};

export default function Counter() {
  const [count, setCount] = useState("0");

  useEffect(() => {
    callRestAPI().then((result) => setCount(result));
  }, []);

  return <div>{count}</div>;
}
