import { useState } from "react";
import data from "./data";
import "./index.css";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </div>
  );
}
export default App;
