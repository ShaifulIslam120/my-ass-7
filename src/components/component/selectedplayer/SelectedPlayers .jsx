// src/components/component/cards/SelectedPlayers.js

import React from 'react';
import Card from '../../card/Card';

const SelectedPlayers = ({ selectedPlayers }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {selectedPlayers.map(player => (
                <Card 
                    key={player.playerId} 
                    player={player} 
                    showSummary={true} // Show only image, name, and batting type
                />
            ))}
        </div>
    );
};

export default SelectedPlayers;
