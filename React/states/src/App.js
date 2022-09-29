import { useState } from "react";

function App() {
  const [name, setName] = useState("Ahmet");
  const [age, setAge] = useState(22);
  const [friends, setFriends] = useState(["Ahmet", "Dilara"]);
  const [address, setAddress] = useState({title:"Konya", zip:45632});

  // console.log(name,age);

  return (
    <div className="App">
      <h1>Merhaba! {name}</h1>
      <h2>{age}</h2>

      <button onClick={() => setName("Ecem")}>Change Name</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <h2>Friends</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends,"Ayşe"])}>Add New Friend</button>

      <h2>{address.title} {address.zip}</h2>

      <button onClick={() => setAddress({...address, title:"İstanbul",zip:44444})}>Change the address</button>
    </div>
  );
}

export default App;
