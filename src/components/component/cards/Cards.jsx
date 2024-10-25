import React, { useEffect, useState } from 'react';
import Card from '/src/components/component/card/Card';
import SelectedPlayers from '../../component/selectedplayer/SelectedPlayers ';

const Cards = ({ coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const [cards, setCards] = useState([]);
    const [activeButton, setActiveButton] = useState(1); // Default to show available players

    const loadDefaultCards = () => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setCards(data.players));
    };

    useEffect(() => {
        loadDefaultCards(); // Initial load of cards
    }, []);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    return (
        <div className='p-5'>
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-bold'>{activeButton === 1 ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}</h1>
                <div className="flex space-x-1 mt-2">
                    <button
                        className={`btn ${activeButton === 1 ? 'bg-[#E7FE29]' : 'btn-active'} text-base font-bold`}
                        onClick={() => handleButtonClick(1)}
                    >
                        Available
                    </button>
                    <button
                        className={`btn ${activeButton === 2 ? 'bg-[#E7FE29]' : 'btn-active'} text-base font-bold`}
                        onClick={() => handleButtonClick(2)}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            {activeButton === 1 ? (
                <div>
                    {/* Cards Grid */}
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
                </div>
            ) : (
                <SelectedPlayers 
                    selectedPlayers={selectedPlayers} 
                    setSelectedPlayers={setSelectedPlayers} 
                    coin={coin} 
                    setCoin={setCoin} 
                    onAddMorePlayers={() => handleButtonClick(1)} // Pass function to switch view
                />
            )}
        </div>
    );
};

export default Cards;
