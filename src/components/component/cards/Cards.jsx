import React, { useEffect, useState } from 'react';
import Card from '../../card/Card';
import SelectedPlayers from '../../component/selectedplayer/SelectedPlayers ';

const Cards = ({ coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const [cards, setCards] = useState([]);
    const [activeButton, setActiveButton] = useState(1); // Default to show available players

    useEffect(() => {
        fetch('/public/players.json')
            .then(res => res.json())
            .then(data => setCards(data.players));
    }, []);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1>{activeButton === 1 ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}</h1>
                <div className='flex space-x-1'>
                    <button
                        className={`btn ${activeButton === 1 ? 'bg-[#E7FE29]' : 'btn-active'}`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Available
                    </button>
                    <button
                        className={`btn ${activeButton === 2 ? 'bg-[#E7FE29]' : 'btn-active'}`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Selected ({selectedPlayers.length}) 
                    </button>
                </div>
            </div>
            
            {activeButton === 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {cards.map(player => (
                        <Card 
                            key={player.playerId} 
                            player={player} 
                            coin={coin} 
                            setCoin={setCoin} 
                            selectedPlayers={selectedPlayers}
                            setSelectedPlayers={setSelectedPlayers}
                        />
                    ))}
                </div>
            ) : (
                <SelectedPlayers 
                    selectedPlayers={selectedPlayers} 
                    setSelectedPlayers={setSelectedPlayers} 
                    coin={coin} 
                    setCoin={setCoin} 
                />
            )}
        </div>
    );
};

export default Cards;
