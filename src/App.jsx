import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/component/banner/Banner';
import Header from './components/component/Header/Header';
import Cards from './components/component/cards/Cards';
import Main from './components/component/main/Main';
import Footer from './components/component/Footer/Footer';

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
            <Main />
            <Footer />
            <ToastContainer 
                position="top-center" // Set position to top-center
                autoClose={5000} 
                hideProgressBar={false} 
                closeOnClick 
                pauseOnHover 
                draggable 
                pauseOnFocusLoss 
            />
        </>
    );
}

export default App;
