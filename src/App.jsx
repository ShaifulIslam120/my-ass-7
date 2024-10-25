import { useState } from 'react';
import './App.css';
import Banner from './components/component/banner/Banner';
import Header from './components/component/Header/Header';
import Cards from './components/component/cards/Cards';

function App() {
  const [coin, setCoin] = useState(0);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const addCoins = () => {
    setCoin(coin + 600000);
  };

  return (
    <>
      <Header coin={coin} />
      <Banner addCoins={addCoins} />
      <Cards 
          coin={coin} 
          setCoin={setCoin} 
          selectedPlayers={selectedPlayers} 
          setSelectedPlayers={setSelectedPlayers} 
      />
    </>
  );
}

export default App;
