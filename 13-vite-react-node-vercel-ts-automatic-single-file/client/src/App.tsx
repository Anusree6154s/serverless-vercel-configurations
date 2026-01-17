import React, { useEffect, useState } from "react";

export default function App() {
  const [routeRes1, setRouteRes1] = useState("");
  const [routeRes2, setRouteRes2] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const [data1, data2] = await Promise.all([
          fetch("/route1").then((res) => res.json()),
          fetch("/route2").then((res) => res.json()),
        ]);

        setRouteRes1(data1.data);
        setRouteRes2(data2.data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    }
    fetchData();
  });
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2 style={{ color: "violet" }}>App</h2>
      <br />
      <p>
        <strong>Route1 Res: </strong>
        <span>{routeRes1}</span>
      </p>
      <p>
        <strong>Route2 Res: </strong>
        <span>{routeRes2}</span>
      </p>
    </div>
  );
}
