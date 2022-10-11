import { useState, useEffect } from "react";

function Counter() {
  const [name, setName] = useState("Ecem");
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component mount edildi");

    setInterval(() => {
      setNumber((a) => a + 1);
    }, 1000);
    return () => console.log("Component unmount edildi")
  }, []);

  useEffect(() => {
    console.log("Number state güncellendi");
  }, [number]);

  useEffect(() => {
    console.log("Name state güncellendi");
  }, [name]);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}> Click</button>

      <hr />

      <h1>{name}</h1>
      <button onClick={() => setName("Sultan")}> Click</button>
    </div>
  );
}

export default Counter;
