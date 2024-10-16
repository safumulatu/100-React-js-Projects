import "./index.css";
import Review from "./Review";
const App = () => {
  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Our Reviews</h1>
        </div>
        <div className="underline"></div>
        <Review />
      </div>
    </div>
  );
};
export default App;
