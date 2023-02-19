import "./App.css";
import { useEffect, useState } from "react";
import { CardList } from "./components/CardList";
import { SearchBox } from "./components/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters-search-box"
        placeholder="search monsters"
        onChangeHandler={(event) =>
          setSearchField(event.target.value.toLocaleLowerCase())
        }
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
