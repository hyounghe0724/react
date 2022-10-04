import { useState, useEffect } from "react";
//component is just return jsx
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [having, setHaving] = useState("");
  const [Btc, setBtc] = useState(0);

  function onChange(event) {
    console.log("onChange");
    setHaving(event.target.value);
  }
  function handleChange(event) {
    setBtc(event.target.value);
  }
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setBtc(json[0]["quotes"]["USD"]["price"]);
        setLoading(false);
      });
  }, []);
  console.log("Btc: ", Btc);
  return (
    <div>
      <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={handleChange}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <input
        onChange={onChange}
        value={having}
        type="number"
        placeholder="having your dollars"
      ></input>
      <h2>{having / Btc ? having / Btc : null} BTC</h2>
    </div>
  );
}

export default App;
