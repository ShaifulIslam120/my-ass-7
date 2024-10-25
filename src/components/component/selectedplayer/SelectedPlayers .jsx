import React from 'react';
import PropTypes from 'prop-types'; 

const SelectedPlayers = ({ selectedPlayers, setSelectedPlayers, setCoin, coin, onAddMorePlayers }) => {
    const handleDeletePlayer = (playerId, biddingPrice) => {
        const updatedPlayers = selectedPlayers.filter(player => player.playerId !== playerId);
        setSelectedPlayers(updatedPlayers);
        setCoin(coin + Number(biddingPrice)); 
    };

    return (
        <div className="grid grid-cols-1 gap-4 mt-4">
            {selectedPlayers.length > 0 ? (
                selectedPlayers.map(player => (
                    <div key={player.playerId} className="border rounded-lg p-4 shadow-lg flex items-start justify-between">
                        <div className="flex items-start">
                            <img src={player.image} alt={player.name} className="w-[100px] h-[100px] object-cover rounded-lg mt-2" />
                            <div className='ml-4'>
                                <h3 className="text-lg font-bold mt-2">{player.name}</h3>
                                <p className="text-sm mt-1">Batting Type: {player.battingType}</p>
                            </div>
                        </div>
                        <button 
                            onClick={() => handleDeletePlayer(player.playerId, player.biddingPrice)}
                            className="btn btn-danger text-red-500 hover:bg-red-100 ml-4"
                        >
                           <img width="20" height="20" src="https://img.icons8.com/plasticine/100/filled-trash.png" alt="filled-trash"/>
                        </button>
                    </div>
                ))
            ) : (
                <p className="text-center col-span-full">No players selected yet.</p>
            )}
            <div>
                <button 
                    className="btn bg-blue-500 text-white"
                    onClick={onAddMorePlayers}
                >
                    Add More Players
                </button>
            </div>
        </div>
    );
};

// PropTypes for type checking
SelectedPlayers.propTypes = {
    selectedPlayers: PropTypes.arrayOf(
        PropTypes.shape({
            playerId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            battingType: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            biddingPrice: PropTypes.number.isRequired,
        })
    ).isRequired,
    setSelectedPlayers: PropTypes.func.isRequired,
    setCoin: PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
    onAddMorePlayers: PropTypes.func.isRequired, // PropType for the new function
};

export default SelectedPlayers;
