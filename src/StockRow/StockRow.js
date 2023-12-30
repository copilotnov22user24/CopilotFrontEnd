// arrow function with name StockRow
export const StockRow = ({ name, ticker, price, type, lastUpdated }) => {
    return (
        // <tr>
        // <td>{name}</td>
        // <td>{ticker}</td>
        // <td>{price}</td>
        // <td>{type}</td>
        // <td>{lastUpdated}</td>
        // </tr>
        //display stock data using card
         <div className="card">
            <div className="card-body">
                 <h5 className="card-title">{name}</h5>
                 <h6 className="card-subtitle mb-2 text-muted">{ticker}</h6>
                 <p className="card-text">{price}</p>
                 <p className="card-text">{type}</p>
                 <p className="card-text">{lastUpdated}</p>
                 {/* if price>o show green else red */}
                    <p className="card-text" style={{color: price>100 ? 'green' : 'red'}}>{price}</p>

             </div>
         </div>

    );
    }