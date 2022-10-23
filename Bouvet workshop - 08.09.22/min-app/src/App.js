import logo from './logo.svg';
import './App.css';
import Button from './Button';
import { useEffect, useState } from 'react';

function App() {

    const [quote, setQuote] = useState("");

    useEffect(() => {
      fetchData();
    }, []);

    const [bounce, setBounce] = useState(false);

    useEffect(() => {
      setBounce(quote.length > 50);
    }, [quote]);

  const fetchData = () => {
    fetch("https://api.kanye.rest")
      .then(res => res.json())
      .then(({quote}) => setQuote(quote));
  }

  const Kanye = () => <div className="App">
    
  </div> 

  return (
    <div className="App">
      <div className='Content'>
        <div className='kanye'>
          <img className={bounce ? "Bounce" : ""} src='kanye.png'></img>
        </div>
      {/* <button onClick={() => alert('Click!')}>Click me!</button> */}
      <Button onClick={() => fetchData()}></Button>
      <span>{quote}</span>
      </div>
    </div>
  );
}

export default App;
