import "./App.css";
import IdCard from "./IdCard.jsx";
import maxencePicture from "./assets/images/maxence.png";
import women from "./assets/images/women.png";
import Random from "./Random.jsx"; 

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2> Idcard </h2>
      <IdCard
        firstName="John"
        lastName="Doe"
        gender="Male"
        height={176}
        birth={new Date("1992-07-14")}
        picture={maxencePicture}
      />
      <IdCard
        firstName="Obrien"
        lastName="Delores"
        gender="female"
        height={172}
        birth={new Date("1993-05-11")}
        picture={women}
      />

      <h2> Random </h2>
      <Random min={1} max={6} />
      <Random min={1} max={100} />
      </div>
      );
    
}

export default App;