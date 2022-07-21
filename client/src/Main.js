const Main = ({ data }) => {
  return (
    <div className="main_data">
      <h2 className="data_head">{data.Name}</h2>
      <div className="data_con">
        <div className="data_section">
          <div className="data_item">
            <p>Market Cap</p>
            <p className="data_value">&#8377;{data.MarketCap}</p>
          </div>
          <div className="data_item">
            <p>Dividend Yield</p>
            <p className="data_value">{data.DividendYield}%</p>
          </div>
          <div className="data_item">
            <p>Debt Equity</p>
            <p className="data_value">{data.DebtToEquity}%</p>
          </div>
        </div>
        <div className="data_section">
          <div className="data_item">
            <p>Current Price</p>
            <p className="data_value">&#8377;{data.CurrentMarketPrice}</p>
          </div>
          <div className="data_item">
            <p>ROCE</p>
            <p className="data_value">{data.ROCE}%</p>
          </div>
          <div className="data_item">
            <p>EPS</p>
            <p className="data_value">&#8377;{data.EPS}</p>
          </div>
        </div>
        <div className="data_section">
          <div className="data_item">
            <p>Stock P/E</p>
            <p className="data_value">&#8377;{data.StockPE}</p>
          </div>
          <div className="data_item">
            <p>ROE</p>
            <p className="data_value">{data.ROEPreviousAnnum}%</p>
          </div>
          <div className="data_item">
            <p>Reserves</p>
            <p className="data_value">&#8377;{data.Reserves}</p>
          </div>
        </div>
        <div className="data_section">
          <div className="data_item">
            <p>Debt</p>
            <p className="data_value">&#8377;{data.Debt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
