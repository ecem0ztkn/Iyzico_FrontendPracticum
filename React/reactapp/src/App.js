import "./App.css";
// import Header from './components/Header';
import User from "./components/User";

// const name = "Ecem";
// const surname = "Öztekin"
// const isLoggedIn = true;

const friends = [
  {
    id: 1,
    name: "Ahmet",
  },
  {
    id: 2,
    name: "Hakan",
  },
  {
    id: 3,
    name: "Dilara",
  },
];

function App() {
  return (
    <>
      {/* <h1>
        {isLoggedIn ? `Merhaba ${name} ${surname}` : `Giriş Yap`}
        </h1>
      <Header/> */}
      <User
        name="Ecem"
        surname="Tunç"
        isLoggedIn={true}
        age={22}
        friends={friends}
        address={{
          title : "Selçuklu/Konya",
          zip : 44538 
        }}
      />
    </>
  );
}

export default App;
