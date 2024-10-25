import React from 'react';

const Card = ({ player, coin, setCoin, selectedPlayers, setSelectedPlayers }) => {
    const { playerId, name, country, image, role, biddingPrice } = player;

    const handleChoosePlayer = () => {
        const price = Number(biddingPrice);

        // Check if player is already selected
        if (selectedPlayers.some(selected => selected.playerId === playerId)) {
            alert(`${name} has already been chosen.`);
            return;
        }

        if (coin >= price) {
            setCoin(coin - price);
            setSelectedPlayers([...selectedPlayers, player]); // Save the whole player object
            alert(`${name} has been chosen!`);
        } else {
            alert("Not enough coins to choose this player.");
        }
    };

    const isChosen = selectedPlayers.some(selected => selected.playerId === playerId);

    return (
        <div className="border rounded-lg p-4 shadow-lg">
            <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg" />
            <div className="flex items-center mt-2">
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/person-male.png" alt="Player Icon" />
                <h3 className="text-xl font-bold ml-2">{name}</h3>
            </div>
            <hr className="mt-2" />
            <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center">
                    <img width="20" height="20" src="https://img.icons8.com/forma-light/50/flag.png" alt={`${country} flag`} />
                    <p className="ml-2">{country}</p>
                </div>
                <p className="border border-solid bg-slate-400 rounded-lg p-1 text-xs">{role}</p>
            </div>
            <hr className="mt-2 mb-2" />

            <div className="flex justify-between items-center mt-4">
                <p className="font-bold">Price: {biddingPrice}</p>
                <button 
                    className={`btn w-[135px] h-auto text-xs ${coin < biddingPrice ? 'bg-gray-400 cursor-not-allowed' : ''}`} 
                    onClick={handleChoosePlayer}
                    disabled={coin < biddingPrice}  // Only disable if not enough coins
                >
                    {isChosen ? "Player Chosen" : "Choose Player"}
                </button>
            </div>
        </div>
    );
};

export default Card;
