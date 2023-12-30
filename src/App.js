import logo from './logo.svg';
import './App.css';
import { StockRow } from './StockRow/StockRow';
import { getStocks } from './apis/stockapi';
import { useEffect, useState } from 'react';

function App() {
  const [stockData, setStockData] = useState([]); 
  useEffect(() => {
    getStocks().then((stockData) => setStockData(stockData));
      
  }, []);
  return (
    <div className="container">
      <h1>React App</h1>
      <h1>Welcome to React App</h1>

      table to display stock data
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Stock Name</th>
            <th>Stock Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Apple</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Google</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Amazon</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>400</td>
          </tr>
        </tbody>
        {/* {stockData.map((stock) => (
          <StockRow
            key={stock.ticker}
            name={stock.name}
            ticker={stock.ticker}
            price={stock.price}
            type={stock.type}
            lastUpdated={stock.lastUpdated}
          />
        ))}    */}
      </table>
      <StockRow name="Apple" ticker="AAPL" price="100" type="Tech" lastUpdated="2021-01-01" />
      <StockRow name="Google" ticker="GOOG" price="200" type="Tech" lastUpdated="2021-01-01" />
    </div>
  );
}

export default App;
