import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const calculate = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult);

      axios.post('https://mini-calcu-ator.onrender.com/api/calculations', {
        expression,
        result: evalResult
      });

      setExpression('');
    } catch {
      setResult('Error');
    }
  };

  useEffect(() => {
    axios.get('https://mini-calcu-ator.onrender.com/api/calculations')
      .then(res => setHistory(res.data));
  }, [result]);

  return (
    <div>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
      <h3>History:</h3>
      <ul>
        {history.map((calc, index) => (
          <li key={index}>{calc.expression} = {calc.result}</li>
        ))}
      </ul>
    </div>
  );
}

export default Calculator;
