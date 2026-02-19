import React, { useState } from 'react';
import './App.css';

function App() {
const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight!");
      return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal Weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    setResult(`Your BMI is ${bmi} : You are ${category}`);
  };


  return (
    
    
        <div className="container2">
          <h1 className='H1'>BMI Calculator</h1>

          
            <div className='unit_conversion'>
              <h5>1 ft = 30.48 cm</h5>
              <h5>1 inch = 2.54 cm</h5>
            </div>
       

          {/* Height */}
          <label htmlFor="height"><h2>Height (cm)</h2></label>
          <input
            type="number"
            id="height"
            placeholder="e.g. 170"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          {/* Weight */}
          <label htmlFor="weight"><h2>Weight (kg)</h2></label>
          <input
            type="number"
            id="weight"
            placeholder="e.g. 65"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />

          {/* Btn */}
          <button onClick={calculateBMI}>Calculate</button>

          {/* Result */}
          <div className="result">
            <h2>Result:</h2>
            {result}
          </div>
        </div>
     
    
  );
}

export default App;
