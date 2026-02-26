import { useState, useEffect } from "react"
import { Routes, Route } from "react-router";
import Home from "./pages/home";
import About from "./pages/about";
import CoinDetails from "./pages/coinDetails";
import NotFound from "./pages/notFound";
import Header from "./components/Header";


const API_URL = import.meta.env.VITE_API_URL

function App() {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc')

  useEffect(()=>{

    const fetchCoins = async () =>{
      try{
        const res = await fetch(`${API_URL}&order=${sortBy}&per_page=${limit}&page=1&sparkline=false`);

        if(!res.ok) throw new Error('Failed to fetch data');

        const data = await res.json();
       
        setCoins(data);

      }
      catch(error){
        setError(error.message);       
      }
      finally{
        setLoading(false);
      }
    } 

    fetchCoins();   
  }, [limit]);

  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home 
          coins={coins} 
          filter={filter} 
          setFilter={setFilter} 
          limit={limit} 
          setLimit={setLimit}
          sortBy={sortBy}
          setSortBy={setSortBy}
          loadin={loading}
          error={error}
        ></Home>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/coin/:id" element={<CoinDetails></CoinDetails>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </>
    
  )
}

export default App
