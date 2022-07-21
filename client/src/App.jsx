import "./App.css";
import axios from "axios";
import { useState } from "react";
import Main from './Main'
function App() {
  const [data,setData] = useState([])
  const [mainData,setMainData] = useState(null)
  const onSearch = (e)=>{
     const value = e.target.value
      value && axios.post(`http://localhost:3000/companies/${value}`).then((res) => {
        setData(res.data)
        setMainData(null)
      });

  }
  const getData = (option)=>{
    setData([])
    setMainData(option)
  }
  return <div className="App">
    <div className="main_head">
      <h1 className="head_text">
        Stocks
      </h1>
    </div>
    <div className="main">
      <h2 className="main_text">The easiest way to buy<br/> and sell stocks.</h2>
      <p className="main_para">Stock analysis and screening tool for <br/> investor india.</p>
    <div className="search-bar-dropdown">
      <div className="search-bar">
      <input
        type="text"
        className="input"
        placeholder="Search"
        onChange={(e)=>onSearch(e)}
      />
      </div>
      
      <ul id="results" className="list-group">
        {data.map((option, index) => {
          return (
            <li
              type="button"
              key={index}
             onClick={()=>getData(option)}
             className="main_list"
            >
              {option.Name}
              
            </li>
          );
        })}
      </ul>
    </div>
    {mainData !== null && <Main data={mainData}/>}
    </div>
  
  </div>;
}

export default App;
