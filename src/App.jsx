import { useState } from "react";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";
import { InputBox } from "./components/index";
import "./App.css";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = useCurrencyInfo(from);
  const options = Object.keys(data);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * Number(data[to]));
  };

  return (
    <div id="main">
      <div className="card">
        <button className="swap-button" onClick={swap}>
          SWAP
        </button>

        <InputBox
          className="input-box"
          label="From"
          amount={amount}
          setAmount={setAmount}
          from={from}
          setFrom={setFrom}
          options={options}
        />

        <InputBox
          className="input-box"
          label="To"
          amount={convertedAmount}
          setAmount={setConvertedAmount}
          from={to}
          setFrom={setTo}
          disabled={true}
          options={options}
        />

        <button className="convert-button" onClick={convert}>
          Convert {from} to {to}
        </button>
      </div>
    </div>
  );
}

export default App;
