import React, { useEffect, useState } from 'react';
import Card from '../../card/Card';
import SelectedPlayers from '/src/components/component/selectedplayer/SelectedPlayers ';

const Cards = ({ coin, setCoin }) => {
    const [cards, setCards] = useState([]);
    const [activeButton, setActiveButton] = useState(1); // Default to available players
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    useEffect(() => {
        fetch('/public/players.json')
            .then(res => res.json())
            .then(data => setCards(data.players));
    }, []);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const handleChoosePlayer = (player) => {
        if (selectedPlayers.includes(player)) {
            alert("Player already selected!");
            return;
        }

        if (coin >= player.biddingPrice) {
            setCoin(coin - player.biddingPrice);
            setSelectedPlayers([...selectedPlayers, player]);
        } else {
            alert("Not enough coins!");
        }
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h1>{activeButton === 1 ? "Available Players" : "Selected Players"}</h1>
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
                        Selected
                    </button>
                </div>
            </div>
            {activeButton === 1 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {cards.map(player => (
                        <Card 
                            key={player.playerId} 
                            player={player} 
                            showSummary={false} // Show full details for available players
                            handleChoosePlayer={handleChoosePlayer}
                        />
                    ))}
                </div>
            ) : (
                <SelectedPlayers selectedPlayers={selectedPlayers} />
            )}
        </div>
    );
};

export default Cards;
