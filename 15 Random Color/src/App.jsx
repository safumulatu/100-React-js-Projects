import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f35885").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(colors);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="ur color here ...."
            className={`${error ? "error" : null}`}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
};
export default App;
